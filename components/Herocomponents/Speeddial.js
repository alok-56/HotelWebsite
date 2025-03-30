"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, MessageCircle } from "lucide-react"

export default function ContactSpeedDial() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const contactOptions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call Us",
      action: () => window.open("tel:+1234567890"),
      color: "bg-blue-900 text-white hover:bg-blue-800",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/1234567890"),
      color: "bg-green-600 text-white hover:bg-green-500",
    },
  ]

  return (
    <div className="fixed bottom-20 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col items-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="shadow-lg rounded-lg px-3 py-2 bg-white text-blue-900 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  {option.label}
                </motion.div>
                <motion.button
                  onClick={option.action}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${option.color} transition-transform duration-200 ease-in-out`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${isOpen ? "bg-slate-700" : "bg-blue-900"} text-white transition-colors duration-200`}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(30, 58, 138, 0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </motion.div>
      </motion.button>
    </div>
  )
}

