'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const ImpactStats = () => {
  const stats = [
    {
      label: 'Students Trained',
      value: '6,500+',
      icon: 'solar:users-group-rounded-bold-duotone',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Projects Completed',
      value: '700+',
      icon: 'solar:cup-first-bold-duotone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Courses Delivered',
      value: '50+',
      icon: 'solar:medal-star-bold-duotone',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
  ]

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <Icon icon={stat.icon} className={`text-4xl ${stat.color}`} />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
