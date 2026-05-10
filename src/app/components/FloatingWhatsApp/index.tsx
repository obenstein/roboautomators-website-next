'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  const phoneNumber = '923073744526'
  const message = 'Hello RoboAutomators! I have a question about your courses.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 left-6 z-[9999]"
      style={{ willChange: 'transform' }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* FIX: Scoped the ping animation — added contain:strict so the
            browser doesn't repaint the whole screen on each pulse frame */}
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"
          style={{ contain: 'strict' }}
        ></span>
        
        {/* FIX: Removed group-hover:rotate-12 — rotation + scale together
            force a matrix transform recalculation on every hover event.
            Scale alone is sufficient and much cheaper. */}
        <div className="relative bg-white text-gray-900 p-4 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110 flex items-center gap-3 border border-gray-100">
          <Icon icon="logos:whatsapp-icon" className="text-3xl" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
            Chat with us
          </span>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-4 left-0 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none border border-gray-100 w-max">
          Questions? We&apos;re online!
        </div>
      </a>
    </motion.div>
  )
}

export default FloatingWhatsApp
