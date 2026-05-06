'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { FooterLinkType } from '@/app/types/footerlinks'
import { motion } from 'framer-motion'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-primary' id='first-section'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='container pt-20 lg:pt-48 pb-10'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8'>
          <div className='col-span-4 flex flex-col gap-5'>
            <div className="relative w-48 h-12">
              <Image
                src='/images/logo/logo1.png'
                alt='RoboAutomators Logo'
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className='text-white/80 text-lg font-medium leading-relaxed'>
              Empowering the future builders through hands-on robotics, coding, and AI education.
            </p>
            <div className='flex gap-4'>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href='https://facebook.com'
                  className='bg-white/10 rounded-full p-2.5 text-white hover:bg-white hover:text-primary transition-all duration-300 inline-block'>
                  <Icon
                    icon='tabler:brand-facebook'
                    className='text-2xl inline-block'
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href='https://instagram.com'
                  className='bg-white/10 rounded-full p-2.5 text-white hover:bg-white hover:text-primary transition-all duration-300 inline-block'>
                  <Icon
                    icon='tabler:brand-instagram'
                    className='text-2xl inline-block'
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href='https://linkedin.com'
                  className='bg-white/10 rounded-full p-2.5 text-white hover:bg-white hover:text-primary transition-all duration-300 inline-block'>
                  <Icon
                    icon='tabler:brand-linkedin'
                    className='text-2xl inline-block'
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href='https://youtube.com'
                  className='bg-white/10 rounded-full p-2.5 text-white hover:bg-white hover:text-primary transition-all duration-300 inline-block'>
                  <Icon
                    icon='tabler:brand-youtube'
                    className='text-2xl inline-block'
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}
          <div className='col-span-1 sm:col-span-2 lg:col-span-5'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative'>
                  <p className='text-white text-lg font-semibold mb-6 py-2 border-b border-white/10'>
                    {product.section}
                  </p>
                  <ul className="space-y-3">
                    {product.links.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className='text-white/60 hover:text-white transition-colors text-sm lg:text-base'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* CLOUMN-4 */}
          <div className='lg:col-span-3'>
            <h3 className='text-white text-xl font-semibold mb-6'>
              Stay up to date
            </h3>
            <p className="text-white/60 mb-6 font-medium">Get the latest robotics news and course updates.</p>
            <div className='relative text-white flex flex-row-reverse w-full'>
              <input
                type='email'
                name='email'
                className='py-4 text-sm w-full text-white bg-white/10 border border-white/20 rounded-xl pl-4 pr-14 focus:outline-none focus:border-white focus:bg-white/20 transition-all'
                placeholder='Your email address'
                autoComplete='off'
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <button
                  type='submit'
                  className='bg-white text-primary p-2 rounded-lg hover:bg-white hover:scale-110 active:scale-95 transition-all'>
                  <Icon
                    icon='tabler:send'
                    className='text-xl inline-block'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='py-8 border-t border-white/10'>
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className='text-white/60 text-sm'>
            &copy; {new Date().getFullYear()} RoboAutomators. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
