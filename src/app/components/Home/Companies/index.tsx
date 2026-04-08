'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  const [companies, setCompianes] = useState<{ imgSrc: string }[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCompianes(data.Companiesdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
            Our <span className='text-primary'>Clientele</span>
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto'>
            Display logos of schools, institutions, and company partners who trust RoboAutomators.
          </p>
        </motion.div>
        
        <div className='px-4'>
          <Slider {...settings}>
            {companies.map((item, i) => (
              <div key={i} className='px-6'>
                <div className='relative h-20 w-full group'>
                  <Image
                    src={item.imgSrc}
                    alt="Client Logo"
                    fill
                    className='object-contain grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Companies
