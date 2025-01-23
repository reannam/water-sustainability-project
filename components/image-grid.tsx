"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImageGrid() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0V7gc8a7najvWjyrH7y0Kx0JcaoaLY.png",
      alt: "Green waters of Lough Neagh showing signs of pollution",
      label: "Lough Neagh",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0V7gc8a7najvWjyrH7y0Kx0JcaoaLY.png",
      alt: "Plastic bottles polluting water",
      label: "Plastic Pollution",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0V7gc8a7najvWjyrH7y0Kx0JcaoaLY.png",
      alt: "People observing water pollution effects",
      label: "Agricultural Pollution",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0V7gc8a7najvWjyrH7y0Kx0JcaoaLY.png",
      alt: "Historical image of industrial discharge",
      label: "Historical",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="mt-3 px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-medium">
              {image.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-sky-700 mb-8">Get Involved!</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-sky-600 hover:bg-sky-700"
          >
            Sign Up
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-sky-600 text-sky-600 hover:bg-sky-50"
          >
            Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
}
