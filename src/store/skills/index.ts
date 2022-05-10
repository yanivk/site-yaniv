import { Module } from 'vuex'
import { getters } from '@/store/skills/getters'
import { mutations } from '@/store/skills/mutations'
import { RootState } from '@/store'
import SkillsInterface from '@/interfaces/skillsInterface'

const skills: Module<SkillsInterface[], RootState> = {
  state: <SkillsInterface[]>{},
  getters,
  mutations
}

export default skills
