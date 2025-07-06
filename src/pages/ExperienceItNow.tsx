import React from 'react';
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ExperienceItNow() {
  return (
    <section className="relative w-full bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

        {/* === Left Content === */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Experience it now
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-lg leading-relaxed max-w-xl"
          >
            At Novatos AI, we go beyond traditional chatbot systems. Our AI-powered assistant is designed
            for instant deployment, intelligent learning, and flawless communication. From answering
            common questions to handling bookings and collecting leads, it operates 24/7—ensuring your
            business never misses a beat. With enterprise-grade compliance and real-time personalization,
            you're not just getting automation—you're getting a partner in customer engagement.
          </motion.p>
        </div>

        {/* === Right Image === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-[500px]"
        >
          <img
            src="/chatbot-glow.png"
            alt="AI Chatbot Illustration"
            className="w-full rounded-xl shadow-xl border hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* === Long Glowing Arrow to Chatbot === */}
      <motion.div
        className="absolute bottom-6 right-6 hidden md:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-36 h-1 bg-blue-600 rounded-full shadow-[0_0_10px_#3b82f6]" />
          <ArrowDownRight className="text-blue-600 w-10 h-10 animate-pulse drop-shadow-[0_0_5px_#3b82f6]" />
        </div>
        <span className="text-blue-600 text-sm mt-2 block text-right pr-2 font-medium">
          Chat with us →
        </span>
      </motion.div>
    </section>
  );
}

