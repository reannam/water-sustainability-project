"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FAQItem = {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is React?",
    answer:
      "React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps.",
  },
  {
    question: "What are the key features of React?",
    answer:
      "Some key features of React include: Virtual DOM for better performance, JSX for easier component writing, one-way data binding, and reusable/composable UI components.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks similar to HTML, making it easier to write and understand the structure of React components.",
  },
  {
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct manipulation of the DOM, which can be slow.",
  },
  {
    question: "What are React Hooks?",
    answer:
      "React Hooks are functions that let you use state and other React features in functional components, without writing a class. Some commonly used hooks include useState, useEffect, and useContext.",
  },
]

export default function FAQAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
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

