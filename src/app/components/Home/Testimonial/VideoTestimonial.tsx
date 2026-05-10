'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const VideoTestimonial = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mb-20 px-4 relative overflow-hidden'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative group cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          {/* Main Video Container */}
          <div className='relative aspect-video rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl border-4 border-white/20 transform group-hover:scale-[1.02] transition-all duration-500'>
            {/* Background Muted Video for Attention */}
            <video
              className='absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 lg:group-hover:scale-105 transform transition-transform duration-700'
              src='https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQw3qHMqqr7bCXF1dG4BtVMu67eNmT8zaxIOoc3'
              autoPlay
              muted
              loop
              playsInline
            />
            
            {/* Glass Overlay with Play Button */}
            <div className='absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-colors duration-500'>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className='w-24 h-24 rounded-full bg-white/30 flex items-center justify-center border-2 border-white/50 shadow-glow group-hover:shadow-glow-lg transition-all'
              >
                <Icon icon='solar:play-bold' className='text-white text-5xl ml-2' />
              </motion.div>
            </div>

            {/* Info Badge */}
            <div className='absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4'>
              <div className='glass-premium px-6 py-4 rounded-2xl flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
                  <span className='text-white/90 text-xs font-bold tracking-widest uppercase'>Student Success Story</span>
                </div>
                <p className='text-white font-bold text-2xl'>Watch Excellence in Action</p>
                <p className='text-white/70 text-sm'>Hear direct experiences from our global learners</p>
              </div>
              <div className='flex items-center gap-3 glass px-5 py-3 rounded-full'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon='solar:star-bold' className='text-yellow-400 text-lg' />
                  ))}
                </div>
                <span className='text-white text-xs font-bold tracking-wider'>TRUSTED BY 6k+ STUDENTS</span>
              </div>
            </div>
          </div>

          {/* Decorative Animated Elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [12, 15, 12]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className='absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl -z-10 blur-2xl'
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [-12, -15, -12]
             }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className='absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full -z-10 blur-2xl'
          />
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 p-4 sm:p-8'
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className='relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(35,143,196,0.3)]'
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className='w-full h-full object-contain bg-black'
                src='https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQw3qHMqqr7bCXF1dG4BtVMu67eNmT8zaxIOoc3'
                controls
                autoPlay
                playsInline
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors'
                onClick={() => setIsOpen(false)}
              >
                <Icon icon='solar:close-bold' className='text-2xl' />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoTestimonial
