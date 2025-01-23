"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
      <div className="about-us-container">
         <img 
            src="/logo.png" 
            alt="Aqua Alert NI Logo" 
            className="logo" 
          />
      <h1 className="page-title">About Us</h1>
      <div className="policy-content">
        <section className="section-spacing">
          <h2>Welcome to Aqua Alert NI</h2>
          <p>
          Your trusted source for information and action on water pollution in Northern Ireland.
          </p>
        </section>
        
        <section className="section-spacing">
          <h2>Our Mission</h2>
          <p>
          At Aqua Alert NI, we are dedicated to raising awareness and providing resources on the
              critical issue of water pollution affecting the waterways in Northern Ireland. Our primary
              focus is on Lough Neagh, the largest freshwater lake in Ireland and a key resource for the
              region.    
          </p>
        </section>

        <section className="section-spacing">
          <h2>Why Lough Neagh?</h2>
          <p>
          Lough Neagh holds an essential place in Northern Ireland's ecosystem. It is a major source
              of drinking water, supports a rich diversity of aquatic life, and is increasingly threatened by
              pollution, especially from algal blooms and waste. We aim to address these issues and protect
              this vital resource.
          </p>
        </section>

        <section className="section-spacing">
          <h2>Get Involved</h2>
          <p>
          There are several ways you can contribute to our cause and help protect our waterways:
            </p>
            <ul className="ul-design">
              <li>Report pollution sightings</li>
              <li>Volunteer for community clean-ups and events</li>
              <li>Support local initiatives and workshops</li>
            </ul>
            <Button className="button">Learn More</Button>
        </section>

        <section className="section-spacing">
        <h2>Our Vision</h2>
            <p>
              We envision a future where the waters of Northern Ireland are free from pollution, teeming
              with life, and protected for generations to come. Together, we can make a difference.
            </p>
        </section>

      </div>
    </div>
  );
}
