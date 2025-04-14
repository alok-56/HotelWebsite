import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Room1 from "@/public/hotelraj/rooms/room1.jpg";
import Room2 from "@/public/hotelraj/rooms/room2.jpg";
import Room3 from "@/public/hotelraj/rooms/room3.jpg";
import Room4 from "@/public/hotelraj/rooms/room4.jpg";
import Room5 from "@/public/hotelraj/rooms/room5.jpg";
import { useRouter } from "next/navigation";

export function Room() {
  const router=useRouter()
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [Room1, Room2, Room3, Room4, Room5];

  const title = "Mountain View Villa near Panshet";
  const location = "Bhagatwadi, Pune";
  const price = 8999;
  const originalPrice = 9999;
  const propertyType = "Entire Villa";
  const includedMeals = "Breakfast and Dinner";
  const amenities = ["Mountain View", "River View", "Nature Walk"];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="group relative overflow-hidden rounded-xl border-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)]">
      <div className="flex flex-col md:flex-row relative">
        
        {/* Image Section */}
        <div className="relative aspect-[5/3] w-full md:w-1/2 overflow-hidden">
          <Image
            src={
              images[currentImageIndex] ||
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            }
            alt={title}
            fill="true"
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Favorite Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute right-4 top-4 rounded-full bg-white/95 p-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-colors",
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              )}
            />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={previousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-md transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
          >
            <svg
              className="h-5 w-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 opacity-0 shadow-md transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Carousel Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  index === currentImageIndex
                    ? "bg-white w-4"
                    : "bg-white/60 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 w-full md:w-1/2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold md:text-xl text-gray-900 leading-tight">
                {title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {location}
              </p>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-4 flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity}
                className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {amenity}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4 items-center justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {includedMeals && (
              <div className="flex items-center gap-2 rounded-full bg-green-50 px-2 py-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-green-600"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.57 12.57l-6 -6a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L12 11.414l5.293 5.293a1 1 0 0 0 1.414-1.414z" />
                </svg>
                <span className="md:text-xs text-tiny font-medium text-green-600">
                  Free {includedMeals}
                </span>
              </div>
            )}
          </div>

          {/* Book Now Button */}
          <div onClick={()=>router.push("/book")} className="mt-6 flex justify-center md:justify-start">
            <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
