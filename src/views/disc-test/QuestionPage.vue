<template>
  <div class="card">
    <ProgressBar :current="currentIndex + 1" :total="questions.length" :percent="progressPercent" />

    <h2 class="question-title"><span>第 {{ currentIndex + 1 }} 题</span>请选择最符合你的一项</h2>

    <div class="options">
      <OptionButton
        v-for="(option, idx) in currentQuestion.options"
        :key="idx"
        :index="idx"
        :text="option.text"
        :selected="answers[currentIndex] === idx"
        @select="(idx: number) => $emit('selectOption', idx)"
      />
    </div>

    <div class="nav-buttons">
      <button class="btn btn-secondary" :disabled="currentIndex === 0" @click="$emit('prev')">上一题</button>
      <button class="btn btn-primary" :disabled="answers[currentIndex] === null" @click="$emit('next')">
        {{ isLastQuestion ? '查看结果' : '下一题' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Question } from '@/types/disc-test'
import ProgressBar from './components/ProgressBar.vue'
import OptionButton from './components/OptionButton.vue'

defineProps<{
  currentIndex: number
  currentQuestion: Question
  answers: (number | null)[]
  progressPercent: number
  isLastQuestion: boolean
  questions: Question[]
}>()

defineEmits<{
  selectOption: [index: number]
  next: []
  prev: []
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

.question-title {
  font-size: 1.2rem;
  margin-bottom: 24px;
  color: #1a1a2e;
}

.question-title span {
  color: #95a5a6;
  font-weight: 500;
  margin-right: 6px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  gap: 12px;
}

.nav-buttons .btn {
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

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .card {
    padding: 20px 16px;
    border-radius: 4px;
  }

  .question-title {
    font-size: 1.1rem;
  }
}
</style>
