'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const SummerCampForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    studentName: '',
    age: '',
    batch: 'Batch 1 (June 1st - June 28th)',
    parentName: '',
    phone: '',
    address: '',
    source: 'Social Media',
  })
  const [loader, setLoader] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const batches = [
    'Batch 1 (June 1st - June 28th)',
    'Batch 2 (July 1st - July 28th)',
    'Weekend Only Batch'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    
    setTimeout(() => {
      setLoader(false)
      setShowSuccess(true)
      
      const message = `Hello Roboautomators! I want to register for the Summer Camp.
*Batch:* ${formData.batch}
*Student Name:* ${formData.studentName}
*Parent Name:* ${formData.parentName}
*Age:* ${formData.age}
*WhatsApp:* ${formData.phone}
*Email:* ${formData.email}
*Address:* ${formData.address}
*Heard From:* ${formData.source}`
      
      const whatsappUrl = `https://wa.me/923073744526?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }, 1500)
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <Icon icon="solar:sun-fog-bold-duotone" className="text-emerald-600 text-3xl" />
        Summer Camp 2026 Registration
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Student Name</label>
            <input
              type="text"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Full name of the child"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Student Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Choose Your Batch</label>
          <div className="grid grid-cols-1 gap-3">
            {batches.map((batch) => (
              <label 
                key={batch} 
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                  formData.batch === batch ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 hover:border-emerald-200'
                }`}
              >
                <input
                  type="radio"
                  name="batch"
                  value={batch}
                  checked={formData.batch === batch}
                  onChange={handleChange}
                  className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                />
                <span className={`font-medium ${formData.batch === batch ? 'text-emerald-900' : 'text-gray-600'}`}>
                  {batch}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Parent Name</label>
            <input
              type="text"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent/Guardian Name"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 XXX XXXXXXX"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Your complete address"
            rows={2}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about us?</label>
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all bg-white appearance-none"
          >
            <option>Social Media</option>
            <option>WhatsApp</option>
            <option>Family/Friend</option>
            <option>Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loader}
          className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:bg-gray-300"
        >
          {loader ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Icon icon="logos:whatsapp-icon" className="text-2xl" />
              Secure Camp Spot via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Limited slots available. Registration is confirmed after payment verification.
        </p>
      </form>

      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
            <Icon icon="solar:check-circle-bold" className="text-2xl" />
          </div>
          <p className="text-green-800 font-bold">Request received! Redirecting to WhatsApp...</p>
        </motion.div>
      )}
    </div>
  )
}

export default SummerCampForm
