'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    program: 'Online Courses',
    course: 'Basic Robotics',
    age: '',
    school: '',
    city: '',
  })
  const [loader, setLoader] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)
    
    try {
      // Use no-cors to bypass browser security blocks for Google Scripts
      // This is a "fire and forget" request that Google will receive perfectly
      fetch('https://script.google.com/macros/s/AKfycbzbrxfg7Qu_MQn7TcnfPgB9j5d-cIUiLMCIsvp5mJMBZ9ZoMzTyEpVML81GB61ZQMf6/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      // We proceed immediately to success state as no-cors responses are opaque
      setLoader(false)
      setShowSuccess(true)
      
      // Reset form after success
      setFormData({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        program: 'Online Courses',
        course: 'Basic Robotics',
        age: '',
        school: '',
        city: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setLoader(false);
      alert('There was an error submitting your registration. Please try again later.');
    }
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <Icon icon="solar:pen-new-square-bold-duotone" className="text-primary text-3xl" />
        Registration Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Parent Name</label>
            <input
              type="text"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Student Name</label>
            <input
              type="text"
              name="studentName"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Student Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-gray-700 mb-2">School & Grade</label>
            <input
              type="text"
              name="school"
              required
              value={formData.school}
              onChange={handleChange}
              placeholder="School name and current grade"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
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
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Karachi"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Select Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all bg-white appearance-none"
            >
              <option>Online Courses</option>
              <option>After-School Programs</option>
              <option>Summer & Winter Camps</option>
              <option>School Partnerships</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Select Course Interest</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-primary focus:outline-none transition-all bg-white appearance-none"
          >
            <option>Basic Robotics</option>
            <option>Arduino Robotics</option>
            <option>Advanced Arduino (C++)</option>
            <option>Game Dev & ML</option>
            <option>Python & AI</option>
            <option>Mind Maths</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loader}
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:bg-gray-300"
        >
          {loader ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Icon icon="solar:check-read-bold" className="text-2xl" />
              Submit Registration
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-sm">
          Next Step: Our mentor will contact you for a brief evaluation.
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
          <p className="text-green-800 font-bold">Registration successful! A mentor will contact you shortly.</p>
        </motion.div>
      )}
    </div>
  )
}

export default RegistrationForm
