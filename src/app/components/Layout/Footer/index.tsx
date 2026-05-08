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
    <footer className='bg-[#0a0b10] pt-24 pb-12 relative overflow-hidden border-t border-white/5'>
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[5%] w-[30%] h-[30%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[5%] w-[25%] h-[25%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className='container relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20'>
          
          {/* Brand Section */}
          <div className='lg:col-span-4 flex flex-col gap-8'>
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-block">
                <div className="relative w-56 h-14">
                  <Image
                    src='/images/logo/logo2.png'
                    alt='RoboAutomators Logo'
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>
              <p className='text-gray-400 text-lg leading-relaxed max-w-sm'>
                Empowering the future builders through hands-on robotics, coding, and AI education. Join us in shaping the next generation of innovators.
              </p>
            </div>

            {/* Social Links */}
            <div className='flex gap-4'>
              {[
                { icon: 'tabler:brand-facebook', href: 'https://facebook.com', label: 'Facebook' },
                { icon: 'tabler:brand-instagram', href: 'https://instagram.com', label: 'Instagram' },
                { icon: 'tabler:brand-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: 'tabler:brand-youtube', href: 'https://youtube.com', label: 'YouTube' }
              ].map((social, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className='w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300'
                  >
                    <Icon icon={social.icon} className='text-2xl' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className='lg:col-span-5'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
              {footerlink.map((group, i) => (
                <div key={i} className='flex flex-col gap-6'>
                  <h4 className='text-white font-bold text-lg tracking-wide uppercase text-sm'>
                    {group.section}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className='text-gray-500 hover:text-primary transition-colors duration-200 text-base flex items-center group'
                        >
                          <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className='lg:col-span-3'>
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
              <h3 className='text-white text-xl font-bold mb-4'>
                Newsletter
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Stay updated with the latest in Robotics and STEM education.
              </p>
              <div className='flex flex-col gap-3'>
                <div className='relative'>
                  <input
                    type='email'
                    className='w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-all'
                    placeholder='Email address'
                  />
                  <button className='absolute right-2 top-2 bottom-2 aspect-square bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors'>
                    <Icon icon='solar:send-bold' className='text-xl' />
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center">
                  By subscribing, you agree to our privacy policy.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-gray-500 text-sm'>
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">RoboAutomators</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
