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
            <card-content :content="skill.name" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from '@/store'
import { httpGet } from '@/tools/http-common'
import CardContent from '@/components/card/CardContent.vue'

export default defineComponent({
  components: { CardContent },
  computed: {
    skills () {
      return store.getters.getSkills
    }
  },
  mounted () {
    httpGet('skills').then(r => store.commit('SET_SKILLS_INFORMATION', r.data))
  }
})
</script>
