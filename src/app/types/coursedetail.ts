export type CourseDetailType = {
  course: string
  imageSrc: string
  profession: string
  price: string
  category:
    | 'robotics'
    | 'gamedevelopment'
    | 'mindskills'
  curriculum?: string[]
  classes?: number
  eligibility?: {
    age: string
    background?: string
  }
}
