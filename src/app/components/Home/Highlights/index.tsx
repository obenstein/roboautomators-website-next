'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const Highlights = () => {
  const highlights = [
    {
      title: 'Events & Competitions',
      icon: 'solar:cup-star-bold-duotone',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      items: [
        {
          name: 'TeknoFest Pakistan 2023 & 2024',
          description: 'Organized and hosted robotics competitions (LFR, Robo Race, Robo War, Robo Sumo, Robo Soccer, Drone, Circuit Designing)',
        },
        {
          name: 'IBA ProBattle 2025',
          description: 'Organized all robotics modules (LFR, Robo War, Robo Soccer)',
        },
        {
          name: 'SPARK 4.0 (WMO)',
          description: 'Hosted Robotics sessions at Beach Luxury Hotel',
        },
      ],
    },
    {
      title: 'Camps & Workshops',
      icon: 'solar:users-group-two-rounded-bold-duotone',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      items: [
        {
          name: 'Summer Camps 2024 & 2025',
          description: 'Onederland (Lucky One Mall), Genex Education System, Verge Schooling System, Roots International School (Hamilton Campus), RoboAutomators',
        },
        {
          name: 'Winter Camp 2024',
          description: 'RoboAutomators',
        },
      ],
    },
    {
      title: 'Media Recognition',
      icon: 'solar:videocamera-record-bold-duotone',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      items: [
        {
          name: 'Good Morning Pakistan',
          description: 'Featured on national television',
        },
        {
          name: 'TeknoFest Coverage',
          description: 'Extensive media coverage of our robotics competitions',
        },
        {
          name: 'RoboAutomators Media',
          description: 'Regular media features and press coverage',
        },
      ],
    },
    {
      title: 'Student Achievements',
      icon: 'solar:medal-star-bold-duotone',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      items: [
        {
          name: 'TeknoFest Winners',
          description: 'Our students secured top positions at TeknoFest competitions',
        },
        {
          name: 'Robofest Champions',
          description: 'Winners at Robofest at Salim Habib University',
        },
        {
          name: 'Innovative Projects',
          description: 'Dozens of innovative projects including smart city models and automation projects',
        },
      ],
    },
  ]

  return (
    <section id='highlights-section' className='py-16 bg-white'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'>
          <h2 className='font-bold tracking-tight mb-4'>
            Our Key <span className='text-[#238fc4]'>Highlights</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Celebrating our achievements, events, and the success of our students
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100'>
              <div className={`${highlight.bgColor} p-6`}>
                <div className='flex items-center gap-4'>
                  <div className={`${highlight.color} text-5xl`}>
                    <Icon icon={highlight.icon} />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-800'>
                    {highlight.title}
                  </h3>
                </div>
              </div>

              <div className='p-6 space-y-4'>
                {highlight.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className='border-l-4 border-primary pl-4 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-r-lg'>
                    <h4 className='font-semibold text-gray-800 mb-1'>
                      {item.name}
                    </h4>
                    <p className='text-sm text-gray-600'>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for media content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-12 text-center bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-300'>
          <Icon
            icon='solar:gallery-bold-duotone'
            className='text-6xl text-gray-400 mx-auto mb-4'
          />
          <p className='text-gray-600 text-lg'>
            Media Gallery Coming Soon
          </p>
          <p className='text-gray-500 text-sm mt-2'>
            Videos and photos from our events, competitions, and student achievements will be displayed here
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Highlights
