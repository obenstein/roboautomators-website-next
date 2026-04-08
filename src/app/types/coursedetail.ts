export type CourseDetailType = {
  course: string
  imageSrc: string
  profession: string
  price: string
  category:
    | 'robotics'
    | 'gamedevelopment'
    | 'mindskills'
    | 'programming'
  curriculum?: string[]
  classes?: number
  eligibility?: {
    age: string
    background?: string
  }
  outcome?: string
}
