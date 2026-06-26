<template>
  <div class="question-header">
    <div class="progress-info">
      <span>第 {{ current }} / {{ total }} 题</span>
      <span>进度 {{ percent }}%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  current: number
  total: number
  percent: number
}>()
</script>

<style scoped>
.question-header {
  margin-bottom: 24px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: #95a5a6;
}

.progress-bar {
  height: 4px;
  background: #eee;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #2c3e50;
  border-radius: 2px;
  transition: width 0.3s ease;
}
</style>
