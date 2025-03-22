"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/Herocomponents/placeholderinput";
import { WordRotate } from "@/components/ui/word-rotate";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import BookingSearch from "./booking-search";

const Herosection = () => {
  const handleSearchChange = (e) => {
    console.log("Search changed:", e.target.value);
  };

  const handleSearchSubmit = (e) => {
    // Handle search submission
    e.preventDefault();
    console.log("Search submitted");
  };

  const images = [
    process.env.NEXT_PUBLIC_IMAGE_URL ||
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <div className="md:h-[90vh] h-[50vh] relative bg-black">
      {/* Background Image with Overlay */}
      {/* <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${
          process.env.NEXT_PUBLIC_IMAGE_URL ||
          "https://historywithtravel.com/images/Lonavala/lonavala-demography.jpg"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
    </div> */}
      <AnimatedBackground images={images} interval={5000} />
      {/* Content */}
      <div className="relative z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="mx-auto max-w-6xl px-6  text-center">
         

      
          <BookingSearch />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
