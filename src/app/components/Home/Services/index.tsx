'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      title: 'Online Courses',
      description: 'Learn robotics and coding from home with live sessions, hands-on exercises, and STEM projects.',
      icon: 'solar:videocamera-record-bold-duotone',
      color: 'bg-blue-500',
      delay: 0.1,
    },
    {
      title: 'After-School Programs',
      description: 'Join on-site classes to build robots, code, and collaborate on exciting STEM projects.',
      icon: 'solar:users-group-two-rounded-bold-duotone',
      color: 'bg-purple-500',
      delay: 0.2,
    },
    {
      title: 'Summer & Winter Camps',
      description: 'Participate in intensive workshops with fun robotics projects, coding challenges, and team competitions.',
      icon: 'solar:calendar-bold-duotone',
      color: 'bg-emerald-500',
      delay: 0.3,
    },
    {
      title: 'School Partnerships',
      description: 'We partner with schools to provide a full robotics and coding curriculum, giving students hands-on STEM experience in class.',
      icon: 'solar:buildings-bold-duotone',
      color: 'bg-orange-500',
      delay: 0.4,
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive robotics and STEM education tailored for students, schools, and enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href="/registration">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                whileHover={{ y: -10 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-gray-50 border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-300 h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon icon={service.icon} className="text-3xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                  <span>Register Now</span>
                  <Icon icon="solar:arrow-right-bold" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
