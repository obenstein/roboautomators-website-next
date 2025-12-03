'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import clsx from 'clsx'

const CourseQuality = () => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(0)

  const courses = [
    {
      title: 'Basic Robotics',
      subtitle: 'The Initial Phase of Innovation',
      level: 'Beginner',
      duration: '12 weeks',
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        'Comprehensive introduction to robotics fundamentals',
        'Hands-on LEGO-based learning',
        'Programming basics with visual coding',
        'Build 5+ functional robots',
      ],
      curriculum: [
        'Introduction to Robotics & Components',
        'Basic Programming Concepts',
        'Sensor Integration & Control',
        'Motor Control & Movement',
        'Building Your First Robot',
        'Problem-Solving with Robotics',
      ],
    },
    {
      title: 'Intermediate Robotics',
      subtitle: 'Advancing Your Skills',
      level: 'Intermediate',
      duration: '16 weeks',
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'Advanced programming techniques',
        'Complex sensor integration',
        'Autonomous robot design',
        'Competition-ready projects',
      ],
      curriculum: [
        'Advanced Programming Logic',
        'Multi-Sensor Systems',
        'Autonomous Navigation',
        'Line Following Algorithms',
        'Obstacle Avoidance',
        'Competition Preparation',
      ],
    },
    {
      title: 'Advanced Robotics & AI',
      subtitle: 'Master Level Innovation',
      level: 'Advanced',
      duration: '20 weeks',
      color: 'from-orange-500 to-red-500',
      highlights: [
        'AI and machine learning integration',
        'Advanced automation systems',
        'Real-world problem solving',
        'Industry-standard practices',
      ],
      curriculum: [
        'Introduction to AI in Robotics',
        'Machine Learning Basics',
        'Computer Vision Integration',
        'Advanced Automation',
        'IoT & Robotics',
        'Capstone Project',
      ],
    },
  ]

  const qualityIndicators = [
    {
      icon: 'solar:diploma-verified-bold-duotone',
      title: 'Industry-Leading Content',
      description: 'Curriculum designed by robotics experts with years of teaching experience',
    },
    {
      icon: 'solar:refresh-circle-bold-duotone',
      title: 'Continuously Updated',
      description: 'Regular content updates to stay current with latest robotics trends',
    },
    {
      icon: 'solar:chart-2-bold-duotone',
      title: 'Proven Results',
      description: '95% of students show measurable skill improvement within 3 months',
    },
    {
      icon: 'solar:medal-ribbons-star-bold-duotone',
      title: 'Competition Success',
      description: 'Our students consistently win at national and international competitions',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              🏆 SUPERIOR CURRICULUM
            </span>
          </motion.div>

          <h2 className="mb-6">
            Course Quality That <span className="text-gradient-primary">Sets Us Apart</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our course outlines are unmatched in the market. Industry-leading curriculum quality 
            is what drives our recurring customers and student success.
          </p>
        </motion.div>

        {/* Quality Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualityIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <Icon icon={indicator.icon} className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {indicator.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Course Curriculum Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Explore Our Curriculum
          </h3>

          <div className="space-y-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Course Header */}
                <button
                  onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                      <Icon icon="solar:book-2-bold-duotone" className="text-3xl text-white" />
                    </div>
                    
                    <div className="text-left">
                      <h4 className="text-2xl font-bold text-gray-900">
                        {course.title}
                      </h4>
                      <p className="text-gray-600">
                        {course.subtitle}
                      </p>
                      <div className="flex gap-3 mt-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {course.level}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedCourse === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon icon="solar:alt-arrow-down-bold" className="text-3xl text-gray-400" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCourse === index ? 'auto' : 0,
                    opacity: expandedCourse === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Highlights */}
                      <div>
                        <h5 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Icon icon="solar:star-bold-duotone" className="text-yellow-500" />
                          Course Highlights
                        </h5>
                        <ul className="space-y-2">
                          {course.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icon icon="solar:check-circle-bold" className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Curriculum */}
                      <div>
                        <h5 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Icon icon="solar:document-text-bold-duotone" className="text-blue-500" />
                          Curriculum Outline
                        </h5>
                        <ul className="space-y-2">
                          {course.curriculum.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold flex-shrink-0">{idx + 1}.</span>
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`btn-premium bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
                      >
                        Enroll in {course.title}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center glass-premium rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide who are learning robotics with the best curriculum in the industry.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CourseQuality
