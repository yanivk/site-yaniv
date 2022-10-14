import type SkillsInterface from './skillsInterface'

export default interface FormationsInterface {
  id: number
  name: string
  description: string
  location: string
  date: Date
  degree?: string
  institute: string
  skills: SkillsInterface[]
  user: number
}
