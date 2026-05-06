'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const SchoolForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    schoolName: '',
    phone: '',
    email: '',
    address: '',
    stemStatus: 'No',
  })
  const [loader, setLoader] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

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
      
      const message = `Hello Roboautomators! I am interested in a School Partnership.
*Name:* ${formData.name}
*Role:* ${formData.role}
*School:* ${formData.schoolName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Address:* ${formData.address}
*Has STEM programs?:* ${formData.stemStatus}`
      
      const whatsappUrl = `https://wa.me/923073744526?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }, 1500)
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <Icon icon="solar:buildings-bold-duotone" className="text-orange-600 text-3xl" />
        School Partnership Registration
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Role/Designation</label>
            <input
              type="text"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Principal, Director"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">School/Institution Name</label>
          <input
            type="text"
            name="schoolName"
            required
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="Official school name"
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 XXX XXXXXXX"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="school@example.com"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">School Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="Complete address of the school"
            rows={3}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Do you have existing STEM/Robotics programs?</label>
          <select
            name="stemStatus"
            value={formData.stemStatus}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 focus:outline-none transition-all bg-white appearance-none"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loader}
          className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:bg-gray-300"
        >
          {loader ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Icon icon="logos:whatsapp-icon" className="text-2xl" />
              Register Interest via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Our team will contact you to schedule a meeting and presentation.
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

export default SchoolForm
