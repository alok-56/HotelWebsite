"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/Herocomponents/placeholderinput";
import { WordRotate } from "@/components/ui/word-rotate";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

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
      "https://historywithtravel.com/images/Lonavala/lonavala-demography.jpg",
    "https://th.bing.com/th/id/OIP.t46x1nBkvddK3X3Xfs0QeAAAAA?rs=1&pid=ImgDetMain",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <div className="md:min-h-screen h-[50vh] relative bg-black">
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
      <div className="relative z-10">
        {/* Navigation */}
       

        {/* Hero Content */}
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="md:text-4xl  text-2xl font-bold tracking-tight text-white sm:text-6xl">
              Discover the world of
              <WordRotate
                className="block mt-2 md:text-4xl text-2xl sm:text-7xl"
                words={["Word", "Rotate"]}
              />
              {/* <span className="block mt-2 text-5xl sm:text-7xl">Adventure</span> */}
            </h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex items-center justify-center"
          >
            <PlaceholdersAndVanishInput
              placeholders={[
                "Search by city...",
                "Try 'Mountain View'",
                "Find your next adventure",
                "Discover hidden gems",
              ]}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
