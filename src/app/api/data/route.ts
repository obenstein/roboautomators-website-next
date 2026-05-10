import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { CourseType } from '@/app/types/course'
import { Hourtype } from '@/app/types/hour'
import { CourseDetailType } from '@/app/types/coursedetail'
import { MentorType } from '@/app/types/mentor'
import { TestimonialType } from '@/app/types/testimonial'
import { FooterLinkType } from '@/app/types/footerlinks'

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#Home' },
  { label: 'Registration', href: '/registration' },
  { label: 'Products', href: '/#courses-section' },
  { label: 'Media', href: '/#highlights-section' },
  { label: 'About Us', href: '/#about-us' },
]

const CourseData: CourseType[] = [
  { name: 'Robotics' },
  { name: 'Coding' },
  { name: 'AI' },
  { name: 'Mind Skills' },
]

const HourData: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const Companiesdata: { imgSrc: string }[] = [
  { imgSrc: '/images/clients/logos/Picture2.png' },
  { imgSrc: '/images/clients/logos/Picture3.png' },
  { imgSrc: '/images/clients/logos/Picture4.png' },
  { imgSrc: '/images/clients/logos/Picture5.png' },
  { imgSrc: '/images/clients/logos/ROOTS-WHITE-LOGO-01.png' },
  { imgSrc: '/images/clients/logos/Starlinks.png' },
  // { imgSrc: '/images/clients/logos/aa joyland.jfif' },
  { imgSrc: '/images/clients/logos/akesp logo.png' },
  // { imgSrc: '/images/clients/logos/al burhan.jfif' },
  // { imgSrc: '/images/clients/logos/cfs.jfif' },
  // { imgSrc: '/images/clients/logos/dha.jfif' },
  { imgSrc: '/images/clients/logos/genex.png' },
  // { imgSrc: '/images/clients/logos/giggle town.jfif' },
  // { imgSrc: '/images/clients/logos/ifs.jfif' },
  // { imgSrc: '/images/clients/logos/igs.jfif' },
  // { imgSrc: '/images/clients/logos/kent.jfif' },
  // { imgSrc: '/images/clients/logos/kiddie.jfif' },
  { imgSrc: '/images/clients/logos/kingsley.png' },
  { imgSrc: '/images/clients/logos/mentor.png' },
  // { imgSrc: '/images/clients/logos/mrs noor.jfif' },
  { imgSrc: '/images/clients/logos/peakabear.png' },
  { imgSrc: '/images/clients/logos/sg school.png' },
  { imgSrc: '/images/clients/logos/st.michae logo.png' },
  // { imgSrc: '/images/clients/logos/taurus.jfif' },
  // { imgSrc: '/images/clients/logos/verge.jfif' },
  { imgSrc: '/images/clients/logos/virtuous.png' },
  // { imgSrc: '/images/clients/logos/whales college logo.jfif' },
  // { imgSrc: '/images/clients/logos/whss.jfif' },
  { imgSrc: '/images/clients/logos/zaheer.png' },
  // { imgSrc: '/images/clients/logos/ziauddin.jfif' },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'Basic Robotics',
    imageSrc: '/images/CoursesWalls/basic robotics 1.jpg',
    profession: 'Fun, hands-on introduction to robotics that builds creativity, curiosity, and problem-solving skills.',
    price: '9,000',
    category: 'robotics',
    curriculum: [
      'Basics of robotics and robot movement',
      'Programming simple tasks',
      'Introduction to sensors',
      'Problem-solving with robotic models',
    ],
    classes: 12,
    eligibility: { age: '8-12 years', background: 'No prior experience needed' },
    outcome: 'Students can assemble and program basic robots, understand sensor logic, and approach problems creatively.',
  },
  {
    course: 'Arduino Robotics',
    imageSrc: '/images/CoursesWalls/arduino robotics 1.jpg',
    profession: 'Learn to use sensors, actuators, and microcontrollers to build automation projects.',
    price: '12,000',
    category: 'robotics',
    curriculum: [
      'Arduino programming fundamentals',
      'Working with sensors and actuators',
      'Circuit building and electronics',
      'Smart automation projects',
    ],
    classes: 16,
    eligibility: { age: '12-16 years', background: 'Basic logic recommended' },
    outcome: 'Students will build functional robotic systems and possess a solid foundation in electronic circuits.',
  },
  {
    course: 'Advanced Arduino Robotics (C++)',
    imageSrc: '/images/CoursesWalls/advanced arduino robotics 1.jpg',
    profession: 'Deep dive into advanced robotics, C++ programming, and complex circuit design.',
    price: '15,000',
    category: 'robotics',
    curriculum: [
      'Advanced Arduino C++',
      'Complex electronics and sensor integration',
      'Building industrial-scale automation systems',
      'Complex autonomous project development',
    ],
    classes: 18,
    eligibility: { age: '14-18 years', background: 'Completed Arduino Robotics' },
    outcome: 'Expertise in C++ programming for hardware and the ability to design sophisticated robotics solutions.',
  },
  {
    course: 'Game Development & Machine Learning',
    imageSrc: '/images/CoursesWalls/game dev 1.jpg',
    profession: 'Create interactive games and develop logical thinking through block-based and logic programming.',
    price: '11,000',
    category: 'gamedevelopment',
    curriculum: [
      'Sequencing and logic in game design',
      'Block-based programming for algorithms',
      'Animating characters and backgrounds',
      'Introduction to AI in games',
    ],
    classes: 14,
    eligibility: { age: '10-14 years', background: 'Basic computer knowledge' },
    outcome: 'Students create interactive games and gain a fundamental understanding of how AI works in software.',
  },
  {
    course: 'Python Programming & Machine Learning',
    imageSrc: '/images/CoursesWalls/python programming 2.jpg',
    profession: 'Master the world\'s most popular language for AI and automation.',
    price: '13,000',
    category: 'programming',
    curriculum: [
      'Python syntax and core logic',
      'Data structures and algorithms',
      'Real-world automation scripts',
      'Introduction to ML models',
      'Building AI-powered projects',
      'Developing data-driven applications',
    ],
    classes: 15,
    eligibility: { age: '12-18 years', background: 'Analytical mindset' },
    outcome: 'Proficiency in Python and the capability to build and deploy intelligent software applications.',
  },
  {
    course: 'Mind Maths',
    imageSrc: '/images/CoursesWalls/Mind Maths 1.jpg',
    profession: 'Improve calculation speed, focus, and memory recall through advanced arithmetic techniques.',
    price: '6,000',
    category: 'mindskills',
    curriculum: [
      'Speed calculation techniques',
      'Mental arithmetic tricks (no paper needed!)',
      'Improving focus and memory recall',
      'Multiplication, division and square root shortcuts',
    ],
    classes: 10,
    eligibility: { age: '8-16 years', background: 'Basic arithmetic' },
    outcome: 'Dramatically improved calculation speed and enhanced cognitive ability for academic success.',
  },
]

