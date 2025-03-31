"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Calendar, Check, Gift, Phone, ShieldCheck, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AmenitiesSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: [0.175, 0.885, 0.32, 1.275], // Custom easing for a slight bounce
      },
    }),
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }

  const featureCards = [
    {
      title: "Hassle-free Booking",
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      features: [
        "Trust in our secure payment gateway for a safe and reliable transaction.",
        "Receive instant confirmation of your reservation.",
      ],
    },
    {
      title: "Hassle-free Cancellation",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      features: ["Hassle-free Cancellation", "Receive instant confirmation of your cancellation."],
    },
    {
      title: "Best Price Guaranteed",
      icon: <Tag className="w-8 h-8 text-blue-600" />,
      features: ["Enjoy the lowest prices.", "No hidden fees or additional charges."],
    },
    {
      title: "Season Best Offers",
      icon: <Gift className="w-8 h-8 text-blue-600" />,
      features: [
        "Enjoy special offers and discounts on your customized booking.",
        "Access exclusive seasonal packages on additional services.",
      ],
    },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-[#f0f5f8] to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <motion.h3 variants={itemVariants} className="text-blue-800 font-light tracking-widest text-sm mb-2">
                EVERY AMENITY HERE IS THE BEST YOU CAN GET
              </motion.h3>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-tight"
              >
                Treat yourself to <br />
                <span className="text-blue-900">lavish comfort</span>
              </motion.h2>

              <motion.div variants={lineVariants} className="h-0.5 bg-blue-400 mt-6 mb-8" />
            </div>

            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
              {`Celestial Haven, a distinguished luxury destination, presents an array of exquisite amenities designed to
              exceed the expectations of our discerning global guests. Embracing cultural diversity, our culinary
              masterpieces feature sumptuous delicacies from around the world, with signature dishes that celebrate
              local flavors and international cuisine.`}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed">
              {`Experience exclusive benefits when you book directly through our website. Enjoy the most competitive rates
              available—guaranteed without hidden fees or additional charges. Our intuitive booking platform allows for
              seamless reservations, while our dedicated concierge team stands ready to accommodate your unique
              preferences and requirements.`}
            </motion.p>

          

            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Reservations</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-700" />
                    <span className="text-lg font-medium text-gray-900">+91 6291321220</span>
                  </div>
                </div>

                <Button className="bg-blue-900 hover:bg-blue-950 text-white rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Book Now
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureCards.map((card, index) => (
              <motion.div key={index} custom={index} variants={featureCardVariants} className="h-full">
                <Card className="h-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="pb-2 flex flex-row items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                      {card.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">{card.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="min-w-4 h-4 text-blue-600 mt-1" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

