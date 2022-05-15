import { Module } from 'vuex'
import { getters } from '@/store/projects/getters'
import { mutations } from '@/store/projects/mutations'
import { RootState } from '@/store'
import ProjectsInterface from '@/interfaces/projectsInterface'

const projects: Module<ProjectsInterface[], RootState> = {
  state: <ProjectsInterface[]>{},
  getters,
  mutations
}

export default projects
