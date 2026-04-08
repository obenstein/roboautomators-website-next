'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import RegistrationForm from '@/app/components/Registration/RegistrationForm'

const RegistrationPage = () => {
  const programs = [
    {
      title: 'Online Courses',
      details: [
        'Interactive recorded lessons (flexible weekly deadline)',
        'Weekly live sessions for direct mentor coaching',
        'Hands-on coding and robotics platform access',
      ],
      fee: 'PKR 25,000/course',
      kit: 'PKR 25,000',
      icon: 'solar:videocamera-record-bold-duotone',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'After-School Programs',
      details: [
        'All kits, tablets, and laptops provided on-site',
        'Robotics/AI sessions: 1 hour duration',
        'Mind Maths sessions: 35 min duration',
        '2 classes/week on-site projects',
      ],
      fee: 'PKR 12,000/month',
      other: 'Mind Maths: PKR 6,000',
      icon: 'solar:users-group-two-rounded-bold-duotone',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Summer & Winter Camps',
      details: [
        'Intensive 4-week program (2 classes/week)',
        'Team competitions and project showcases',
        'All equipment and materials provided',
      ],
      fee: 'PKR 12,000 (Full Camp)',
      icon: 'solar:calendar-bold-duotone',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'School Partnerships',
      details: [
        '1 class/week per grade (integrated into timetable)',
        'Different specialized courses per age group',
        'Full curriculum and hardware ecosystem',
      ],
      fee: 'Contact for Quote',
      icon: 'solar:buildings-bold-duotone',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Registration Hub</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">Choose Your Learning Program</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            From flexible online courses to intensive holiday camps and year-round after-school programs, we have the perfect path for every young innovator.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Content: Program Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Details</h2>
            
            <div className="grid grid-cols-1 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                  <div className={`w-16 h-16 rounded-2xl ${program.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon icon={program.icon} className={`text-3xl ${program.color}`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <ul className="mb-4 space-y-1">
                      {program.details.map((detail, dIndex) => (
                        <li key={dIndex} className="text-gray-500 text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-bold text-sm">
                        Fee: {program.fee}
                      </div>
                      {program.kit && (
                        <div className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full font-bold text-sm">
                          Kit: {program.kit}
                        </div>
                      )}
                      {program.other && (
                        <div className="bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full font-bold text-sm">
                          {program.other}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex items-start gap-4">
              <Icon icon="solar:info-circle-bold-duotone" className="text-2xl text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-emerald-900 mb-1">Registration Flow:</h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  1. Submit the registration form via WhatsApp. <br />
                  2. Our mentor will reach out within 24 hours. <br />
                  3. A brief technical evaluation for advanced courses. <br />
                  4. Course assignment and kit delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Dynamic Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <RegistrationForm />
          </motion.div>

        </div>
      </div>
    </main>
  )
}

export default RegistrationPage
