'use client'
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}: {children: React.ReactNode}) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            // FIX: once:true prevents AOS from re-running animations every time
            // an element scrolls in/out. With once:false (the previous setting),
            // AOS and Framer Motion fight each other on every scroll event,
            // causing constant style recalculations that crash iOS WebKit.
            once: true,
            // FIX: Disable AOS on mobile/tablet — Framer Motion's whileInView
            // already handles entrance animations on those components. Running
            // both simultaneously doubles the animation workload on the GPU.
            disable: 'mobile',
            // Shorter offset means animations fire earlier, reducing the chance
            // of a layout-shift jank while scrolling fast on iPhone.
            offset: 50,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
