import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import SkillsInterface from '@/interfaces/skillsInterface'

export const getters: GetterTree<SkillsInterface[], RootState> = {
  getSkills (state): SkillsInterface[] {
    return state
  }
}
