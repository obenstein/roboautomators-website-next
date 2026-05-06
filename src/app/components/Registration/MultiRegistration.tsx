'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import SchoolForm from './Forms/SchoolForm'
import GeneralProgramForm from './Forms/GeneralProgramForm'
import SummerCampForm from './Forms/SummerCampForm'

const MultiRegistration = () => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null)

  const forms = [
    {
      id: 'general',
      title: 'Robotics & AI Program',
      description: 'Online & After-School courses for young innovators.',
      details: [
        'Interactive live/recorded sessions',
        'Hands-on coding & hardware platform',
        'Direct mentor coaching & support'
      ],
      fee: 'From PKR 12,000',
      icon: 'solar:square-academic-cap-bold-duotone',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      component: <GeneralProgramForm />
    },
    {
      id: 'summer',
      title: 'Summer Camp 2026',
      description: 'Intensive 4-week seasonal workshops.',
      details: [
        'Team competitions & projects',
        'All equipment provided on-site',
        'Project showcases & certification'
      ],
      fee: 'PKR 12,000 (Full Camp)',
      icon: 'solar:sun-fog-bold-duotone',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      component: <SummerCampForm />
    },
    {
      id: 'school',
      title: 'School Partnership',
      description: 'STEM integration for educational institutions.',
      details: [
        'Integrated into school timetable',
        'Specialized hardware ecosystem',
        'Full curriculum & teacher training'
      ],
      fee: 'Custom Quote',
      icon: 'solar:buildings-bold-duotone',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      component: <SchoolForm />
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {!selectedForm ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {forms.map((form) => (
              <div
                key={form.id}
                onClick={() => setSelectedForm(form.id)}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className={`w-16 h-16 rounded-2xl ${form.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon icon={form.icon} className={`text-3xl ${form.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{form.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {form.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {form.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon icon="solar:check-circle-bold" className={`text-lg ${form.color.replace('text-', 'text-opacity-60 text-')}`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Starting from</span>
                    <span className="text-lg font-bold text-gray-900">{form.fee}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-full ${form.bgColor} flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <Icon icon="solar:arrow-right-bold" className="text-xl" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <button 
                onClick={() => setSelectedForm(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-primary font-bold transition-colors w-fit"
              >
                <Icon icon="solar:alt-arrow-left-bold-duotone" className="text-2xl" />
                Back to Selection
              </button>
              
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <div className={`w-8 h-8 rounded-full ${forms.find(f => f.id === selectedForm)?.bgColor} flex items-center justify-center`}>
                  <Icon icon={forms.find(f => f.id === selectedForm)?.icon || ''} className={forms.find(f => f.id === selectedForm)?.color} />
                </div>
                <span className="font-bold text-gray-900 text-sm">{forms.find(f => f.id === selectedForm)?.title}</span>
              </div>
            </div>

            {forms.find(f => f.id === selectedForm)?.component}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MultiRegistration
