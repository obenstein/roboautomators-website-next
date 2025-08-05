export type CourseDetailType = {
  course: string
  imageSrc: string
  profession: string
  price: string
  category:
    | 'mobiledevelopment'
    | 'webdevelopment'
    | 'datascience'
    | 'cloudcomputing'
  curriculum?: string[]
  classes?: number
  eligibility?: {
    age: string
    background?: string
  }
}
