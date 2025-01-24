"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import LoughNeaghPHLevels from "../historical-data/components/loughNeaghPHLevels";

import Image from "next/image";


export default function HistoricalData() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 id="phTitle">
        Lough Neagh, Northern Ireland 
      </h1>
      <h2 id="phInfo">
        pH level Data from each January, 1990 - 2018
      </h2>

      <div>
          <LoughNeaghPHLevels/>
      </div>
      

      <section className="mb-8">
        <h3 id="phWeeTitles">About this data</h3>
        <p className="mb-4">
          This data was sourced from the OpenData NI website. We used the file
          titled 'river-water-quality-monitoring-1990-to-2018'. The specific area we 
          have chosen to represent in the above graph is 'LOWER BANN AT TOOME BRIDGE', 
          using the earliest possible pH data of each year, as some years have multiple 
          entries for January, but more recent years do not.
        </p>
      </section>

      <section>
        <h3 id="phWeeTitles">
          Why the pH level?
        </h3>
        <p className="mb-4">
          We thought that the pH level would be one of the more important pieces of data in 
          this table. Why? Algal blooms are most likely to happen between an alkaline pH of 
          8.2 - 8.7. As you can see above, this means that Lough Neagh, particularly near
          Toomebridge, has been susceptible to algal blooms for over twenty years, so a new,
          sustainable solution is much needed to protect this area of water!
        </p>
        <h4 id="phWeeTitles">
          Sources:
        </h4>
        <ul>
          <li>
            <a id="pHLinks" href="https://admin.opendatani.gov.uk/dataset/river-water-quality-monitoring-1990-to-2018"> The OpenData NI Source</a>
          </li>
          <li>
            <a id="pHLinks" href="https://algaeresearchsupply.com/pages/algae-culture-and-ph?srsltid=AfmBOor6pHHTeZ9YUKkDinC9b-RbS9jWTBr_soF32n1iUT02d6SlhwrP"> Algae Alkaline Information</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
