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
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* Pulsing Aura */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:scale-110"></span>
        
        {/* Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 flex items-center gap-3">
          <Icon icon="logos:whatsapp-icon" className="text-3xl brightness-0 invert" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
            Chat with us
          </span>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-4 left-0 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none border border-gray-100 w-max">
          Questions? We're online!
        </div>
      </a>
    </motion.div>
  )
}

export default FloatingWhatsApp
