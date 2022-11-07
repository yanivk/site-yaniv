<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { usePlayerStore } from '@/store/games/players'
import { useGameBoardStore } from '@/store/games/gameBoard'
import ScoreBoard from '@/components/ellementsGame/ScoreBoard.vue'
import GameBoard from '@/components/ellementsGame/GameBoard.vue'

const playerStore = usePlayerStore()
const boardStore = useGameBoardStore()
const playerWin = ref<null | string>(null)

onMounted(() => {
  boardStore.prepareToClearBoard()
})

const player = computed(() => {
  return playerStore.getPlayerWhoPlayNow().value
})

function setPlayerResult (e: string) {
  playerWin.value = e
}

function restartGame () {
  playerWin.value = null
  boardStore.cleanBoard()
}
</script>

<template>
  <h1>Tic Tac Toe</h1>
  <h2>Turn of : {{ player.pseudo }}</h2>
  <score-board />
  <div v-if="playerWin">
    <p>
      {{ playerWin }}
    </p>
    <div @click="restartGame">
      One more ?
    </div>
  </div>
  <game-board @player-result="setPlayerResult" />
</template>

<style scoped></style>
