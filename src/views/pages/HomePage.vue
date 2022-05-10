<template>
  <div class="frame">
    <div class="container">
      <div class="content">
        <div
          class="fill-effect"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <h1 class="fill-stroke-effect">
            FULLSTACK DEVELOPPER YANIV KOUBBI
          </h1>
          <h1 class="fill-effect-fill">
            FULLSTACK DEVELOPPER YANIV KOUBBI
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      isOpen: false,
      message: 'FULLSTACK DEVELOPPER YANIV KOUBBI',
      messageCount: 0
    }
  },
  mounted () {
    document.getElementsByClassName('fill-effect')[0].classList.remove('active')
    this.messageCount = 0
    const interval = setInterval(() => this.textFunc(), 100) // Every 150 milliseconds
    setTimeout(() => clearInterval(interval), 5000)
  },
  methods: {
    textFunc () {
      const messageLabel = document.getElementsByClassName('fill-stroke-effect')[0]
      messageLabel.innerHTML = this.message.substring(0, this.messageCount)

      if (this.messageCount !== this.message.length) {
        this.messageCount++
      } else {
        document.getElementsByClassName('fill-effect')[0].classList.add('active')
      }
    },
    addClassOnCursor () {
      const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement
      cursor.classList.add('cursor--big')
    },
    removeClassOnCursor () {
      const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement
      cursor.classList.remove('cursor--big')
    }
  }
})
</script>
