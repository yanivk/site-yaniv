import type ProjectsInterface from './projectsInterface'
import type SkillsInterface from './skillsInterface'
import type ExperiencesInterface from '@/interfaces/experiencesInterface'
import type FormationsInterface from '@/interfaces/formationsInterface'

export default interface UsersInterface {
  id: number
  firstname: string
  lastname: string
  mail: string
  password: string
  token: string
  roles: [],
  experiences: ExperiencesInterface[]
  projects: ProjectsInterface[]
  formations: FormationsInterface[]
  skills: SkillsInterface[]
}
