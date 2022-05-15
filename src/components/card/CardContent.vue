<template>
  <div class="card">
    <img
      v-if="image"
      :src="`${serverUrl}/uploads/skills/${image}`"
      alt=""
    >
    <div class="overlay">
      <span class="card-text">{{ content }}</span>
      <span class="card-link">Mes projets</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    content: { type: String, required: true },
    image: { type: String, required: false, default: null }
  },
  data () {
    return {
      serverUrl: process.env.VUE_APP_API_URL
    }
  }
})
</script>
