"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Nearby1 from "@/public/Nearbydestination/Nearby1.jpg"
import Nearby2 from "@/public/Nearbydestination/Nearby2.jpg"
import Nearby3 from "@/public/Nearbydestination/Nearby3.jpg"
import Nearby4 from "@/public/Nearbydestination/Nearby4.jpg"
const destinations = [
  {
    name: "Victoria Memorial",
    properties: 3,
    image: Nearby1,
  },
  {
    name: "Howrah Bridge",
    properties: 23,
    image: Nearby1,
  },
  {
    name: "Indian Museum",
    properties: 2,
    image: Nearby2,
  },
  {
    name: "Belur Math",
    properties: 7,
    image: Nearby3,
  },
  {
    name: "Eco Park",
    properties: 1,
    image: Nearby4,
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
                <div className="relative md:aspect-[4/3] aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill="true"
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 md:p-4 p-1 overflow-hidden text-white">
                    <h3 className="md:text-2xl text-xs font-semibold mb-1">
                      {destination.name}
                    </h3>
                    <p className="md:text-sm text-xs text-gray-200">
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
