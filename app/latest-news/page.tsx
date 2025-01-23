"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LatestNewsPage() {
  const getRandomDate = () => {
    const start = new Date();
    const end = new Date(start);
    end.setFullYear(start.getFullYear() - 1); 
    const randomDate = new Date(end.getTime() + Math.random() * (start.getTime() - end.getTime()));
    return randomDate.toISOString().split("T")[0];
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Latest News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <a
          href="https://ukgbc.org/a-conversation-on-biodiversity-at-lough-neagh-a-fact-sheet/"
          className="block border rounded-md shadow-lg hover:shadow-xl transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random1.png"
                  alt="News 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">Biodiversity in Lough Neagh</h2>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://www.bbc.co.uk/news/articles/cz6lpeg4veeo"
          className="block border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random2.jpg"
                  alt="News 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">Three firms selected for Lough Neagh space project</h2>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://www.belfastlive.co.uk/news/northern-ireland/northern-ireland-beach-clean-litter-22758824"
          className="block border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random3.jpg"
                  alt="News 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">Local Beach Cleanup</h2>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://www.theguardian.com/uk-news/article/2024/jul/22/pollution-plan-must-cut-intensive-farming-for-lough-neagh-to-survive"
          className="block border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random4.jpg"
                  alt="News 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">NI Water From Above</h2>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://www.belfasttelegraph.co.uk/news/environment/plan-proposed-to-dam-strangford-lough-reclaim-5000-acres-of-land-and-build-an-atomic-power-plant/a1286446264.html"
          className="block border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random5.jpg"
                  alt="News 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">Ancient plans for new dam in NI</h2>
              </div>
            </CardContent>
          </Card>
        </a>

        <a
          href="https://www.e-ir.info/2024/09/22/northern-ireland-as-a-sacrifice-zone-the-lough-neagh-crisis/"
          className="block border rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          <Card>
            <CardContent>
              <div className="h-80 bg-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/random6.jpg"
                  alt="News 6"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border-t mt-4 pt-2">
                <p className="text-sm text-gray-500">{getRandomDate()}</p>
                <h2 className="text-lg font-semibold">How Dangerous is the Green Algae?</h2>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>
    </div>
  );
}
