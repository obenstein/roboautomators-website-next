"use client";
import Link from "next/link";
import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="Home"
      className="relative bg-banner-image pt-28 pb-20 overflow-hidden"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-animated opacity-90" />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col gap-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="leading-tight font-bold text-white tracking-tight max-w-4xl mx-auto"
            >
              EMPOWERING THE FUTURE BUILDERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg leading-8 text-white max-w-4xl mx-auto"
            >
              RoboAutomators is committed to equipping students with the
              essential technological skills needed to thrive in today's rapidly
              evolving world. By integrating robotics, programming, Artificial
              Intelligence-AI, and coding into institutes and providing sessions
              for individuals, we provide hands-on learning experiences that
              foster creativity, problem-solving, and critical thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(35, 143, 196, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg border border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition-all duration-300 ease-in-out font-semibold text-lg shadow-lg"
              >
                Visit Us To Know More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
