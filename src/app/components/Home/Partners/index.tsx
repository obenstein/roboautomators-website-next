'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PartnerType } from '@/app/types/partner'
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

  return (
    <section className='py-12 bg-white' id='partners'>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* <h2 className='text-2xl font-bold mb-6 text-center'>
          Our Partner Companies
        </h2> */}
          <h2 className='font-bold tracking-tight mb-6'>     Our <span className='text-[#238fc4]'>Partner</span> Companies</h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center'>
          {partners.map((partner, i) => (
            <Link
              key={i}
              href={partner.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center hover:opacity-80 transition'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className='object-contain h-12'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCompanies
