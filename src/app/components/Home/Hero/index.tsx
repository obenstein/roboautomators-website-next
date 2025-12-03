"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Banner = () => {
  return (
    <section
      id="Home"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-32 pb-24 overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-animated opacity-40" />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="relative px-6 lg:px-8 z-10">
        <div className="container">
          <div className="flex flex-col gap-6 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="glass-premium px-6 py-3 rounded-full inline-flex items-center gap-2">
                <Icon icon="solar:global-bold-duotone" className="text-2xl text-cyan-400" />
                <span className="text-white font-semibold tracking-wide">
                  Global LMS Platform • 50+ Countries
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="leading-tight font-bold text-white tracking-tight max-w-5xl mx-auto"
            >
              Master Robotics From{" "}
              <span className="text-gradient-premium bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Anywhere in the World
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-8 text-white/90 max-w-4xl mx-auto"
            >
              The world's leading online robotics education platform for grades 3-12. 
              We ship LEGO-based kits globally and provide a complete learning ecosystem: 
              video courses, weekly live 1-on-1 sessions, and gamified progression.
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 text-white/80 text-sm"
            >
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Icon icon="solar:box-bold-duotone" className="text-xl text-cyan-400" />
                <span>Kits Shipped Worldwide</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Icon icon="solar:videocamera-record-bold-duotone" className="text-xl text-purple-400" />
                <span>Live 1-on-1 Sessions</span>
              </div>
              <div className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <Icon icon="solar:gameboy-bold-duotone" className="text-xl text-pink-400" />
                <span>Gamified Learning</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Start Free Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-premium text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Explore Courses
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mt-8 text-white/70 text-sm"
            >
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-bold" className="text-green-400 text-xl" />
                <span>10,000+ Students Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:shield-check-bold" className="text-blue-400 text-xl" />
                <span>Industry-Leading Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:star-bold" className="text-yellow-400 text-xl" />
                <span>95% Satisfaction Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

