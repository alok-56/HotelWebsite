"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const destinations = [
  {
    name: "Kamshet",
    properties: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQbSJqpPmFvGBP9j8RU4gyjQ0sK37T.png",
  },
  {
    name: "Pawna Lake",
    properties: 23,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQbSJqpPmFvGBP9j8RU4gyjQ0sK37T.png",
  },
  {
    name: "Lavasa",
    properties: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQbSJqpPmFvGBP9j8RU4gyjQ0sK37T.png",
  },
  {
    name: "Lonavala",
    properties: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQbSJqpPmFvGBP9j8RU4gyjQ0sK37T.png",
  },
  {
    name: "Khopoli",
    properties: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQbSJqpPmFvGBP9j8RU4gyjQ0sK37T.png",
  },
];

export default function DestinationsCarousel() {
  return (
    <div className="w-full  mx-auto px-4 py-8">
      <h2 className="md:text-4xl  font-semibold text-gray-800 mb-8">
        Nearby popular destinations
      </h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="md:w-11/12 mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/3 md:basis-1/2 lg:basis-1/4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill="true"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-semibold mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {destination.properties}{" "}
                      {destination.properties === 1 ? "Property" : "Properties"}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute hidden md:block -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute hidden md:block -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}
