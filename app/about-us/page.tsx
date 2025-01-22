"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="about-us-container">
      <Card className="card">
        <CardHeader>
          <img 
            src="/logo.png" 
            alt="Aqua Alert NI Logo" 
            className="logo" 
          />
        </CardHeader>
        <CardContent className="card-content">
          <div className="intro">
            <h2>Welcome to Aqua Alert NI</h2>
            <p>
              Your trusted source for information and action on water pollution in Northern Ireland.
            </p>
          </div>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              At Aqua Alert NI, we are dedicated to raising awareness and providing resources on the
              critical issue of water pollution affecting the waterways in Northern Ireland. Our primary
              focus is on Lough Neagh, the largest freshwater lake in Ireland and a key resource for the
              region.
            </p>
          </div>

          <div className="why-lough-neagh">
            <h3>Why Lough Neagh?</h3>
            <p>
              Lough Neagh holds an essential place in Northern Ireland's ecosystem. It is a major source
              of drinking water, supports a rich diversity of aquatic life, and is increasingly threatened by
              pollution, especially from algal blooms and waste. We aim to address these issues and protect
              this vital resource.
            </p>
          </div>

          <div className="get-involved">
            <h3>Get Involved</h3>
            <p>
              There are several ways you can contribute to our cause and help protect our waterways:
            </p>
            <ul>
              <li>Report pollution sightings</li>
              <li>Volunteer for community clean-ups and events</li>
              <li>Support local initiatives and workshops</li>
            </ul>
            <Button className="button">Learn More</Button>
          </div>

          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              We envision a future where the waters of Northern Ireland are free from pollution, teeming
              with life, and protected for generations to come. Together, we can make a difference.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
