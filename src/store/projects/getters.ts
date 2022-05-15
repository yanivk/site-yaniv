import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import ProjectsInterface from '@/interfaces/projectsInterface'

export const getters: GetterTree<ProjectsInterface[], RootState> = {
  getProjects (state): ProjectsInterface[] {
    return state
  }
}
