"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, MapPin, Phone, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Nearby1 from "@/public/Nearbydestination/Nearby1.jpg"
import Nearby2 from "@/public/Nearbydestination/Nearby2.jpg"
import Nearby3 from "@/public/Nearbydestination/Nearby3.jpg"
import Nearby4 from "@/public/Nearbydestination/Nearby4.jpg"

export default function LuxuryHotel() {
  const [activeImage, setActiveImage] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  const images = [
    {
      src: Nearby1,
      alt: "Luxury hotel garden view with palm trees and pathway",
    },
    {
      src: Nearby2,
      alt: "Elegant infinity pool surrounded by palm trees",
    },
    {
      src: Nearby3,
      alt: "Hotel pavilion at night with ambient lighting",
    },
    {
      src: Nearby4,
      alt: "Recreational area with colorful amenities",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="w-full bg-[#f0f5f8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-12">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeImage === index ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className={cn("absolute inset-0 w-full h-full", activeImage === index ? "z-10" : "z-0")}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeImage === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
                  )}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isInView ? "80px" : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-0.5 bg-blue-400 mb-6"
              />
              <h2 className="text-blue-900 font-light tracking-widest text-sm mb-2">DISCOVER UNPARALLELED LUXURY</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 leading-tight">
                Your Sanctuary <br />
                <span className="text-blue-800">Awaits</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-6 text-gray-700"
            >
              <p className="leading-relaxed">
               {` Nestled in a serene oasis where time slows down, Celestial Haven offers an escape from the ordinary. Our
                meticulously designed spaces blend contemporary elegance with timeless comfort, creating an atmosphere
                where every moment becomes a cherished memory.`}
              </p>
              <p className="leading-relaxed">
               {` From the moment you arrive, our dedicated concierge team anticipates your every need, ensuring a
                seamless experience tailored to your preferences. Immerse yourself in our world-class amenities, from
                the tranquil infinity pool to our award-winning spa treatments.`}
              </p>
              <p className="leading-relaxed">
               {` Each of our suites is a private sanctuary, thoughtfully appointed with premium furnishings and
                breathtaking views that inspire and rejuvenate. Experience culinary excellence at our signature
                restaurant, where local ingredients transform into extraordinary gastronomic journeys.`}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex items-center gap-2 text-blue-900">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">Prime beachfront location</span>
              </div>
              <div className="flex items-center gap-2 text-blue-900">
                <Star className="h-5 w-5 fill-blue-500 stroke-blue-500" />
                <span className="text-sm">5-star luxury experience</span>
              </div>
              <div className="flex items-center gap-2 text-blue-900">
                <Users className="h-5 w-5" />
                <span className="text-sm">Personalized service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Reservations</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-700" />
                    <span className="text-lg font-medium text-gray-900">+1 (800) 123-4567</span>
                  </div>
                </div>

                <Button className="bg-blue-900 hover:bg-blue-950 text-white rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg group">
                  Book Your Stay
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

