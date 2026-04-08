'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const Introduction = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="about-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Hands-On Robotics Education for the <span className="text-primary">Next Generation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in **November 2021**, RoboAutomators has quickly become a leader in STEM education in Pakistan. We provide hands-on robotics, AI, and coding education for students aged 8-18 through engaging projects and real-world applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From organizing massive competitions like **Technotious (2024)** and managing robotics at **TeknoFest (2024 & 2026)**, to hosting immersive summer and winter camps, our mission is to prepare students for the fourth industrial revolution through interactive, joy-filled learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:lightbulb-bold-duotone" className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">STEM Skills</h4>
                  <p className="text-sm text-gray-500">Developing core technical foundations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:settings-bold-duotone" className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Problem Solving</h4>
                  <p className="text-sm text-gray-500">Critical thinking via experimentation.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card (Video) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Thumbnail */}
              <div className="aspect-video relative">
                <img 
                  src="/images/Introduction/tv-feature.jpg" 
                  alt="Featured on National Television"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl z-10"
                >
                  <Icon icon="solar:play-bold" className="text-3xl text-primary ml-1" />
                </motion.button>

                {/* Caption Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <h4 className="text-white font-bold mb-1">Featured on National Television</h4>
                    <p className="text-white/80 text-sm">Our students showcasing robotics projects on ARY Good Morning Pakistan.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal Placeholder */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
          >
            <Icon icon="solar:close-circle-bold" className="text-4xl" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/placeholder" 
               title="ARY Good Morning Pakistan Feature" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default Introduction
