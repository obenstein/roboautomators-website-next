'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import Signin from '@/app/components/Auth/SignIn'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([])
  const [activeSection, setActiveSection] = useState<string>('Home')

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)


  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])
    useEffect(() => {
    if (!headerData.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) {
              setActiveSection(id)
            }
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    headerData.forEach((item) => {
      const sectionId = item.href.replace('/#', '')
      const section = document.getElementById(sectionId)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [headerData])

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 10)
    if (window.scrollY < 20) {
      setActiveSection('Home')
    }
  }, [])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }, [navbarOpen])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll, handleClickOutside])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-500 ease-in-out ${
        sticky ? 'shadow-lg bg-white/95 backdrop-blur-md py-4' : 'shadow-none py-4 bg-black/60 backdrop-blur-sm'
      }`}>
      <div>
        <div className='container mx-auto max-w-7xl px-4 flex items-center justify-between'>
          <Logo />
        <nav className='hidden lg:flex grow items-center gap-8 justify-start ml-14'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} activeSection={activeSection} sticky={sticky}/>
            ))}
          </nav>
          <div className='flex items-center gap-2 md:gap-4'>
            {/* <button
              className='hidden lg:block bg-transparent text-primary border hover:bg-primary border-primary hover:text-white duration-300 px-6 py-2 rounded-lg hover:cursor-pointer'
              onClick={() => {
                setIsSignInOpen(true)
              }}>
              Sign In
            </button> */}
            {isSignInOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div
                  ref={signInRef}
                  className='relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md bg-white'>
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
                    aria-label='Close Sign In Modal'>
                    <Icon
                      icon='material-symbols:close-rounded'
                      width={24}
                      height={24}
                      className='text-black hover:text-primary inline-block hover:cursor-pointer'
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
               <Link href="/registration" className="hidden sm:flex flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass-premium border-2 px-4 py-1.5 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-xl transition-all whitespace-nowrap ${
                    sticky
                      ? 'border-primary/50 text-primary hover:bg-primary/10'
                      : 'border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  Register Now
                </motion.button>
              </Link>
            {isSignUpOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div
                  ref={signUpRef}
                  className='relative mx-auto bg-white w-full max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-8 pt-14 pb-8 text-center'>
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
                    aria-label='Close Sign Up Modal'>
                    <Icon
                      icon='material-symbols:close-rounded'
                      width={24}
                      height={24}
                      className='text-black hover:text-primary inline-block hover:cursor-pointer'
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg transition-colors'
              aria-label='Toggle mobile menu'>
              <span className={`block w-6 h-0.5 transition-colors ${sticky ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors ${sticky ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 mt-1.5 transition-colors ${sticky ? 'bg-black' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavbarOpen(false)}
              className='fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-40 cursor-pointer'
            />
          )}
        </AnimatePresence>
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0  w-[300px] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out h-dvh ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 flex flex-col`}>
          <div className='flex items-center justify-between p-6 border-b border-gray-50'>
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className='p-2 rounded-xl bg-gray-50 text-gray-500 hover:text-black transition-colors'
              aria-label='Close menu'>
              <Icon icon='solar:close-circle-bold' width={24} height={24} />
            </button>
          </div>
          <nav className='flex-1 overflow-y-auto p-6 flex flex-col gap-2 h-full'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} activeSection={activeSection} />
            ))}
            <div className='mt-8 flex flex-col gap-4 w-full'>
              <Link href="/registration" onClick={() => setNavbarOpen(false)}>
                <button className='w-full bg-primary text-black px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all'>
                  <Icon icon="solar:pen-new-square-bold-duotone" className="text-2xl" />
                  Register Now
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
