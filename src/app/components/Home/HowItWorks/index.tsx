'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: 'solar:cart-large-2-bold-duotone',
      title: 'Subscribe & Choose Your Course',
      description: 'Select the perfect robotics course for your skill level. Flexible monthly or annual subscription plans available.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: 'solar:box-bold-duotone',
      title: 'Receive Your LEGO Kit',
      description: 'We ship your mini LEGO robotics kit anywhere in the world. Everything you need to start building and learning.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: 'solar:play-circle-bold-duotone',
      title: 'Access Video Library',
      description: 'Start with foundational videos. New content unlocks as you complete assignments and demonstrate mastery.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: 'solar:videocamera-record-bold-duotone',
      title: 'Weekly Live Sessions',
      description: 'Join personalized 1-on-1 sessions with expert mentors. Get real-time guidance and feedback on your projects.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      number: '05',
      icon: 'solar:clipboard-check-bold-duotone',
      title: 'Complete Assignments',
      description: 'Build robots, solve challenges, and submit your work. Your performance determines progression speed.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '06',
      icon: 'solar:cup-star-bold-duotone',
      title: 'Level Up & Achieve',
      description: 'Unlock advanced content, earn certificates, and compete in robotics competitions worldwide.',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const features = [
    {
      icon: 'solar:global-bold-duotone',
      title: 'Worldwide Shipping',
      description: 'Kits delivered to 50+ countries',
    },
    {
      icon: 'solar:calendar-mark-bold-duotone',
      title: 'Flexible Scheduling',
      description: 'Book live sessions at your convenience',
    },
    {
      icon: 'solar:gameboy-bold-duotone',
      title: 'Gamified Progress',
      description: 'Earn badges and unlock achievements',
    },
    {
      icon: 'solar:refresh-circle-bold-duotone',
      title: 'Cancel Anytime',
      description: 'No long-term commitments required',
    },
  ]

  return (
    <section className="py-20 bg-white">
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
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              ⚡ SIMPLE PROCESS
            </span>
          </motion.div>

          <h2 className="mb-6">
            How <span className="text-gradient-primary">It Works</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our subscription-based learning platform makes it easy to start your robotics journey. 
            Here's how you go from beginner to robotics expert.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 z-0 overflow-hidden rounded-full transform -translate-y-1/2">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                    <Icon icon={step.icon} className="text-4xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            Subscription Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-gradient rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <Icon icon={feature.icon} className="text-5xl text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-premium rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Learning?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose your subscription plan and get your robotics kit shipped today. 
            Start building, coding, and creating tomorrow.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              View Pricing Plans
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              Try Free Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" className="text-green-500 text-xl" />
              <span>No credit card required for demo</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:shield-check-bold" className="text-blue-500 text-xl" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:star-bold" className="text-yellow-500 text-xl" />
              <span>4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
