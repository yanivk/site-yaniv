<script setup lang="ts">
import InputField from '@/uiElements/inputs/InputField.vue'
import { usePlayerStore } from '@/store/games/players'
import { ref } from 'vue'
import BaseButton from '@/uiElements/buttons/BaseButton.vue'
import { useRouter } from 'vue-router'

const playerStore = usePlayerStore()
const router = useRouter()

const playerOneName = ref<string>('')
const playerTwoName = ref<string>('')

function validatePlayer () {
  playerStore.playerOneInformation.pseudo = playerOneName.value
  playerStore.playerTwoInformation.pseudo = playerTwoName.value
  router.push('/play')
}
</script>
<template>
  <main>
    <div class="choice-player">
      {{ playerOneName }}
      <input-field
        v-model="playerOneName"
        type="text"
        :input-value="playerOneName"
        label="What is your name player one ?"
      />

      <input-field
        v-model="playerTwoName"
        type="text"
        :input-value="playerTwoName"
        label="What is your name player two ?"
      />
    </div>

    <base-button @click="validatePlayer">
      Validate
    </base-button>
  </main>
</template>

<style scoped>
</style>
