"use client";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
          Terms of Service
        </motion.h1>

        <motion.p
          className="mb-8 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`By accessing or using the services provided by Briil Rooms, you agree to comply with these Terms of Service. If you do not agree with these terms, please do not use our services.`}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-blue-900">
              {`By using our website and services, you agree to be bound by these Terms of Service and any additional terms that may apply. We reserve the right to modify, change, or update these terms at any time without prior notice.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Services Provided</h2>
            <p className="text-blue-900">
              {`Briil Rooms offers a range of luxury accommodations and services to individuals, businesses, and travel agencies. These services include, but are not limited to, hotel room bookings, event planning, and customized packages.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. User Responsibilities</h2>
            <p className="text-blue-900">
              {`As a user of our services, you agree to use our website and services only for lawful purposes. You are responsible for providing accurate, current, and complete information when making reservations or inquiries. Additionally, you agree not to engage in any activities that may harm the website or interfere with its operation.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Privacy and Data Collection</h2>
            <p className="text-blue-900">
              {`We value your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal data when you access our website and use our services.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Booking and Payment</h2>
            <p className="text-blue-900">
              {`Bookings for rooms, events, and services are subject to availability. All reservations are confirmed upon receipt of a valid payment. We accept various payment methods, and you agree to provide accurate billing information when making payments.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Cancellations and Refunds</h2>
            <p className="text-blue-900">
              {`You can cancel your reservation according to our cancellation policy. Cancellations made within the stipulated period may be eligible for a refund, subject to the terms provided at the time of booking. For full details, please refer to our cancellation policy.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-blue-900">
              {`Briil Rooms is not responsible for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. We do not guarantee the availability, accuracy, or reliability of the services provided.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Governing Law</h2>
            <p className="text-blue-900">
              {`These Terms of Service shall be governed by and construed in accordance with the laws of India. Any legal action arising from these terms will be filed in the appropriate jurisdiction in India.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. Changes to Terms</h2>
            <p className="text-blue-900">
              {`We may modify these Terms of Service from time to time. Any changes will be posted on this page, and the "Last Updated" date at the bottom of the page will be revised accordingly. Your continued use of our services constitutes your acceptance of the updated terms.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">10. Contact Information</h2>
            <p className="text-blue-900">
              {`If you have any questions or concerns about these Terms of Service, please contact us at:`}
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
