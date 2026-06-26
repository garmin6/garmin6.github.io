<template>
  <div class="score-board">
    <div v-for="item in scoreList" :key="item.type" class="score-item" :class="item.type.toLowerCase()">
      <div class="score-label">{{ item.type }}</div>
      <div class="score-name">{{ item.name }}</div>
      <div class="score-value">{{ item.count }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ScoreItem } from '@/types/disc-test'

defineProps<{
  scoreList: ScoreItem[]
}>()
</script>

<style scoped>
.score-board {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 28px;
}

.score-item {
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  border-top: 3px solid;
}

.score-item.d { border-top-color: #c0392b; }
.score-item.i { border-top-color: #d4a017; }
.score-item.s { border-top-color: #27ae60; }
.score-item.c { border-top-color: #2980b9; }

.score-label {
  font-size: 0.85rem;
  color: #95a5a6;
  margin-bottom: 2px;
}

.score-name {
  font-size: 0.8rem;
  color: #b0b8c0;
  margin-bottom: 6px;
}

.score-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
}
</style>
