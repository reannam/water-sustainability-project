"use client";
import FAQAccordion from '@/components/faq-accordion'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FaqPage() {
  return (
    <main>
      <h1>Welcome to our site</h1>
      {/* Other content */}
      <FAQAccordion />
    </main>
  )
}
