<template>
  <span class="cursor" />
  <div class="menu">
    <menu-content />
  </div>
  <div class="bg-circle1" />
  <router-view :key="$route.fullPath" />
</template>
<script setup lang="ts">
</script>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MenuContent from '@/components/menu/MenuContent.vue'

document.onmousemove = (ev) => {
  const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement

  cursor.style.top = `${ev.clientY}px`
  cursor.style.left = `${ev.clientX}px`
}
@Options({
  components: { MenuContent }
})
export default class App extends Vue {
}
</script>
