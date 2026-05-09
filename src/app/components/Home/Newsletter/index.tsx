'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Newsletter = () => {
  return (
    <section id='join-section' className='py-20 relative overflow-hidden'>
      {/* Background Decorative Blur */}
      {/* FIX: Reduced blur radius from 120px→60px and added contain:strict.
           120px CSS blur forces Safari to sample a massive area of pixels;
           on iPhone this exhausts the GPU tile cache and causes a crash. */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[60px] -z-10 pointer-events-none' style={{ contain: 'strict' }} />
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[60px] -z-10 pointer-events-none' style={{ contain: 'strict' }} />

      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative rounded-[3rem] overflow-hidden'
        >
          {/* Main Newsletter Card */}
          <div 
            className='relative z-10 px-8 py-16 md:py-24 text-center bg-slate-900 shadow-2xl'
            style={{
              backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/images/newsletter/bg-premium.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='max-w-3xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6'
              >
                <Icon icon='solar:letter-bold-duotone' className='text-primary text-xl' />
                <span className='text-white/90 text-xs font-bold tracking-widest uppercase'>Exclusive Updates</span>
              </motion.div>

              <h2 className='text-white text-4xl md:text-5xl font-bold mb-6 tracking-tight'>
                Stay Ahead in the <span className='text-gradient-premium'>Robotics World</span>
              </h2>
              
              <p className='text-lg text-white/70 mb-10'>
                Subscribe to our newsletter for early access to new courses, 
                global robotics news, and exclusive student discounts.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-col sm:flex-row gap-4 max-w-xl mx-auto'
              >
                <div className='flex-grow relative group'>
                  <Icon 
                    icon='solar:mention-circle-bold-duotone' 
                    className='absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-2xl group-focus-within:text-primary transition-colors' 
                  />
                  <input
                    type='email'
                    placeholder='Enter your email address'
                    className='w-full py-5 pl-12 pr-6 bg-white/10 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all'
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(35, 143, 196, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-2xl'
                >
                  Join Now
                </motion.button>
              </motion.div>

              <p className='mt-8 text-white/40 text-sm'>
                Join 5,000+ subscribers. No spam, ever.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
