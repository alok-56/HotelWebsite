"use client";
import { motion } from "framer-motion";

export default function CookiePolicy() {
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
          Cookie Policy
        </motion.h1>

        <motion.p
          className="mb-8 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {`This Cookie Policy explains how Briil Rooms ("we", "us", or "our") uses cookies and similar technologies to provide, personalize, and improve our services. By using our website, you consent to our use of cookies in accordance with this policy.`}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-blue-900">
              {`Cookies are small files stored on your device that help us improve your browsing experience. They can be used for various purposes, such as remembering preferences, analyzing website usage, or providing personalized content.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-blue-900">
              {`We use the following types of cookies on our website:`}
              <ul className="list-disc pl-6">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of the website, such as remembering your language preferences or items in your shopping cart.</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand how users interact with our website, allowing us to improve functionality and performance.</li>
                <li><strong>Functional Cookies:</strong> These cookies enhance your user experience by remembering your settings or preferences across sessions.</li>
                <li><strong>Targeting Cookies:</strong> These cookies are used to provide personalized ads or content based on your interests and browsing habits.</li>
              </ul>
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. How We Use Cookies</h2>
            <p className="text-blue-900">
              {`We use cookies for the following purposes:`}
              <ul className="list-disc pl-6">
                <li><strong>To enhance your user experience:</strong> Cookies help us remember your preferences, such as language settings, which improve your experience on the website.</li>
                <li><strong>To analyze website usage:</strong> We use cookies to collect data on how users interact with our website, which helps us identify trends and improve our content and features.</li>
                <li><strong>To provide targeted advertising:</strong> Cookies allow us to display relevant ads to users based on their interests and browsing history.</li>
              </ul>
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Managing Cookies</h2>
            <p className="text-blue-900">
              {`You have the ability to manage cookies through your browser settings. You can choose to accept or decline cookies, or set your browser to alert you when cookies are being sent. However, please note that disabling certain cookies may affect the functionality of our website.`}
            </p>
            <p className="text-blue-900">
              {`To manage your cookie settings, you can visit the "Privacy" section of your browser settings. Below are links to manage cookies in the most popular browsers:`}
              <ul className="list-disc pl-6">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=en" className="text-blue-600" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-and-site-data-in-microsoft-edge" className="text-blue-600" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-blue-900">
              {`In addition to our cookies, we may also allow third-party cookies on our website. These third-party services, such as analytics providers or advertising networks, may use cookies to collect data about your browsing behavior and provide personalized services.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Security of Your Data</h2>
            <p className="text-blue-900">
              {`While cookies help enhance your browsing experience, we take security seriously. We use industry-standard encryption to protect any personal data collected through cookies. However, please be aware that no data transmission over the internet is completely secure, and we cannot guarantee the security of information transmitted through our website.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Changes to this Cookie Policy</h2>
            <p className="text-blue-900">
              {`We may update our Cookie Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically for any updates.`}
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Contact Us</h2>
            <p className="text-blue-900">
              {`If you have any questions or concerns about our Cookie Policy, please contact us at:`}
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
