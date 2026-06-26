<template>
  <div class="bar-chart">
    <div v-for="item in scoreList" :key="item.type" class="bar-item">
      <div class="bar-header">
        <span>{{ item.type }} · {{ item.name }}</span>
        <span>{{ item.count }} 题</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" :class="item.type.toLowerCase()" :style="{ width: item.percent + '%' }"></div>
      </div>
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
.bar-chart {
  margin-bottom: 28px;
}

.bar-item {
  margin-bottom: 12px;
}

.bar-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.85rem;
}

.bar-track {
  height: 10px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 0.8s ease;
}

.bar-fill.d { background: #c0392b; }
.bar-fill.i { background: #d4a017; }
.bar-fill.s { background: #27ae60; }
.bar-fill.c { background: #2980b9; }
</style>
