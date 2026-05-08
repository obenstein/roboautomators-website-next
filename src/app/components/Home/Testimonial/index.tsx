'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import VideoTestimonial from './VideoTestimonial'

// CAROUSEL SETTINGS

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section id='testimonial-section' className='py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              ⭐ TESTIMONIALS
            </span>
          </motion.div>

          <h2 className='font-bold tracking-tight mb-4'>
            What Our Happy <span className='text-gradient-primary'>Students Say</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Hear from students and parents who have transformed their robotics skills with our platform
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className='btn-premium bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all'
          >
            Share Your Story
          </motion.button>
        </motion.div>

        <VideoTestimonial />

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i} className='px-3'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className='glass-card m-2 pt-8 px-8 pb-10 text-center rounded-2xl hover:shadow-2xl transition-all duration-300 h-full'
                  >
                    <div className="relative z-0 flex justify-center items-center mb-4">
                      <div className='relative'>
                        <Image
                          src={items.imgSrc}
                          alt={items.name}
                          width={80}
                          height={80}
                          className='inline-block rounded-full ring-4 ring-white shadow-lg'
                        />
                        <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md'>
                          <Icon icon='solar:check-circle-bold' className='text-white text-lg' />
                        </div>
                      </div>
                    </div>
                    <p className='text-sm text-gray-600 font-medium pt-2 pb-1'>{items.profession}</p>
                    <p className='text-2xl font-bold text-gray-900 pb-3'>{items.name}</p>
                    <div className='flex justify-center gap-1 pb-4'>
                      {[...Array(5)].map((_, index) => (
                        <Icon key={index} icon='solar:star-bold' className='text-yellow-400 text-xl' />
                      ))}
                    </div>
                    <p className='text-base text-gray-700 leading-relaxed italic'>
                      "{items.detail}"
                    </p>
                  </motion.div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial

