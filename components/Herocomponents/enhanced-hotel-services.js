"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Wifi,
  Car,
  UserCheck,
  Utensils,
  Dumbbell,
  SpadeIcon as SpaIcon,
  PocketIcon as Pool,
  Gamepad2,
  Users,
  PresentationIcon as PresentationScreen,
  Flame,
  Wine,
  Coffee,
  Bike,
  Fish,
  Home,
  Refrigerator,
  BookOpen,
} from "lucide-react"

export default function EnhancedHotelServices() {
  const [mounted, setMounted] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    { icon: <Wifi className="h-8 w-8" />, name: "Wifi" },
    { icon: <Car className="h-8 w-8" />, name: "Free Parking" },
    { icon: <UserCheck className="h-8 w-8" />, name: "Room Service" },
    { icon: <Utensils className="h-8 w-8" />, name: "Restaurant" },
    { icon: <Dumbbell className="h-8 w-8" />, name: "Gymnasium" },
    { icon: <SpaIcon className="h-8 w-8" />, name: "Spa" },
    { icon: <Pool className="h-8 w-8" />, name: "Swimming Pool" },
    { icon: <Gamepad2 className="h-8 w-8" />, name: "Indoor Game" },
    { icon: <Users className="h-8 w-8" />, name: "Children Activities" },
    { icon: <PresentationScreen className="h-8 w-8" />, name: "Conference Hall" },
    { icon: <Flame className="h-8 w-8" />, name: "Barbeque" },
    { icon: <Wine className="h-8 w-8" />, name: "Bar Counter" },
    { icon: <Coffee className="h-8 w-8" />, name: "Cafe" },
    { icon: <Bike className="h-8 w-8" />, name: "Cycling" },
    { icon: <Fish className="h-8 w-8" />, name: "Fishing Deck" },
    { icon: <Home className="h-8 w-8" />, name: "Private Balcony" },
    { icon: <Refrigerator className="h-8 w-8" />, name: "Mini Fridge" },
    { icon: <BookOpen className="h-8 w-8" />, name: "Library" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-3 px-4 py-1 bg-blue-900 text-white rounded-full text-sm font-medium"
        >
          OUR SERVICES
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-light mb-6 text-blue-950 tracking-tight"
        >
          Hotel Features & Conveniences
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="h-0.5 w-24 bg-blue-900 mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-slate-600 max-w-3xl mx-auto"
        >
          Enjoy a relaxing stay with all our facilities right at your service as you need for a wonderful experience at
          our beautiful range of abodes.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -15px rgba(30, 58, 138, 0.15)",
              y: -7,
            }}
            className="relative bg-white rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 border border-blue-100 hover:border-blue-900/30 shadow-sm overflow-hidden group"
          >
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-blue-900/5"
              />
            )}

            <motion.div
              className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 text-blue-900"
              whileHover={{
                rotate: [0, -5, 5, -3, 3, 0],
                transition: { duration: 0.5 },
              }}
            >
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-blue-100 rounded-full"
                  style={{ zIndex: -1 }}
                />
              )}
              {service.icon}
            </motion.div>

            <p className="font-medium text-center text-slate-700 relative z-10">{service.name}</p>

            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

