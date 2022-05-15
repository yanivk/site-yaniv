<template>
  <div class="frame">
    <div class="container">
      <div class="content flex-column">
        <h1>Projects</h1>
        <div class="grid template-col-6">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-content"
          >
            {{ project.name }}
            {{ project.description }}
            <img
              v-if="project.image"
              :src="`${serverUrl}/uploads/projects/${project.image}`"
              alt=""
            >
            <div
              v-for="skill in JSON.parse(project.skills)"
              :key="skill.id"
              class="skills"
            >
              {{ skill.name }}
              <img
                v-if="skill.image"
                :src="`${serverUrl}/uploads/skills/${skill.image}`"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import { httpGet } from '@/tools/http-common'

export default defineComponent({
  data () {
    return {
      serverUrl: process.env.VUE_APP_API_URL
    }
  },
  computed: {
    projects () {
      return store.getters.getProjects
    }
  },
  mounted () {
    httpGet('projects').then(r => store.commit('SET_PROJECTS_INFORMATION', r.data))
  }
})
</script>

<style scoped>

</style>
