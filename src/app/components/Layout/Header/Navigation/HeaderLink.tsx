'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const HeaderLink: React.FC<{ item: HeaderItem;activeSection: string;sticky:boolean }> = ({ item,activeSection,sticky }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const isActive = item.href === `/#${activeSection}`

  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }
  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        className={`text-base flex font-medium hover:text-primary capitalized  ${
          isActive ? 'text-primary ' : !sticky? 'text-white': 'text-black'
        }`}>
        {item.label}
        
        {item.submenu 
        && (  
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.5em'
            height='1.5em'
            viewBox='0 0 24 24'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m7 10l5 5l5-5'
            />
          </svg>
        )}
      </Link>
     {submenuOpen && item.submenu && (
        <div className='absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg'>
          {item.submenu.map((subItem, index) => {
            const subIsActive = subItem.href === `/#${activeSection}`
            
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block px-4 py-2 ${
                  subIsActive ? 'bg-primary text-white' : 'text-black hover:bg-primary'
                }`}>
                {subItem.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
