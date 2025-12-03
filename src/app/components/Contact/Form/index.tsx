'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const reset = () => {
    formData.firstname = ''
    formData.lastname = ''
    formData.email = ''
    formData.phnumber = ''
    formData.Message = ''
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    fetch('https://formsubmit.co/ajax/bhainirav772@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        Name: formData.firstname,
        LastName: formData.lastname,
        Email: formData.email,
        PhoneNo: formData.phnumber,
        Message: formData.Message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true)
          setShowThanks(true)
          reset()

          setTimeout(() => {
            setShowThanks(false)
          }, 5000)
        }

        reset()
      })
      .catch((error) => {
        setLoader(false)
        console.log(error.message)
      })
  }
  return (
    <section id='contact' className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='container'>
        <div className='relative max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <span className="text-white font-semibold text-sm tracking-wide">
                📧 GET IN TOUCH
              </span>
            </div>
            <h2 className='mb-4 font-bold tracking-tight'>
              Let's <span className='text-gradient-primary'>Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our courses or platform? We're here to help you start your robotics journey.
            </p>
          </div>

          <div className='glass-card rounded-3xl p-8 md:p-12'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-wrap w-full justify-between gap-6'>
              <div className='sm:flex gap-6 w-full'>
                <div className='flex-1'>
                  <label htmlFor='fname' className='block text-base font-semibold text-gray-700 mb-2'>
                    First Name
                  </label>
                  <input
                    id='fname'
                    type='text'
                    name='firstname'
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder='John'
                    className='w-full text-base px-5 py-3 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white'
                  />
                </div>
                <div className='flex-1 mt-4 sm:mt-0'>
                  <label htmlFor='lname' className='block text-base font-semibold text-gray-700 mb-2'>
                    Last Name
                  </label>
                  <input
                    id='lname'
                    type='text'
                    name='lastname'
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder='Doe'
                    className='w-full text-base px-5 py-3 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white'
                  />
                </div>
              </div>
              
              <div className='sm:flex gap-6 w-full'>
                <div className='flex-1'>
                  <label htmlFor='email' className='block text-base font-semibold text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john.doe@example.com'
                    className='w-full text-base px-5 py-3 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white'
                  />
                </div>
                <div className='flex-1 mt-4 sm:mt-0'>
                  <label
                    htmlFor='Phnumber'
                    className='block text-base font-semibold text-gray-700 mb-2'>
                    Phone Number
                  </label>
                  <input
                    id='Phnumber'
                    type='tel'
                    name='phnumber'
                    placeholder='+1234567890'
                    value={formData.phnumber}
                    onChange={handleChange}
                    className='w-full text-base px-5 py-3 rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white'
                  />
                </div>
              </div>
              
              <div className='w-full'>
                <label htmlFor='message' className='block text-base font-semibold text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='Message'
                  value={formData.Message}
                  onChange={handleChange}
                  rows={5}
                  className='w-full rounded-xl px-5 py-3 border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white resize-none'
                  placeholder='Tell us about your interest in robotics education...'></textarea>
              </div>
              
              <div className='w-full'>
                <button
                  type='submit'
                  disabled={!isFormValid || loader}
                  className={`btn-premium w-full py-4 rounded-full text-lg font-bold shadow-lg transition-all ${
                    !isFormValid || loader
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-2xl hover:scale-[1.02]'
                  }`}>
                  {loader ? (
                    <span className='flex items-center justify-center gap-2'>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
            
            {showThanks && (
              <div className='mt-6 glass-premium rounded-2xl px-6 py-4 flex items-center gap-3 animate-slideInLeft'>
                <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <p className='text-gray-900 font-semibold'>
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

