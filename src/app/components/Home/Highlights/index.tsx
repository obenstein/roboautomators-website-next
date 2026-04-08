'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const Highlights = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const eventVideos = [
    {
      title: 'Spark',
      videoSrc: 'https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQwRBPsf06iNBCnZ5WosTPzA04lYIj8mDtykr1O',
      tag: 'Onsite Collaboration',
    },
    {
      title: 'TeknoFest',
      videoSrc: 'https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQw3qToJyA7bCXF1dG4BtVMu67eNmT8zaxIOoc3',
      tag: 'Annual Robotics Championship',
    },
    {
      title: 'Technotious',
      videoSrc: 'https://kxl8iryehy.ufs.sh/f/7QpEUw0I9VQw0n577Vq9HLaqbvgirxB5Wf7kXwdyNZCeosn8',
      tag: 'Robotics & Automation Event',
    },
  ]

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

        {/* Event Highlights Video Gallery */}
        <div className='mt-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-10'>
            <div className='inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4'>
              <span className='text-primary font-bold text-xs tracking-widest uppercase'>Live Experience</span>
            </div>
            <h2 className='text-3xl font-bold text-gray-900'>Live from Our Events</h2>
            <p className='text-gray-600 mt-2'>Experience the energy and innovation at our onsite competitions</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {eventVideos.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative group cursor-pointer'
                onClick={() => setSelectedVideo(event.videoSrc)}>
                <div className='relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border-2 border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500'>
                  {/* Muted Autoplay Preview */}
                  <video
                    className='absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700'
                    src={event.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  
                  {/* Glass Overlay */}
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center'>
                    <div className='w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300'>
                      <Icon icon='solar:play-bold' className='text-white text-2xl ml-1' />
                    </div>
                  </div>

                  {/* Tag & Title */}
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='glass-premium px-4 py-3 rounded-2xl'>
                      <p className='text-white/70 text-[10px] font-bold tracking-widest uppercase mb-0.5'>{event.tag}</p>
                      <p className='text-white font-bold text-lg'>{event.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-20'
              onClick={() => setSelectedVideo(null)}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className='relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl'
                onClick={(e) => e.stopPropagation()}>
                <video
                  className='w-full h-full object-contain bg-black'
                  src={selectedVideo}
                  controls
                  autoPlay
                />
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className='absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors'
                  onClick={() => setSelectedVideo(null)}>
                  <Icon icon='solar:close-bold' className='text-2xl' />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Highlights
