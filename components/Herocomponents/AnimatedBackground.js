import React from "react";
import { useState, useEffect } from "react";
import hotelake from "@/public/Hotel_lake/HotelImage/Hotel1.jpg";
import Image from "next/image";
const AnimatedBackground = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentImageIndex
              ? "opacity-100 animate-zoom-in"
              : "opacity-0"
          }`}
          src={image}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default AnimatedBackground;
