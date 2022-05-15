import { MutationTree } from 'vuex'
import ProjectsInterface from '@/interfaces/projectsInterface'

export const mutations: MutationTree<ProjectsInterface[]> = {
  SET_PROJECTS_INFORMATION (state, payload: ProjectsInterface) {
    for (const key in Object.keys(payload)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[Object.keys(payload)[key]] = payload[Object.keys(payload)[key]]
    }
  }
}
