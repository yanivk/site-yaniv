import { createStore } from 'vuex'
import SkillsInterface from '@/interfaces/skillsInterface'
import skills from '@/store/skills'

export type RootState = {
    skillsState: SkillsInterface
}

export const store = createStore({
  modules: {
    skills
  }
})
