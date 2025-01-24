"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Water Pollution?",
    answer:
      "Water Pollution occurs when chemicals and other harmful substances contaminate water sources such as lakes, rivers and seas. This can lead to drinking and bathing water contamination, endangering sea life and causing illness.",
  },
  {
    question: "What is Algae Bloom?",
    answer:
      "Algal Bloom is the rapid growth of bacteria and microbes in the water, that form large areas of scum that can be seen covering a bed of water affected by algae. Lough " +
      "Neagh is a good example of this. As the Algal Bloom was not slowed or prevented the algae spread throughout the lough and because Lough Neagh is one of the largest sources of drinking water in Northern Ireland it became polluted and undrinkable.",
  },
  {
    question: "Why is Lough Neagh Affected?",
    answer:
      "Due to fluctuations in weather in summer, agriculture runoff, rise in construction in surrounding areas and dumping of chemicals directly into Lough Neagh have all contributed towards the pollution of Lough Neagh. ",
  },
  {
    question: "Can I drink the water anyway?",
    answer:
      "Depending on the water pollution in your area the water may still be drinkable, however it is worth asking a local MP or council on the current condition of the water. In the colder months of the year the algae " +
      "will die off and improve the condition of the water. Water filtration and purification systems are still working, but have been ramped up due to the current condition of Lough Neagh, this is obviously costly.",
  },
  {
    question: "Where at the main areas affected by Water pollution?",
    answer:
      "The main areas that are affected are those on the north east of Lough Neagh, including: Randalstown, Magherafelt, Toomebridge, Antrim and Lower River Bann area.",
  },
]

export default function FAQAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6 faq-title">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

