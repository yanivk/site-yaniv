<script setup lang="ts">
import { defineProps } from 'vue'
import { useGameBoardStore } from '@/store/games/gameBoard'

const boardStore = useGameBoardStore()
const props = defineProps<{ columnNumber?: number }>()
</script>

<template>
  <div class="column">
    <span v-if="boardStore.board[props.columnNumber].player !== null">
      {{ boardStore.board[props.columnNumber].player.symbol }}
    </span>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  border: 1px solid darkgrey;
  font-size: 40px;
}

.column:hover {
  background: #ececec;
  cursor: pointer;
}
</style>
