"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 px-8 py-12 w-full mx-auto overflow-hidden">
      <motion.div
        className="w-full md:w-2/5 p-8 md:p-12 bg-blue-100 rounded-lg text-blue-900"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="mb-6 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`We'd love to hear from you! If you have any questions or need assistance, please reach out using the
          contact details below or send us a message through the form. We're here to help!`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Contact Information</h2>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2 text-blue-900">
              <div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 6291321220</span>
            </div>

            <div className="flex items-center gap-2 text-blue-900">
              <div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span>connect@brillrooms.com</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-3/5 p-8 md:p-12 bg-white ring-1 ring-gray-300 shadow-md rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isSubmitted ? (
          <motion.div
            className="h-full flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Thank You!</h2>
            <p className="text-lg text-blue-900 mb-8">
              Your message has been sent successfully. Our team will get back to you shortly.
            </p>
            <Button
              className="bg-blue-900 text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <>
            <motion.h2
              className="text-3xl font-bold text-blue-900 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>

            <motion.p
              className="mb-8 text-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {`Have questions or want to talk? Fill out the form below, and we will get back to you as soon as possible.`}
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div>
                  <Label htmlFor="name" className="text-blue-900">
                    Your Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="email" className="text-blue-900">
                    Your Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="phone" className="text-blue-900">
                    Your Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Your Phone Number"
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div className="md:col-span-2">
                  <Label htmlFor="message" className="text-blue-900">
                    Your Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>
              </div>

              <motion.div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-blue-900 text-white transition-all duration-300 ease-in-out"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                <Button
                  type="reset"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 transition-all duration-300 ease-in-out"
                >
                  Reset
                </Button>
              </motion.div>
            </motion.form>
          </>
        )}
      </motion.div>
    </div>
  );
}
