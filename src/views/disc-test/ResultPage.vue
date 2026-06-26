<template>
  <div class="card result-page">
    <div class="result-header">
      <h2>你的 DISC 测试结果</h2>
      <p>测试完成，以下是基于你选择的分析</p>
      <div class="dominant-badge">主导类型：{{ dominantTypesLabel }}</div>
    </div>

    <ScoreBoard :scoreList="scoreList" />
    <BarChart :scoreList="scoreList" />

    <div class="analysis-section">
      <h3>行为模型分析</h3>
      <p><strong>你的核心特质：</strong>{{ coreTraits }}</p>
      <div v-for="t in dominantTypes" :key="t">
        <p><span class="type-tag" :class="t.toLowerCase()">{{ t }}</span><strong>{{ typeInfo[t].name }}</strong></p>
        <p>{{ typeInfo[t].desc }}</p>
        <ul>
          <li v-for="(trait, idx) in typeInfo[t].traits" :key="idx">{{ trait }}</li>
        </ul>
      </div>
    </div>

    <div class="analysis-section">
      <h3>发展建议</h3>
      <ul>
        <li v-for="(tip, idx) in developmentTips" :key="idx">{{ tip }}</li>
      </ul>
    </div>

    <div class="result-actions">
      <button class="btn btn-secondary" @click="$emit('restart')">重新测试</button>
      <button class="btn btn-primary" @click="$emit('share')">分享结果</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TypeKey, ScoreItem, TypeInfo } from '@/types/disc-test'
import ScoreBoard from './components/ScoreBoard.vue'
import BarChart from './components/BarChart.vue'

defineProps<{
  scoreList: ScoreItem[]
  dominantTypes: TypeKey[]
  dominantTypesLabel: string
  coreTraits: string
  developmentTips: string[]
  typeInfo: Record<TypeKey, TypeInfo>
}>()

defineEmits<{
  restart: []
  share: []
}>()
</script>

<style scoped>
.card {
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 28px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.result-page {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.result-header {
  text-align: center;
  margin-bottom: 28px;
}

.result-header h2 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.result-header p {
  color: #95a5a6;
  font-size: 0.95rem;
}

.dominant-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2c3e50;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 14px 0;
}

.type-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  margin-right: 4px;
}

.type-tag.d { background: #c0392b; }
.type-tag.i { background: #d4a017; }
.type-tag.s { background: #27ae60; }
.type-tag.c { background: #2980b9; }

.analysis-section {
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 16px;
}

.analysis-section h3 {
  font-size: 1.05rem;
  margin-bottom: 12px;
  color: #1a1a2e;
  display: flex;
  align-items: center;
  gap: 6px;
}

.analysis-section p {
  font-size: 0.95rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.analysis-section ul {
  padding-left: 20px;
  color: #2c3e50;
  font-size: 0.95rem;
}

.analysis-section li {
  margin-bottom: 5px;
}

.result-actions {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.result-actions .btn {
  flex: 1;
}

.btn {
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #fff;
  color: #2c3e50;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  background: #2c3e50;
  color: #fff;
  border-color: #2c3e50;
}

.btn-primary:hover {
  background: #3d566e;
}

.btn-secondary {
  background: #fff;
  color: #555;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

@media (max-width: 480px) {
  .card {
    padding: 20px 16px;
    border-radius: 4px;
  }
}
</style>
