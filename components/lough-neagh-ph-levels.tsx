"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

// Mock data for Lough Neagh pH levels from 1990 to 2018
const generateData = () => {
  const data = []
  for (let year = 1990; year <= 2018; year++) {
    data.push({
      year,
      ph: (7.5 + Math.sin((year - 1990) * 0.2) * 0.5 + (Math.random() - 0.5) * 0.3).toFixed(2),
    })
  }
  return data
}

const data = generateData()

export default function LoughNeaghPHLevels() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Lough Neagh pH Levels (1990-2018)</CardTitle>
        <CardDescription>Line graph of pH levels in Lough Neagh over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            ph: {
              label: "pH Level",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                type="number"
                domain={["dataMin", "dataMax"]}
                label={{ value: "Year", position: "bottom", offset: 0 }}
                ticks={[1990, 1995, 2000, 2005, 2010, 2015, 2018]}
              />
              <YAxis
                dataKey="ph"
                name="pH"
                domain={[6.5, 8.5]}
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
      </CardContent>
    </Card>
  )
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
    )
  }
  return null
}

