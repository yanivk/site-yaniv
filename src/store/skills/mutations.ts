import { MutationTree } from 'vuex'
import SkillsInterface from '@/interfaces/skillsInterface'

export const mutations: MutationTree<SkillsInterface[]> = {
  SET_SKILLS_INFORMATION (state, payload: SkillsInterface) {
    for (const key in Object.keys(payload)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[Object.keys(payload)[key]] = payload[Object.keys(payload)[key]]
    }
  }
}
