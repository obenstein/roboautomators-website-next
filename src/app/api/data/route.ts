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
  { label: 'Courses', href: '/#Courses' },
  { label: 'Mentors', href: '/#mentors-section' },
  { label: 'Testimonial', href: '/#testimonial-section' },
  { label: 'Join', href: '/#join-section' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Docs', href: '/documentation' },
]

const CourseData: CourseType[] = [
  { name: 'Robotics' },
  { name: 'Game Development' },
  { name: 'Mind Skills' },
]

const HourData: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: '/images/slickCompany/airbnb.svg',
  },
  {
    imgSrc: '/images/slickCompany/hubspot.svg',
  },
  {
    imgSrc: '/images/slickCompany/microsoft.svg',
  },
  {
    imgSrc: '/images/slickCompany/google.svg',
  },
  {
    imgSrc: '/images/slickCompany/walmart.svg',
  },
  {
    imgSrc: '/images/slickCompany/fedex.svg',
  },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'Basic Robotics',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Basic Robotics: The Initial Phase of Innovation',
    price: '99',
    category: 'robotics',
    curriculum: [
      'Basics of Robotics',
      'Controlling robots through programming',
      'Introduction to sensors',
      'Building logic by solving tasks and challenges',
      'Making small robotic models while applying problem-solving techniques',
    ],
    classes: 12,
    eligibility: { age: '8-12 years', background: 'No prior experience needed' },
  },
  {
    course: 'Game Development',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Game Development: Turning Ideas to Life',
    price: '129',
    category: 'gamedevelopment',
    curriculum: [
      'Sequencing and logic building in game design',
      'Developing algorithms with block-based programming',
      'Animation techniques to make backgrounds and characters come to life',
      'Introduction to machine learning in games',
    ],
    classes: 14,
    eligibility: { age: '10-14 years', background: 'Basic computer knowledge' },
  },
  {
    course: 'Arduino Robotics',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Arduino Robotics: Combining Circuits and Coding',
    price: '149',
    category: 'robotics',
    curriculum: [
      'Programming fundamentals for Arduino microcontroller',
      'Using actuators and sensors in practical applications',
      'Introduction to Circuit Building',
      'Building automation projects',
      'Problem-solving and critical thinking abilities',
    ],
    classes: 16,
    eligibility: { age: '12-16 years', background: 'Basic programming knowledge recommended' },
  },
  {
    course: 'Advanced Arduino with C++',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Advanced Arduino Robotics with C++: From Builder to Innovator',
    price: '179',
    category: 'robotics',
    curriculum: [
      'Practical Robotics C++ programming with Arduino',
      'Expertise in design and development of electronic circuits',
      'Troubleshooting intricate circuits and programs',
      'Proficiency with sophisticated automation and sensors',
      'Constructing sophisticated robotics and automation projects',
    ],
    classes: 18,
    eligibility: { age: '14-18 years', background: 'Completed Arduino Robotics or equivalent experience' },
  },
  {
    course: 'Mind Maths',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Mind Maths – Sharper, Faster, Smarter',
    price: '89',
    category: 'mindskills',
    curriculum: [
      'Speed calculation methods using mind',
      'Tricks for arithmetic solutions without paper',
      'Memory exercises to enhance recall and retention',
      'Logical thinking development',
    ],
    classes: 10,
    eligibility: { age: '8-16 years', background: 'Basic arithmetic knowledge' },
  },
]


const MentorData: MentorType[] = [
  {
    name: 'Senior UX Designer',
    href: '#',
    imageSrc: '/images/mentor/boy1.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Shoo Thar Mein',
  },
  {
    name: 'Photoshop Instructor',
    href: '#',
    imageSrc: '/images/mentor/boy2.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Cristian Doru Barin',
  },
  {
    name: 'SEO Expert',
    href: '#',
    imageSrc: '/images/mentor/boy3.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Tanzeel Ur Rehman',
  },
  {
    name: 'UI/UX Designer',
    href: '#',
    imageSrc: '/images/mentor/boy4.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Andrew Williams',
  },
  {
    name: 'Web Development / Web Design',
    href: '#',
    imageSrc: '/images/mentor/boy5.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Brad Schiff',
  },
  {
    name: 'Adobe Certified Instructor',
    href: '#',
    imageSrc: '/images/mentor/girl1.svg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Daniel Walter Scott',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Cristian Doru Barin',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Tanzeel Ur Rehman',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Courses', href: '/#Courses' },
      { label: 'Mentors', href: '/#mentors-section' },
      { label: 'Testimonial', href: '/#testimonial-section' },
      { label: 'Join', href: '/#join-section' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Status', href: '/' },
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
