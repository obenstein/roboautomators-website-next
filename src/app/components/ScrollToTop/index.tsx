'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.pageYOffset / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8 z-[999] hidden sm:block'>
      <div className='flex items-center gap-2.5'>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              aria-label='scroll to top'
              className='relative back-to-top flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-primary-dark hover:scale-110 hover:shadow-glow'
            >
              {/* Circular progress indicator */}
              <svg className='absolute top-0 left-0 w-full h-full -rotate-90'>
                <circle
                  cx='24'
                  cy='24'
                  r='22'
                  stroke='rgba(255,255,255,0.2)'
                  strokeWidth='2'
                  fill='none'
                />
                <motion.circle
                  cx='24'
                  cy='24'
                  r='22'
                  stroke='white'
                  strokeWidth='2'
                  fill='none'
                  strokeDasharray={2 * Math.PI * 22}
                  strokeDashoffset={2 * Math.PI * 22 * (1 - scrollProgress / 100)}
                  strokeLinecap='round'
                  transition={{ duration: 0.1 }}
                />
              </svg>
              <span className='mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white'></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
