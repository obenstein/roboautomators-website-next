import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderItem } from '../../../../types/menu'

const MobileHeaderLink: React.FC<{ item: HeaderItem; activeSection: string }> = ({ item, activeSection }) => {
  const pathname = usePathname()
  const isActive = item.href.startsWith('/#')
    ? pathname === '/' && activeSection === item.href.replace('/#', '')
    : pathname === item.href

  const [submenuOpen, setSubmenuOpen] = useState(false)

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen)
  }

  return (
    <div className='relative w-full'>
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 text-base font-medium transition-colors ${
          isActive ? 'text-primary font-bold' : 'text-black'
        } focus:outline-hidden`}>
        {item.label}
        {item.submenu && (
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
        <div className='bg-gray-50 p-2 w-full rounded-lg mt-1'>
          {item.submenu.map((subItem, index) => {
            const subIsActive = subItem.href.startsWith('/#')
              ? pathname === '/' && activeSection === subItem.href.replace('/#', '')
              : pathname === subItem.href
            
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`block py-2 text-sm transition-colors ${
                  subIsActive ? 'text-primary font-bold' : 'text-gray-500 hover:text-black'
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

export default MobileHeaderLink
