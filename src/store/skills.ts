import {ref} from "vue";
import {defineStore} from "pinia";
import type SkillsInterface from "@/interfaces/skillsInterface";
import {httpGet} from "@/tools/http-common";

export const useSkillsStore = defineStore("skills", () => {
  const state = ref<SkillsInterface[]>([{
    id: 0,
    name: '',
    image: ''
  }])

  function setSkillsInformation() {
    httpGet('skills').then(r => state.value = r.data)
  }

  return {state, setSkillsInformation}
})
