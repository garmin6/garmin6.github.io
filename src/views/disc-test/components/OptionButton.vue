<template>
  <button class="option" :class="{ selected }" @click="$emit('select', index)">
    <div class="option-marker">{{ marker }}</div>
    <div class="option-text">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  index: number
  text: string
  selected: boolean
}>()

defineEmits<{
  select: [index: number]
}>()

const markers = ['A', 'B', 'C', 'D']
const marker = computed(() => markers[props.index])
</script>

<style scoped>
.option {
  background: #fff;
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 16px 14px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  transition: border-color 0.15s, background 0.15s;
  text-align: left;
  font-size: 1rem;
  color: #2c3e50;
  width: 100%;
}

.option:hover {
  border-color: #aaa;
}

.option.selected {
  border-color: #2c3e50;
  background: #fafafa;
}

.option-marker {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #d0d5dd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #95a5a6;
  flex-shrink: 0;
  transition: all 0.15s;
}

.option.selected .option-marker {
  background: #2c3e50;
  border-color: #2c3e50;
  color: white;
}

.option-text {
  padding-top: 1px;
}
</style>
