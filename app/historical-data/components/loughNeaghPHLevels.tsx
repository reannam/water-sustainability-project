"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// Helper function to load CSV
const loadCSV = async (url: string): Promise<string[][]> => {
  const response = await fetch(url);
  const csvText = await response.text();
  return csvText
    .trim()
    .split("\n")
    .map((line) => line.split(",").map((cell) => cell.trim()));
};

export default function LoughNeaghPHLevels() {
  const [dataInfo, setDataInfo] = useState<any[]>([]); // State for chart data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Function to fetch and process CSV data
  const fetchAndProcessData = async () => {
    setIsLoading(true);
    setError("");

    try {
      const historicalDataCSV = await loadCSV("/lakeWaters/historicData.csv");

      // Convert CSV rows into structured data
      const historicalData = historicalDataCSV.map((row) => ({
        year: parseInt(row[1], 10), // Assuming year is in the second column
        ph: parseFloat(row[2]), // Assuming pH is in the third column
      }));

      setDataInfo(historicalData); // Update chart data state
    } catch (err) {
      setError("Failed to load data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAndProcessData();
  }, []);

  return (
    <Card className="w-full max-w-3xl mb-15">
      <CardHeader>
        <CardTitle>Lough Neagh pH Levels (1990-2018)</CardTitle>
        <CardDescription>Line graph of pH levels in Lough Neagh over time</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ChartContainer
            config={{
              ph: {
                label: "pH Level",
                color: "var(--turquoise)",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataInfo} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  label={{ value: "Year", position: "bottom", offset: 0 }}
                  ticks={[1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018]}
                />
                <YAxis
                  dataKey="ph"
                  name="pH"
                  domain={[7, 8.5]}
                  label={{ value: "pH", angle: -90, position: "insideLeft" }}
                />
                <ChartTooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="ph"
                  stroke="var(--color-ph)"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <ChartTooltipContent>
        <div className="text-sm font-medium">
          Year: {label}
          <br />
          pH: {payload[0].value}
        </div>
      </ChartTooltipContent>
    );
  }
  return null;
};
