<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue'
import { usePlayerStore } from '@/store/games/players'
import { useGameBoardStore } from '@/store/games/gameBoard'
import ColumnBoard from '@/components/ellementsGame/partials/ColumnBoard.vue'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')
const playerStore = usePlayerStore()
const boardStore = useGameBoardStore()
const playerWin = ref<null | string>(null)

const player = computed(() => {
  return playerStore.getPlayerWhoPlayNow().value
})
const playerOne = computed(() => {
  return playerStore.playerOneInformation
})
const playerTwo = computed(() => {
  return playerStore.playerTwoInformation
})

const rangeCol2 = ref([4, 5, 6])
const rangeCol3 = ref([7, 8, 9])

const emit = defineEmits(['playerResult'])

function writeInColumn (columnNumber: number) {
  // TODO check how get result in another page after emmit
  socket.emit('writeInColumn', { column: columnNumber, player: player.value })
  socket.on('writeInColumn', ({ column, player }) => {
    console.log(player)
    if (player.hisTurn && !boardStore.board[columnNumber].isChecked) {
      boardStore.board[column] = {
        isChecked: true,
        player
      }
      if (boardStore.getIsWin()) {
        playerWin.value = `${player.pseudo} win this game`
        emit('playerResult', playerWin.value)
        if (player.pseudo === playerOne.value.pseudo) {
          playerOne.value.score += 1
        } else {
          playerTwo.value.score += 1
        }
        return
      }
      if (boardStore.getEqualityPart()) {
        playerWin.value = 'Equality'
        emit('playerResult', playerWin.value)
        return
      }
      playerStore.changeTurn()
    }
  })
}
</script>

<template>
  <div class="game-board">
    <div class="row">
      <template
        v-for="i in 3"
        :key="i"
      >
        <column-board
          :column-number="i"
          @click="writeInColumn(i)"
        />
      </template>
    </div>
    <div class="row">
      <template
        v-for="i in rangeCol2"
        :key="i"
      >
        <column-board
          :column-number="i"
          @click="writeInColumn(i)"
        />
      </template>
    </div>
    <div class="row">
      <template
        v-for="i in rangeCol3"
        :key="i"
      >
        <column-board
          :column-number="i"
          @click="writeInColumn(i)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.game-board {
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
}
</style>
