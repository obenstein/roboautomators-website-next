'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { CourseDetailType } from '@/app/types/coursedetail'
import CourseDetailSkeleton from '../../Skeleton/CourseDetail'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Name {
  imageSrc: string
  course: string
  price: string
  profession: string
  category:
    | 'robotics'
    | 'gamedevelopment'
    | 'mindskills'
  curriculum?: string[]
  eligibility?: {
    age?: string
    background?: string
  }
  classes?: number
}

const NamesList = () => {
  // -------------------------------------------------------------
  const [courseDetail, setCourseDetail] = useState<CourseDetailType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setCourseDetail(data.CourseDetailData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  // -------------------------------------------------------------

  const [selectedButton, setSelectedButton] = useState<
    | 'robotics'
    | 'gamedevelopment'
    | 'mindskills'
    | 'all'
    | null
  >('robotics')
  const roboticsCourses = courseDetail.filter(
    (name) => name.category === 'robotics'
  )
  const gameDevelopmentCourses = courseDetail.filter(
    (name) => name.category === 'gamedevelopment'
  )
  const mindSkillsCourses = courseDetail.filter(
    (name) => name.category === 'mindskills'
  )

  let selectedNames: Name[] = []
  if (selectedButton === 'robotics') {
    selectedNames = roboticsCourses
  } else if (selectedButton === 'gamedevelopment') {
    selectedNames = gameDevelopmentCourses
  } else if (selectedButton === 'mindskills') {
    selectedNames = mindSkillsCourses
  }
const nameElements = selectedNames.map((name, index) => (
  <motion.div
    id='Courses'
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className='glass-card rounded-2xl group flex flex-col hover-lift transition-all duration-300 overflow-hidden'
  >
    <div className='overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative'>
      <Image
        src={name.imageSrc}
        alt={name.course}
        width={700}
        height={700}
        className='h-56 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out'
      />
      {/* Overlay badge */}
      <div className='absolute top-4 right-4 glass-premium px-3 py-1 rounded-full'>
        <span className='text-sm font-semibold text-gray-900'>{name.category}</span>
      </div>
    </div>
    <div className='p-6 flex flex-col justify-between gap-4 flex-1 bg-white'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-start justify-between gap-2'>
          <p className='block font-semibold text-gray-900 text-lg'>{name.course}</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl px-3 py-1.5 shadow-md flex-shrink-0'
          >
            <p>${name.price}</p>
          </motion.div>
        </div>

        <p
          className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 group-hover:cursor-pointer'>
          {name.profession}
        </p>

        {/* Additional Info */}
        <div className='text-sm text-gray-600 space-y-3 mt-2'>
          {name.curriculum && name.curriculum.length > 0 && (
            <div className='glass-gradient rounded-lg p-3'>
              <p className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                <Icon icon='solar:document-text-bold-duotone' className='text-blue-500' />
                Curriculum Highlights:
              </p>
              <ul className='list-disc ml-4 space-y-1'>
                {name.curriculum.slice(0, 3).map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {name.eligibility && (
            <div className='glass-gradient rounded-lg p-3'>
              <p className='font-semibold text-gray-900 mb-2 flex items-center gap-2'>
                <Icon icon='solar:user-check-rounded-bold-duotone' className='text-purple-500' />
                Eligibility:
              </p>
              <p>Age: {name.eligibility.age}</p>
              {name.eligibility.background && (
                <p>Background: {name.eligibility.background}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-between items-center glass-gradient rounded-xl p-3 mt-2'>
        <p className='font-semibold text-gray-700'>{name.classes ? `${name.classes} Classes` : 'N/A'}</p>
        <div className='flex flex-row space-x-4'>
          <div className='flex items-center gap-1'>
            <Icon icon='solar:users-group-rounded-bold-duotone' className='text-blue-500 text-lg' />
            <p className='text-gray-700 font-medium'>120</p>
          </div>
          <div className='flex items-center gap-1'>
            <Icon icon='solar:star-bold' className='text-yellow-500 text-lg' />
            <p className='font-medium text-gray-700'>4.5</p>
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mt-2'
      >
        Enroll Now
      </motion.button>
    </div>
  </motion.div>
))



  return (
    <section id='courses-section' className='py-20 bg-gradient-to-br from-white to-gray-50'>
      <div className='container mx-auto max-w-7xl px-4'>
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
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              📚 OUR COURSES
            </span>
          </motion.div>

          <h2 className='font-bold tracking-tight mb-4'>
            Explore Our <span className='text-gradient-primary'>Premium Courses</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Choose from robotics, game development, and mind skills courses designed for all levels
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(35, 143, 196, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className='btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all'
          >
            View All Courses
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <div className='flex justify-center mb-8'>
          <div className='glass-card rounded-2xl p-2 inline-flex gap-2'>
            {/* FOR DESKTOP VIEW */}
            <button
              onClick={() => setSelectedButton('robotics')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hidden sm:block ${
                selectedButton === 'robotics'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Robotics
            </button>
            <button
              onClick={() => setSelectedButton('gamedevelopment')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hidden sm:block ${
                selectedButton === 'gamedevelopment'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Game Development
            </button>
            <button
              onClick={() => setSelectedButton('mindskills')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hidden sm:block ${
                selectedButton === 'mindskills'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Mind Skills
            </button>

            {/* FOR MOBILE VIEW */}
            <button
              onClick={() => setSelectedButton('robotics')}
              className={`p-3 rounded-xl transition-all duration-300 sm:hidden ${
                selectedButton === 'robotics'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-100'
              }`}
            >
              <Icon icon='solar:robot-line-duotone' className='text-3xl' />
            </button>

            <button
              onClick={() => setSelectedButton('gamedevelopment')}
              className={`p-3 rounded-xl transition-all duration-300 sm:hidden ${
                selectedButton === 'gamedevelopment'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-100'
              }`}
            >
              <Icon icon='solar:gameboy-line-duotone' className='text-3xl' />
            </button>

            <button
              onClick={() => setSelectedButton('mindskills')}
              className={`p-3 rounded-xl transition-all duration-300 sm:hidden ${
                selectedButton === 'mindskills'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-100'
              }`}
            >
              <Icon icon='solar:lightbulb-bolt-line-duotone' className='text-3xl' />
            </button>
          </div>
        </div>

        <div>
          <AnimatePresence mode='wait'>

            <motion.div
              key={selectedButton}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            >
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <CourseDetailSkeleton key={i} />
                ))
              ) : nameElements.length > 0 ? (
                nameElements
              ) : (
                <p>No data to show</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default NamesList
