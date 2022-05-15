import SkillsInterface from './skillsInterface'
import ExperiencesInterface from '@/interfaces/experiencesInterface'

export default interface ProjectsInterface {
    id: number
    name: string
    description: string
    createdAt: Date
    image?: string
    user: number
    skills: SkillsInterface[]
    experiences?: ExperiencesInterface[]
}
