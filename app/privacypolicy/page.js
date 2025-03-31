"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
    <div className="min-h-screen px-8 py-12 w-full mx-auto overflow-hidden">
      <motion.div
        className="w-full bg-white ring-1 ring-gray-300 shadow-md rounded-lg p-8 md:p-12"
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
          Privacy Policy
        </motion.h1>

        <motion.p
          className="mb-8 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`At Briil Rooms, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or use our services.`}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Information We Collect</h2>
            <p className="text-blue-900">
              {`We collect information that you provide directly to us, such as your name, email address, phone number, and any other personal details you share when contacting us or filling out forms on our website.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-blue-900">
              {`We may use your information for the following purposes: to respond to your inquiries, process bookings, send promotional materials, and improve the quality of our services.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Sharing Your Information</h2>
            <p className="text-blue-900">
              {`We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners for the purpose of providing you with services that you have requested, such as processing payments or delivering products.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Security of Your Information</h2>
            <p className="text-blue-900">
              {`We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data from unauthorized access, use, or disclosure.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Your Rights</h2>
            <p className="text-blue-900">
              {`You have the right to access, correct, or delete your personal information at any time. If you wish to exercise any of these rights, please contact us using the details provided below.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-blue-900">
              {`We may use cookies and other tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-blue-900">
              {`We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date at the top of the policy will be revised accordingly.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Contact Us</h2>
            <p className="text-blue-900">
              {`If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us at: `}
            </p>
            <p className="text-blue-900">
              <strong>Email:</strong> connect@brillrooms.com
            </p>
            <p className="text-blue-900">
              <strong>Phone:</strong> +91 6291321220            </p>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
}
