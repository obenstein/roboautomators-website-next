// src/app/api/partners/route.ts
import { NextResponse } from 'next/server'

const partners = [
  {
    name: 'TeknoFest Pakistan',
    logo: '/images/slickCompany/google.svg',
    url: 'https://teknofest.com.pk',
  },
  {
    name: 'IBA Karachi',
    logo: '/images/slickCompany/microsoft.svg',
    url: 'https://iba.edu.pk',
  },
  {
    name: 'Beach Luxury Hotel',
    logo: '/images/slickCompany/walmart.svg',
    url: 'https://beachluxuryhotel.com',
  },
  {
    name: 'Genex Education System',
    logo: '/images/slickCompany/airbnb.svg',
    url: '#',
  },
  {
    name: 'Roots International School',
    logo: '/images/slickCompany/hubspot.svg',
    url: 'https://rootsschool.edu.pk',
  },
]

export async function GET() {
  return NextResponse.json({ partners })
}
