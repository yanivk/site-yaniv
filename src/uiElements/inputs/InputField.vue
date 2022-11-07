<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  type: string;
  label?: string;
  placeholder?: string;
  inputValue?: string;
}>()

const localValue = computed(() => {
  return props.inputValue
})

const emit = defineEmits(['update:modelValue'])

function updateModelValue (event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="group-input">
    <label>{{ label }}</label>
    <input
      v-model="localValue"
      :type="type"
      :placeholder="placeholder"
      @input="updateModelValue"
    >
  </div>
</template>

<style scoped></style>
