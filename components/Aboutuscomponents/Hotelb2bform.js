"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HotelForm() {
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

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
    <div className="min-h-screen  flex flex-col md:flex-row gap-4 px-8 py-12 w-full mx-auto overflow-hidden">
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
          Unlock the New Luxury for Your Clients
        </motion.h1>

        <motion.p
          className="mb-6 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {` Seamlessly craft unforgettable experiences for your clients at Hotel Sonar Bangla where craft radiates
          excellence and distinction.`}
        </motion.p>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {`Discover the lavishness like never before only at Hotel Sonar Bangla. We invite all the travel planners to
          team up with us and make your clients' experiences extraordinary. Experience a world of comfort, style and
          luxury where every stay feels like a beautiful melody.`}
        </motion.p>

        <motion.p
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {` Our team is here to create custom packages as per the choices made, making each moment unforgettable. Partner
          with us to open the door to a splendid experience, where excellent service meets a fantastic atmosphere and
          culinary goodness.`}
        </motion.p>

        <motion.p
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {` Get in touch with us now to give your clients a beautiful and memorable travel story that's all about
          gratification at Hotel Sonar Bangla.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Contact Us
          </h2>
          <h3 className="text-xl font-medium text-blue-900 mb-4">
            For B2B Channel Partners
          </h3>

          <div className="flex flex-col gap-4 items-start ">
            <div className="flex items-center gap-2 text-blue-900">
              <div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 86979 71531</span>
            </div>

            <div className="flex items-center gap-2 text-blue-900">
              <div className="w-8 h-8 rounded-full border border-[#8b5a2b] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span>marcom@hotelsonarbangla.com</span>
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-blue-900 mb-8">
              Your reservation request has been submitted successfully. Our team
              will contact you shortly.
            </p>
            <Button
              className="bg-blue-900  text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
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
              Reserve Your Abode Today
            </motion.h2>

            <motion.p
              className="mb-8 text-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {` Your journey to luxury begins with a simple click. Make your stay a lavish one with Hotel Sonar Bangla's
              easy reservation process. Experience a world of comfort as you choose from our exquisite range of rooms.`}
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
                  <Label htmlFor="agencyName" className="text-blue-900">
                    Name of Agency <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="agencyName"
                    placeholder="Your Answer"
                    required
                    className="mt-1 ring-1 ring-gray-300 "
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="keyPerson" className="text-blue-900">
                    Name of Key Person <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="keyPerson"
                    placeholder="Your Answer"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="contactNumber" className="text-blue-900">
                    Contact Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactNumber"
                    placeholder="Your Phone No."
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="email" className="text-blue-900">
                    E-Mail <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email Id"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div className="md:col-span-2">
                  <Label htmlFor="address" className="text-blue-900">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Your Address"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="city" className="text-blue-900">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="Your City"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="state" className="text-blue-900">
                    State <span className="text-red-500">*</span>
                  </Label>
                  <Select required>
                    <SelectTrigger className="mt-1 ring-1 ring-gray-300">
                      <SelectValue placeholder="—Select your state—" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wb">West Bengal</SelectItem>
                      <SelectItem value="dl">Delhi</SelectItem>
                      <SelectItem value="mh">Maharashtra</SelectItem>
                      <SelectItem value="ka">Karnataka</SelectItem>
                      <SelectItem value="tn">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div>
                  <Label htmlFor="pinCode" className="text-blue-900">
                    PIN Code (Zip Code)
                  </Label>
                  <Input
                    id="pinCode"
                    placeholder="Your Pin Code"
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="location" className="text-blue-900">
                    Which location are you looking to book?
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 ring-1 ring-gray-300">
                      <SelectValue placeholder="Choose Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                      <SelectItem value="darjeeling">Darjeeling</SelectItem>
                      <SelectItem value="siliguri">Siliguri</SelectItem>
                      <SelectItem value="digha">Digha</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div>
                  <Label className="text-blue-900">
                    Have you ever booked our hotel/resort in past?{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </motion.div>

                <motion.div>
                  <Label htmlFor="referral" className="text-blue-900">
                    Do you know anyone from Hotel Sonar Bangla?
                  </Label>
                  <Input
                    id="referral"
                    placeholder="Your Answer"
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="hearAbout" className="text-blue-900">
                    From where did you hear about us?{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="hearAbout"
                    placeholder="Your Answer"
                    required
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="gstNumber" className="text-blue-900">
                    GST Number
                  </Label>
                  <Input
                    id="gstNumber"
                    placeholder="GST No."
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>

                <motion.div>
                  <Label htmlFor="gstCertificate" className="text-blue-900">
                    Upload GST Certificate (If input required)
                  </Label>
                  <Input
                    id="gstCertificate"
                    type="file"
                    className="mt-1 ring-1 ring-gray-300"
                  />
                </motion.div>
              </div>

              <motion.div className="flex gap-4">
                <Button
                  type="submit"
                  //   disabled={isSubmitting || captchaAnswer !== "3"}
                  className="bg-blue-900  text-white transition-all duration-300 ease-in-out"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    "Submit"
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
