'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import MultiRegistration from '@/app/components/Registration/MultiRegistration'

const RegistrationPage = () => {
  return (
    <main className="pt-32 pb-24 bg-gray-50/50 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Enroll Now</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4 tracking-tight">
            Start Your <span className="text-primary">Robotics</span> Journey
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Select the program that fits you best and register in seconds. Our mentors will handle the rest.
          </p>
        </motion.div>

        {/* Main Content: MultiRegistration Selector & Forms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <MultiRegistration />
        </motion.div>

        {/* Footer Info: Registration Flow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon icon="solar:info-circle-bold-duotone" className="text-primary text-3xl" />
                How it works?
              </h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Pick a Program', desc: 'Choose the registration track that fits your needs.' },
                  { step: '02', title: 'Submit Details', desc: 'Fill the quick form and redirect to WhatsApp.' },
                  { step: '03', title: 'Mentor Sync', desc: 'A mentor will reach out within 24 hours for evaluation.' },
                  { step: '04', title: 'Get Started', desc: 'Receive your course plan and robotics kit.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-primary font-black text-xl opacity-20">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-80 bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <Icon icon="solar:chat-round-dots-bold-duotone" className="text-4xl text-primary mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-6">Not sure which program to choose? Talk to our education consultant.</p>
              <a 
                href="https://wa.me/923073744526" 
                target="_blank" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                <Icon icon="logos:whatsapp-icon" className="brightness-0 invert" />
                Chat with Mentor
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  )
}

export default RegistrationPage
