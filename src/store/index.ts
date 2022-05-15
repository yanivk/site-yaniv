import { createStore } from 'vuex'
import SkillsInterface from '@/interfaces/skillsInterface'
import skills from '@/store/skills'
import ProjectsInterface from '@/interfaces/projectsInterface'
import projects from '@/store/projects'

export type RootState = {
    skillsState: SkillsInterface,
    projectsState: ProjectsInterface
}

export const store = createStore({
  modules: {
    skills,
    projects
  }
})
