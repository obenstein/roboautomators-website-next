'use client'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { CourseDetailType } from '@/app/types/coursedetail'
import CourseDetailSkeleton from '../../Skeleton/CourseDetail'
import { motion, AnimatePresence } from 'framer-motion'

const Courses = () => {
  const [courseDetail, setCourseDetail] = useState<CourseDetailType[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch.')
        const data = await res.json()
        setCourseDetail(data.CourseDetailData)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="courses-section" className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Our Robotics, Coding & AI Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At RoboAutomators, we offer a wide range of innovative robotics, coding, AI, and game development courses designed for students of all ages. Whether you want hands-on after-school learning, immersive summer or winter camps, or flexible online programs, we have the perfect course for your child. Our courses are also available through school partnerships, bringing complete STEM education directly to students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <CourseDetailSkeleton key={i} />)
          ) : (
            courseDetail.map((course, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={course.imageSrc}
                    alt={course.course}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-4 py-1 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{course.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{course.course}</h3>
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg font-bold text-sm">
                      PKR {course.price}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {course.profession}
                  </p>

                  <AnimatePresence>
                    {expandedIndex === index ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="py-4 space-y-4 border-t border-gray-100 mt-2">
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <Icon icon="solar:clipboard-list-bold-duotone" className="text-primary" />
                              What you&apos;ll learn:
                            </h4>
                            <ul className="grid grid-cols-1 gap-2">
                              {course.curriculum?.map((item, i) => (
                                <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                                  <Icon icon="solar:check-circle-bold" className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-blue-50/50 p-4 rounded-2xl">
                            <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                              <Icon icon="solar:medal-star-bold-duotone" className="text-primary" />
                              Outcome:
                            </h4>
                            <p className="text-sm text-blue-800 font-medium">{course.outcome}</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <div className="mt-auto pt-6 flex gap-4">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex-grow bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{expandedIndex === index ? 'Show Less' : 'Click to Expand'}</span>
                      <Icon 
                        icon={expandedIndex === index ? 'solar:alt-arrow-up-bold' : 'solar:alt-arrow-down-bold'} 
                        className="text-primary"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Courses
