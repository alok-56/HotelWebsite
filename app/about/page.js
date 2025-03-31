"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
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
          About Us
        </motion.h1>

        <motion.p
          className="mb-6 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`Briil Rooms has been a symbol of luxurious accommodation, exceptional service, and unforgettable experiences. Our hotel provides world-class facilities that promise an unparalleled stay for business and leisure travelers alike.`}
        </motion.p>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {`We understand the importance of comfort and elegance, and we take pride in offering the highest standards of hospitality. Our team is dedicated to creating personalized experiences for every guest, ensuring that each moment at Briil Rooms is nothing short of extraordinary.`}
        </motion.p>

        <motion.p
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {`Founded with a vision to redefine luxury, our mission is to provide exceptional services, a welcoming atmosphere, and an unforgettable stay for all who walk through our doors. Whether it’s a peaceful getaway or a corporate retreat, we are here to make your experience remarkable.`}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our Vision
          </h2>
          <p className="mb-6 text-blue-900">
            {`At Briil Rooms, we envision being the leading hospitality provider in the region, offering the perfect blend of luxury, comfort, and service excellence. We aim to provide our guests with a home away from home, where each stay is tailored to their individual needs.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Our History
          </h2>
          <p className="mb-6 text-blue-900">
            {`Founded over 30 years ago, Briil Rooms started as a small boutique hotel offering a handful of rooms and personalized services. Through dedication, hard work, and an unwavering commitment to excellence, we have expanded to become a renowned name in the hospitality industry.`}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-3/5 p-8 md:p-12 bg-white ring-1 ring-gray-300 shadow-md rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-900">John Doe</h3>
            <p className="text-blue-900">CEO & Founder</p>
          </motion.div>

          <motion.div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-900">Jane Smith</h3>
            <p className="text-blue-900">Director of Operations</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
