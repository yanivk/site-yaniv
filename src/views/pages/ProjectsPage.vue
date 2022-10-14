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
              v-for="skill in project.skills"
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

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useProjectsStore } from '@/store/projects'

const projectStore = useProjectsStore()

const serverUrl = ref(import.meta.env.VUE_APP_API_URL)

const projects = computed(() => {
  return projectStore.state
})

onMounted(() => {
  projectStore.setProjectsInformation()
})

</script>

<style scoped>

</style>
