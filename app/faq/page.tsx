"use client";
import FAQAccordion from "./faq-accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FaqPage() {
  return (
    <div>
        <img 
          src="/logo.png" 
          alt="Aqua Alert NI Logo" 
          className="logo" 
        />
        <FAQAccordion />
  </div>
);
}
