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
    className='shadow-lg rounded-xl group flex flex-col hover-lift transition-all duration-300'
  >
    <div className='overflow-hidden rounded-t-xl bg-gray-100'>
      <Image
        src={name.imageSrc}
        alt={name.course}
        width={700}
        height={700}
        className='h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out'
      />
    </div>
    <div className='p-4 flex flex-col justify-between gap-5 flex-1 bg-white rounded-b-xl'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <p className='block font-normal text-gray-900'>{name.course}</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='text-lg font-semibold text-success border-2 border-success rounded-md px-2 py-1'
          >
            <p>${name.price}</p>
          </motion.div>
        </div>

        <Link href='/'>
          <p
            aria-hidden='true'
            className='text-xl font-semibold group-hover:text-primary transition-colors duration-300 group-hover:cursor-pointer'>
            {name.profession}
          </p>
        </Link>

        {/* Additional Info */}
        <div className='text-sm text-gray-600 space-y-2 mt-2'>
          {name.curriculum && name.curriculum.length > 0 && (
            <div>
              <p className='font-semibold text-black'>Curriculum:</p>
              <ul className='list-disc ml-4'>
                {name.curriculum.slice(0, 3).map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {name.eligibility && (
            <div>
              <p className='font-semibold text-black'>Eligibility:</p>
              <p>Age: {name.eligibility.age}</p>
              {name.eligibility.background && (
                <p>Background: {name.eligibility.background}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-between items-center border-2 rounded-md p-2 mt-4'>
        <p>{name.classes ? `${name.classes} Classes` : 'N/A'}</p>
        <div className='flex flex-row space-x-4'>
          <div className='flex items-center'>
            <Image
              src={'/images/courses/account.svg'}
              width={18}
              height={20}
              alt='enrollments'
            />
            <p className='text-lightgrey ml-1'>120</p>
          </div>
          <div className='flex items-center'>
            <Image
              src={'/images/courses/Star.svg'}
              width={18}
              height={20}
              alt='rating'
            />
            <p className='ml-1'>4.5</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
))


  return (
    <section id='courses-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col sm:flex-row justify-between sm:items-center gap-5 mb-4'
        >
          <h2 className='font-bold tracking-tight'>The <span className='text-[#238fc4]'>Courses</span></h2>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-transparent cursor-pointer hover:bg-primary text-primary font-medium hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded-lg duration-300 transition-all shadow-sm hover:shadow-md'
            >
              Explore Classes
            </motion.button>
          </div>
        </motion.div>
        <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto mb-4'>
          {/* FOR DESKTOP VIEW */}
          <button
            onClick={() => setSelectedButton('robotics')}
            className={
              'bg-white' +
              (selectedButton === 'robotics'
                ? 'text-black border-b-2 border-yellow-200'
                : 'text-black/40') +
              ' pb-2 text-lg hidden sm:block hover:cursor-pointer'
            }>
            Robotics
          </button>
          <button
            onClick={() => setSelectedButton('gamedevelopment')}
            className={
              'bg-white ' +
              (selectedButton === 'gamedevelopment'
                ? 'text-black border-b-2 border-yellow-200'
                : 'text-black/40') +
              ' pb-2 text-lg hidden sm:block hover:cursor-pointer'
            }>
            Game Development
          </button>
          <button
            onClick={() => setSelectedButton('mindskills')}
            className={
              'bg-white ' +
              (selectedButton === 'mindskills'
                ? 'text-black border-b-2 border-yellow-200'
                : 'text-black/40') +
              ' pb-2 text-lg hidden sm:block hover:cursor-pointer'
            }>
            Mind Skills
          </button>

          {/* FOR MOBILE VIEW */}
          <Icon
            icon='solar:robot-line-duotone'
            onClick={() => setSelectedButton('robotics')}
            className={
              'text-5xl sm:hidden block ' +
              (selectedButton === 'robotics'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />

          <Icon
            icon='solar:gameboy-line-duotone'
            onClick={() => setSelectedButton('gamedevelopment')}
            className={
              'text-5xl sm:hidden block ' +
              (selectedButton === 'gamedevelopment'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />

          <Icon
            icon='solar:lightbulb-bolt-line-duotone'
            onClick={() => setSelectedButton('mindskills')}
            className={
              'text-5xl sm:hidden block ' +
              (selectedButton === 'mindskills'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />
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
