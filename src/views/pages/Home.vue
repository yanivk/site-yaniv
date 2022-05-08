<template>
  <div class="home">
    <div><menu-content /></div>
    <div class="content">
      coucou
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MenuContent from '@/components/menu/MenuContent.vue'

@Options({
  components: {
    MenuContent,
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
