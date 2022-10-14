<template>
  <div class="frame">
    <div class="container">
      <div class="content flex-column">
        <h1>SKILLS</h1>
        <div class="content-cards">
          <template
            v-for="skill in skills"
            :key="skill.id"
          >
            <card-content
              :content="skill.name"
              :image="skill.image"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useSkillsStore } from '@/store/skills'

const skillStore = useSkillsStore()

const skills = computed(() => {
  return skillStore.state
})

onMounted(() => {
  skillStore.setSkillsInformation()
})

</script>
