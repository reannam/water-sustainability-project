"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock function to simulate API call
const fetchAffectedAreas = async (postcode: string) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data - in a real app, this would come from an API
  const mockAreas = [
    "City Center",
    "Riverside",
    "Oakwood",
    "Hillside",
    "Meadowlands",
  ];

  // Randomly select 2-4 areas
  return mockAreas
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 3) + 2);
};

export default function NearMePage() {
  const [postcode, setPostcode] = useState("");
  const [affectedAreas, setAffectedAreas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setAffectedAreas([]);

    // Basic UK postcode validation
    const postcodeRegex =
      /^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}$/i;
    if (!postcodeRegex.test(postcode)) {
      setError("Please enter a valid NI postcode");
      setIsLoading(false);
      return;
    }

    try {
      const areas = await fetchAffectedAreas(postcode);
      setAffectedAreas(areas);
    } catch (err) {
      setError("Failed to fetch affected areas. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 items-center justify-center my-auto">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
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

          {affectedAreas.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">
                Affected Areas Near {postcode}:
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {affectedAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
