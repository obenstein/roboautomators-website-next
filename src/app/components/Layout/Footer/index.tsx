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
    <footer className='bg-[#094e80] pt-24 pb-12 relative overflow-hidden border-t border-white/10'>
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-blue-300/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] -right-[5%] w-[35%] h-[35%] bg-cyan-400/10 blur-[120px] rounded-full" />
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
               <p className='text-blue-100/80 text-lg leading-relaxed max-w-sm'>
                 Empowering the future builders through hands-on robotics, coding, and AI education. Join us in shaping the next generation of innovators.
               </p>
             </div>
 
             {/* Social Links */}
             <div className='flex gap-4'>
               {[
                 { icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/p/RoboAutomators-100090023152002/', label: 'Facebook' },
                 { icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/roboautomators_/', label: 'Instagram' },
                 { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/roboautomators/posts/?feedView=all', label: 'LinkedIn' },
                 { icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@Roboautomators', label: 'YouTube' }
               ].map((social, idx) => (
                 <motion.div key={idx} whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                   <Link
                     href={social.href}
                     aria-label={social.label}
                     className='w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 border border-white/10 text-white hover:bg-white hover:text-[#094e80] transition-all duration-300'
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
                           className='text-blue-200/60 hover:text-white transition-colors duration-200 text-base flex items-center group'
                         >
                           <span className="w-0 group-hover:w-2 h-0.5 bg-white mr-0 group-hover:mr-2 transition-all duration-200" />
                           {link.label}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
           </div>
 
         </div>
 
         {/* Footer Bottom */}
         <div className='pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6'>
           <p className='text-blue-200/50 text-sm'>
             &copy; {new Date().getFullYear()} <span className="text-white font-medium">RoboAutomators</span>. All rights reserved.
           </p>
           <div className="flex gap-8">
             <Link href="/" className="text-blue-200/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
             <Link href="/" className="text-blue-200/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
           </div>
         </div>
       </div>
    </footer>
  )
}

export default Footer
