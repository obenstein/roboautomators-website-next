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
              Founded in November 2022, RoboAutomators has quickly become a leader in STEM education in Pakistan. We provide hands-on robotics, AI, and coding education for students aged 8-18 through engaging projects and real-world applications.
            </p>  
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From organizing massive competitions like Technotious (2026) and managing robotics at TeknoFest (2024 &amp; 2025), to hosting immersive summer and winter camps, our mission is to prepare students for the fourth industrial revolution through interactive, joy-filled learning.
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

          {/* Right Card — static poster thumbnail, video only loads on click */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div 
              className="relative group rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              {/* Static thumbnail — NO autoPlay video here.
                  iOS Safari hard-caps simultaneous video decoders. Even one
                  background autoPlay video on this section, combined with the
                  three in Highlights, exceeds the cap and crashes the tab.
                  The thumbnail gives the same visual effect without the GPU cost. */}
              <div className="aspect-video relative bg-slate-800 border-4 border-white/20">
                {/* Dark gradient thumbnail mimicking the video poster */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Icon icon="solar:play-circle-bold" className="text-white/30 text-8xl mb-4" />
                    <p className="text-white/40 text-sm">Click to watch</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center border-2 border-white/50 shadow-xl z-10"
                  >
                    <Icon icon="solar:play-bold" className="text-4xl text-white ml-1" />
                  </motion.div>
                </div>

                {/* Caption Badge — backdrop-blur-md removed, solid bg instead */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 p-5 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white/90 text-[10px] font-bold tracking-widest uppercase">Featured on National TV</span>
                    </div>
                    <h4 className="text-white font-bold text-lg">Watch our Journey on ARY News</h4>
                    <p className="text-white/80 text-sm">Showcasing innovation and STEM excellence on Good Morning Pakistan.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Video Modal — video element only mounts AFTER user taps play */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
          >
            <Icon icon="solar:close-circle-bold" className="text-4xl" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <video 
              src="https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQw7xIkuj0I9VQwzJvbSW6XUeMlhTtipjkRHNox" 
              className="w-full h-full" 
              controls 
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Introduction
