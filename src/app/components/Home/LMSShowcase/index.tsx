'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const LMSShowcase = () => {
  const learningJourney = [
    {
      icon: 'solar:box-bold-duotone',
      title: 'LEGO Robotics Kit',
      description: 'Mini kits shipped worldwide to your doorstep',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      icon: 'solar:videocamera-record-bold-duotone',
      title: 'Video Library',
      description: 'Comprehensive course videos unlock as you progress',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      icon: 'solar:users-group-rounded-bold-duotone',
      title: 'Live 1-on-1 Sessions',
      description: 'Weekly personalized sessions with expert mentors',
      color: 'from-orange-500 to-red-500',
      delay: 0.3,
    },
    {
      icon: 'solar:clipboard-check-bold-duotone',
      title: 'Gamified Assignments',
      description: 'Performance-based progression system',
      color: 'from-green-500 to-emerald-500',
      delay: 0.4,
    },
  ]

  const stats = [
    { value: '50+', label: 'Countries Worldwide', icon: 'solar:global-bold-duotone' },
    { value: '10,000+', label: 'Students Enrolled', icon: 'solar:users-group-rounded-bold-duotone' },
    { value: '95%', label: 'Satisfaction Rate', icon: 'solar:star-bold-duotone' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
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
            className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="text-white/90 font-semibold text-sm tracking-wide">
              🌍 GLOBAL LMS PLATFORM
            </span>
          </motion.div>
          
          <h2 className="text-white mb-6 max-w-4xl mx-auto">
            Learn Robotics From <span className="text-gradient-premium">Anywhere in the World</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Our subscription-based platform combines physical LEGO robotics kits with a comprehensive online learning system, 
            making world-class robotics education accessible to students in grades 3-12 globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Free Trial
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-premium text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Explore Courses
            </motion.button>
          </div>
        </motion.div>

        {/* Learning Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningJourney.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={step.icon} className="text-3xl text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>

              {/* Connection Arrow (except for last item) */}
              {index < learningJourney.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <Icon icon="solar:arrow-right-bold" className="text-2xl text-blue-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-premium rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <Icon icon={stat.icon} className="text-5xl text-white/80 mx-auto mb-3" />
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Why Roboautomators is Different
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-gradient rounded-xl p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-xl font-semibold text-white mb-2">Global Accessibility</h4>
              <p className="text-white/70">
                Learn from anywhere with kits shipped worldwide and online sessions
              </p>
            </div>
            
            <div className="glass-gradient rounded-xl p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">Industry-Leading Curriculum</h4>
              <p className="text-white/70">
                Unmatched course quality that drives recurring customers
              </p>
            </div>
            
            <div className="glass-gradient rounded-xl p-6">
              <div className="text-4xl mb-3">🎮</div>
              <h4 className="text-xl font-semibold text-white mb-2">Gamified Learning</h4>
              <p className="text-white/70">
                Performance-based progression keeps students engaged and motivated
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LMSShowcase
