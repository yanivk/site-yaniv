import ProjectsInterface from './projectsInterface'
import SkillsInterface from './skillsInterface'
import ExperiencesInterface from '@/interfaces/experiencesInterface'
import FormationsInterface from '@/interfaces/formationsInterface'

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