const MentorData: MentorType[] = [
  {
    name: 'Lead Robotics Mentor',
    href: '#',
    imageSrc: '/images/mentor/mentor1.png',
    imageAlt: 'Senior Robotics Instructor',
    color: 'Alex Thompson',
  },
  {
    name: 'Curriculum Specialist',
    href: '#',
    imageSrc: '/images/mentor/mentor2.png',
    imageAlt: 'Expert Curriculum Architect',
    color: 'Sarah Chen',
  },
  {
    name: 'Technical Advisor',
    href: '#',
    imageSrc: '/images/mentor/mentor3.png',
    imageAlt: 'Advanced Robotics Consultant',
    color: 'Tanzeel Ur Rehman',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'Student Parent',
    name: 'Mrs. Ahmed',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "The hands-on approach at Roboautomators has transformed my son's curiosity into actual building skills. Highly recommended!",
  },
  {
    profession: 'Advanced Robotics Student',
    name: 'Hamza Khan',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "Learning Arduino and C++ was a breeze thanks to the experts here. I've already built 3 automation projects!",
  },
  {
    profession: 'Mind Maths Student',
    name: 'Aisha Malik',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I used to fear math, but Mind Maths tricks made it my favorite subject. I can calculate faster than a calculator now!",
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Registration', href: '/registration' },
      { label: 'Products', href: '/#products' },
      { label: 'Media', href: '/#media' },
      { label: 'About Us', href: '/#about-us' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
    ],
  },
  {
    section: 'Contact Us',
    links: [
      { label: '+92 307 3744526', href: 'https://wa.me/923073744526' },
      { label: 'Email: roboautomators@gmail.com', href: 'mailto:roboautomators@gmail.com' },
      { label: 'Location: Office # 11 Mezzanine floor, Crown Heights, Block 4, Gulshan-e-Iqbal, Karachi', href: '/#about-us' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    CourseData,
    HourData,
    Companiesdata,
    CourseDetailData,
    MentorData,
    TestimonialData,
    FooterLinkData,
  })
}
