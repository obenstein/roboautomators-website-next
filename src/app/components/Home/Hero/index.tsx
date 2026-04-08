"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Banner = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner/HomeBanner.jpg')" }}
    >
      {/* 40-60% Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative px-6 lg:px-8 z-10 w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 text-center items-center">
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl"
            >
              Empowering the Future Builders through <br className="hidden md:block" />
              <span className="text-gradient-premium bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Robotics, Coding and AI
              </span>
            </motion.h1>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 justify-center mt-6"
            >
              <Link href="/#courses-section">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(35, 143, 196, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl transition-all"
                >
                  Explore Courses
                </motion.button>
              </Link>

              <Link href="/registration">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-premium border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
                >
                  Register Now
                </motion.button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon icon="solar:mouse-minimalistic-bold-duotone" className="text-white/40 text-3xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

