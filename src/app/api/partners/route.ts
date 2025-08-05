// src/app/api/partners/route.ts
import { NextResponse } from 'next/server'

const partners = [
  {
    name: 'Google',
    logo: '/images/slickCompany/google.svg',
    url: 'https://google.com',
  },
  {
    name: 'Microsoft',
    logo: '/images/slickCompany/microsoft.svg',
    url: 'https://microsoft.com',
  },
  {
    name: 'Amazon',
    logo: '/images/slickCompany/walmart.svg',
    url: 'https://amazon.com',
  },
]

export async function GET() {
  return NextResponse.json({ partners })
}
