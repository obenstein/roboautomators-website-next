// src/app/api/partners/route.ts
import { NextResponse } from 'next/server'

const partners = [
  {
    name: 'TeknoFest Pakistan',
    logo: '/images/clients/logos/Picture4.png',
    url: 'https://teknofest.com.pk',
    description: 'Organized and managed robotics competitions at TeknoFest 2.0 (2024) and 3.0 (2026), bringing together young innovators to showcase engineering and programming skills.',
  },
  {
    name: 'IBA Karachi',
    logo: '/images/clients/logos/Picture5.png',
    url: 'https://iba.edu.pk',
    description: "Collaborated to host high-level robotics competitions during the prestigious ProBattle'25 event, fostering technical excellence among university students.",
  },
  {
    name: 'Lucky One Mall',
    logo: '/images/clients/logos/Picture3.png',
    url: 'https://www.luckyone.com.pk',
    description: 'Conducted immersive robotics summer camps (2024 & 2025) for children, fostering creativity and hands-on learning in a fun, public-engaging environment.',
  },
  {
    name: 'WMO SPARK 4.0',
    logo: '/images/clients/logos/Picture2.png',
    url: '#',
    description: 'Hosted specialized robotics sessions for WMO SPARK 4.0 (2025), introducing cutting-edge technology and engineering concepts to aspiring students.',
  },
]

export async function GET() {
  return NextResponse.json({ partners })
}
