'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MentorType } from '@/app/types/mentor'
import MentorSkeleton from '../../Skeleton/Mentor'
import { motion } from 'framer-motion'

const Mentor = () => {
  const [mentor, setMentor] = useState<MentorType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setMentor(data.MentorData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='mentors-section'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-12'
        >
          <h2 className='font-bold tracking-tight'>Meet with our <span className='text-[#238fc4]'>Mentors</span></h2>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent cursor-pointer hover:bg-primary text-primary font-medium hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded-lg duration-300 transition-all shadow-sm hover:shadow-md'
            >
              Explore 10+ our Mentor
            </motion.button>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8'>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : mentor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='group relative shadow-lg rounded-lg overflow-hidden hover-lift transition-all duration-300'
                >
                  <div className='min-h-80 w-full overflow-hidden bg-gray-200 lg:h-80'>
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={700}
                      height={700}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:scale-110 transition-transform duration-500'
                    />
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className='border border-white rounded-lg -mt-8 bg-white p-2 shadow-mentorShadow flex items-center justify-center'
                      >
                        <Link
                          href='/'
                          className='text-sm text-gray-700 text-center hover:text-primary transition-colors duration-300'
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                      <p className='mt-3 text-2xl font-semibold text-black/80 text-center'>
                        {item.color}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Mentor
