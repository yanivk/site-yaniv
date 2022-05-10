<template>
  <div class="card">
    <img
      src="../../assets/images/js-logo.png"
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
    content: { type: String, required: true }
  }
})
</script>
