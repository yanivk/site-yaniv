<template>
  <div class="card">
    <img
      src="../../assets/images/js-logo.png"
      alt=""
    >
    <span class="card-text">{{ content }}</span>
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
