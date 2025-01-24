"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

// Utility function to load and parse CSV
const loadCSV = async (url: string): Promise<string[][]> => {
  const response = await fetch(url);
  const csvText = await response.text();
  return csvText
    .trim()
    .split("\n")
    .map((line) => line.split(",").map((cell) => cell.trim()));
};

// Main Component
export default function NearMePage() {
  const [postcode, setPostcode] = useState("");
  const [lakeNames, setLakeNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setLakeNames([]);

    // Extract the first part of the postcode (e.g., BT1 from BT1 1AA)
    const trimmedPostcode = postcode.split(" ")[0].toUpperCase();

    // Basic UK postcode validation (checking only the first part)
    const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?$/i;
    if (!postcodeRegex.test(trimmedPostcode)) {
      setError("Please enter a valid NI postcode.");
      setIsLoading(false);
      return;
    }

    try {
      // Load CSV data
      const areaLakesCSV = await loadCSV("/lakeWaters/postcodeAreas.csv");
      const lakeInfoCSV = await loadCSV("/lakeWaters/lakeBodies.csv");

      // Convert CSV rows into structured objects
      const areaLakes = areaLakesCSV.map((row) => ({
        postcode: row[0].toUpperCase(),
        area: row[1].toUpperCase(), // Ensure case-insensitive comparison
        lakeIds: row[2].split("."),
      }));

      const lakeInfo = lakeInfoCSV.reduce((map, row) => {
        map[row[0]] = row[3]; // Map lake ID to lake name
        return map;
      }, {} as Record<string, string>);

      // Find lakes for the entered postcode
      const matchedArea = areaLakes.find(
        (area) => area.postcode === trimmedPostcode
      );

      if (!matchedArea) {
        setError("No lakes found for this postcode.");
        return;
      }

      // Get lake names for the area
      const names = matchedArea.lakeIds.map((id) => {
        return lakeInfo[id];
      });
      // .filter(Boolean); // Remove undefined values

      setLakeNames(names);
      router.refresh();
    } catch (err) {
      setError("Failed to load data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 items-center justify-center my-auto">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center faq-title">
            Near Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="postcode"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your postcode
              </label>
              <Input
                type="text"
                id="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. BT1 1AA"
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Find Affected Areas"}
            </Button>
          </form>

          {error && <p className="mt-4 text-red-600">{error}</p>}

          {lakeNames.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">
                Lakes Near {postcode.split(" ")[0].toUpperCase()}:
              </h2>
              
                {lakeNames.map((name, index) => (
                  <p key={index}>
                    {name}
                  </p>
                ))}
                
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
