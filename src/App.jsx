import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaMoon,
  FaBolt,
  FaLock,
  FaBriefcase,
  FaHeadset,
  FaUpload,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkModeToggle from "react-dark-mode-toggle";

const steps = [
  {
    icon: <FaUpload size={40} />,
    title: "Upload License",
    desc: "Send us your unused software license.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Get Valuation",
    desc: "We assess and offer the best price.",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: "Get Paid",
    desc: "Receive instant payment securely.",
  },
];

const reasons = [
  {
    icon: <FaBolt size={30} />,
    title: "Fast Payments",
    desc: "Quick and secure payouts.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Secure Process",
    desc: "Your data stays protected.",
  },
  {
    icon: <FaBriefcase size={30} />,
    title: "Trusted by Businesses",
    desc: "100+ companies trust SoftSell.",
  },
  {
    icon: <FaHeadset size={30} />,
    title: "24/7 Support",
    desc: "We’re here whenever you need.",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    text: "SoftSell helped us monetize unused licenses easily.",
  },
  {
    name: "John Smith",
    role: "Procurement Head",
    company: "BizSolutions",
    text: "Quick, smooth, and profitable experience!",
  },
];

export default function App() {
  const [dark, setDark] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className={
        dark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-auto mx-auto bg-gray-800 sticky top-0 z-50">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold text-white"
        >
          SoftSell
        </motion.div>
        <p className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
          {dark ? (
            <FaMoon className="mr-2 text-xl text-white" />
          ) : (
            <FaSun className="mr-2 text-xl text-white" />
          )}
          <span className="text-white">{dark ? "Dark" : "Light"}</span>
          <DarkModeToggle
            onChange={() => setDark(!dark)}
            checked={dark}
            size={40}
          />
        </p>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Sell Your Unused Software Licenses Hassle-Free
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-6 text-lg"
        >
          Turn dormant licenses into instant cash with SoftSell.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Get a Quote
        </motion.button>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center cursor-pointer"
            >
              <div className="text-blue-600 mb-4 mx-auto">{step.icon}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow flex items-start gap-4 cursor-pointer"
            >
              <div className="text-blue-600">{r.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: -2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow cursor-pointer"
            >
              <p className="mb-4">“{t.text}”</p>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm">
                {t.role}, {t.company}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              required
              placeholder="Name"
              className="flex-1 p-3 border rounded"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="flex-1 p-3 border rounded"
            />
          </div>
          <input
            required
            placeholder="Company"
            className="w-full p-3 border rounded"
          />
          <select required className="w-full p-3 border rounded">
            <option value="">Select License Type</option>
            <option>Software</option>
            <option>Cloud</option>
            <option>Enterprise</option>
          </select>
          <textarea
            required
            placeholder="Message"
            className="w-full p-3 border rounded"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full cursor-pointer"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center p-6 bg-gray-100 dark:bg-gray-900"
      >
        © 2025 SoftSell. All rights reserved.
      </motion.footer>
    </div>
  );
}
