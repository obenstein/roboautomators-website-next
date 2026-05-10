'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const GeneralProgramForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    grade: '',
    address: '',
    phone: '',
    schoolName: '',
    mindMath: 'No',
    source: 'Social Media',
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
    
    try {
      fetch('https://script.google.com/macros/s/AKfycbzbrxfg7Qu_MQn7TcnfPgB9j5d-cIUiLMCIsvp5mJMBZ9ZoMzTyEpVML81GB61ZQMf6/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          program: 'Robotics Program'
        }),
      });

      setLoader(false)
      setShowSuccess(true)
      
      setFormData({
        studentName: '',
        parentName: '',
        age: '',
        grade: '',
        address: '',
        phone: '',
        schoolName: '',
        mindMath: 'No',
        source: 'Social Media',
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
        <Icon icon="solar:square-academic-cap-bold-duotone" className="text-blue-600 text-3xl" />
        Robotics Program Registration
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
              placeholder="e.g. Jane Doe"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Parent Name</label>
            <input
              type="text"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Student Age</label>
            <input
              type="number"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Grade/Level</label>
            <input
              type="text"
              name="grade"
              required
              value={formData.grade}
              onChange={handleChange}
              placeholder="e.g. Grade 5"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 XXX XXXXXXX"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">School/Institute Name</label>
            <input
              type="text"
              name="schoolName"
              required
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Current school"
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all"
            />
          </div>
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
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Join MindMath?</label>
            <select
              name="mindMath"
              value={formData.mindMath}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all bg-white appearance-none"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">How did you hear about us?</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-all bg-white appearance-none"
            >
              <option>Social Media</option>
              <option>WhatsApp</option>
              <option>Family/Friend</option>
              <option>School</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loader}
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:bg-gray-300"
        >
          {loader ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Icon icon="solar:check-read-bold" className="text-2xl" />
              Complete Registration
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-sm">
          A mentor will contact you for a brief evaluation and course assignment.
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

export default GeneralProgramForm
