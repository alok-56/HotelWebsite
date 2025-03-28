"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/Herocomponents/placeholderinput";
import { WordRotate } from "@/components/ui/word-rotate";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import BookingSearch from "./booking-search";

import Hotelraj from "@/public/hotelraj/hotelImage/hotel3.jpg";
import brills from "@/public/Brills/HotelImage/Hotel5.jpg";
import brillsag from "@/public/Brills_Ag/Hotelimage/hotel3.jpg";
import hotelake from "@/public/Hotel_lake/HotelImage/Hotel1.jpg";

const Herosection = () => {
  const images = [
    process.env.NEXT_PUBLIC_IMAGE_URL || Hotelraj,
    brills,
    brillsag,
    hotelake,
  ];

  return (
    <div className="md:h-[90vh] h-[50vh] relative bg-black">
      <AnimatedBackground images={images} interval={5000} />
      <div className="relative z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="mx-auto max-w-6xl px-6  text-center">
          <BookingSearch />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
