import {ref} from "vue";
import {defineStore} from "pinia";
import type ProjectsInterface from "@/interfaces/projectsInterface";
import {httpGet} from "@/tools/http-common";

export const useProjectsStore = defineStore("projects", () => {
  const state = ref<ProjectsInterface[]>([{
    id: 0,
    name: '',
    description: '',
    createdAt: new Date(),
    image: '',
    user: 0,
    skills: [],
  }])

  function setProjectsInformation() {
    httpGet('projects').then(r => state.value = r.data)
  }

  return {state, setProjectsInformation}
})
