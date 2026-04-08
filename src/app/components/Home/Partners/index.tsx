'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { PartnerType } from '@/app/types/partner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PartnerCompanies = () => {
  const [partners, setPartners] = useState<PartnerType[]>([])

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('/api/partners')
        const data = await res.json()
        setPartners(data.partners)
      } catch (err) {
        console.error('Failed to load partners:', err)
      }
    }
    fetchPartners()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='py-24 bg-white' id='partners'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Our <span className='text-primary'>Partners</span> & Collaborations
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Empowering students through global competitions and strategic partnerships.
          </p>
        </div>

        <div className='partners-slider'>
          <Slider {...settings}>
            {partners.map((partner, i) => (
              <div key={i} className='px-4 pb-12'>
                <div className='group bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300'>
                  <div className='relative h-20 w-full mb-6'>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className='object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500'
                    />
                  </div>
                  <h4 className='text-xl font-bold text-gray-900 mb-3'>{partner.name}</h4>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default PartnerCompanies
