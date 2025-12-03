'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'
import { motion } from 'framer-motion'

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
    <section id='testimonial-section' className='bg-cream'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-6'
        >
          <h2 className='font-bold tracking-tight'>
            What Our Happy <br /> <span className='text-[#238fc4]'>Certified </span>Students Say
          </h2>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent cursor-pointer hover:bg-primary text-primary font-semibold hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded-lg duration-300 transition-all shadow-sm hover:shadow-md'
            >
              Give Your Review
            </motion.button>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg font-medium mb-6'
        >
          Build skills with our courses and mentor <br /> from world-class
          companies.
        </motion.p>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300'
                  >
                    <div className="relative z-0 flex justify-center items-center before:absolute before:bg-[url('/images/testimonial/greenpic.svg')] before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-54%">
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={64}
                        height={64}
                        className='inline-block rounded-full ring-2 ring-white relative'
                      />
                    </div>
                    <p className='text-sm pt-4 pb-2'>{items.profession}</p>
                    <p className='text-2xl font-semibold pb-3'>{items.name}</p>
                    <Image
                      src={items.starimg}
                      alt='stars-img'
                      className='m-auto pb-6 w-[30%]'
                      width={32}
                      height={32}
                    />
                    <p className='text-lg font-medium leading-7'>
                      {items.detail}
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
