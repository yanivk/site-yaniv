<template>
  <div class="navigation">
    <ul>
      <li
        class="list active"
        @click="activeLink"
      >
        <router-link
          to="/"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <span class="icon">
            <svg
              id="Outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <rect
                y="11"
                width="24"
                height="2"
                rx="1"
              />
              <rect
                y="4"
                width="24"
                height="2"
                rx="1"
              />
              <rect
                y="18"
                width="24"
                height="2"
                rx="1"
              />
            </svg>
          </span>
          <span class="text">Home</span>
        </router-link>
      </li>
      <li
        class="list"
        @click="activeLink"
      >
        <router-link
          to="/skills"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <span class="icon">
            <svg
              id="Outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            ><path
              d="M19,1H5A5.006,5.006,0,0,0,0,6v8a5.006,5.006,0,0,0,5,5h6v2H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2H13V19h6a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,3,3v7H2V6A3,3,0,0,1,5,3ZM19,17H5a3,3,0,0,1-2.816-2H21.816A3,3,0,0,1,19,17Z"
            /></svg>
          </span>
          <span class="text">Skills</span>
        </router-link>
      </li>
      <li
        class="list"
        @click="activeLink"
      >
        <router-link
          to="/projects"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <span class="icon">
            <svg
              id="Outline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            ><path
              d="M19,3H12.472a1.019,1.019,0,0,1-.447-.1L8.869,1.316A3.014,3.014,0,0,0,7.528,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V8A5.006,5.006,0,0,0,19,3ZM5,3H7.528a1.019,1.019,0,0,1,.447.1l3.156,1.579A3.014,3.014,0,0,0,12.472,5H19a3,3,0,0,1,2.779,1.882L2,6.994V6A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V8.994l20-.113V18A3,3,0,0,1,19,21Z"
            /></svg>

          </span>
          <span class="text">Projects</span>
        </router-link>
      </li>
      <li
        class="list"
        @click="activeLink"
      >
        <a
          href="/choose-player"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <span class="icon">
            <svg
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background:new 0 0 512 512;"
              xml:space="preserve"
              width="24"
              height="24"
            >
              <path
                d="M470.549,111.573L313.237,36.629c-34.628-20.684-77.728-21.051-112.704-0.96L41.451,111.573  c-0.597,0.299-1.216,0.619-1.792,0.96c-37.752,21.586-50.858,69.689-29.272,107.441c7.317,12.798,18.08,23.284,31.064,30.266  l43.883,20.907V375.68c0.026,46.743,30.441,88.039,75.072,101.931c31.059,8.985,63.264,13.384,95.595,13.056  c32.326,0.362,64.531-4,95.595-12.949c44.631-13.891,75.046-55.188,75.072-101.931V271.104l42.667-20.395v175.957  c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333v-256C512.143,145.615,492.363,122.473,470.549,111.573z   M384,375.787c0.011,27.959-18.129,52.69-44.8,61.077c-27.046,7.728-55.073,11.479-83.2,11.136  c-28.127,0.343-56.154-3.408-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763,33.707  c17.46,10.368,37.401,15.816,57.707,15.765c19.328,0.137,38.331-4.98,54.976-14.805L384,291.477V375.787z M452.267,211.733  l-160.896,76.8c-22.434,13.063-50.241,12.693-72.32-0.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903  c3.2-5.934,7.998-10.853,13.85-14.201l159.893-76.373c22.441-13.034,50.233-12.665,72.32,0.96l157.312,74.944  c11.569,6.424,18.807,18.555,18.965,31.787C469.354,193.441,462.9,205.097,452.267,211.733L452.267,211.733z"
              />
            </svg>
          </span>
          <span class="text">Tic Tac Toe</span>
        </a>
      </li>
      <li
        class="list"
        @click="activeLink"
      >
        <router-link
          to="/contact"
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
        >
          <span class="icon">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            ><path
              d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"
            /></svg>

          </span>
          <span class="text">Contact</span>
        </router-link>
      </li>
      <div class="indicator" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    activeLink (e: Event) {
      const isActiveLink: HTMLElement | null = (e.currentTarget as HTMLElement)
      const liActive = document.querySelectorAll('.active')
      liActive.forEach((item) => {
        item.classList.remove('active')
        isActiveLink.classList.add('active')
      })
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

<style scoped>

</style>
