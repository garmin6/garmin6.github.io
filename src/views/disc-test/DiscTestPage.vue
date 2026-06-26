<template>
  <div class="container">
    <BackLink to="/app" label="Apps" />

    <StartPage v-if="page === 'start'" @start="startTest" />

    <QuestionPage
      v-else-if="page === 'question'"
      :currentIndex="currentIndex"
      :currentQuestion="currentQuestion"
      :answers="answers"
      :progressPercent="progressPercent"
      :isLastQuestion="isLastQuestion"
      :questions="questions"
      @selectOption="selectOption"
      @next="nextQuestion"
      @prev="prevQuestion"
    />

    <ResultPage
      v-else-if="page === 'result'"
      :scoreList="scoreList"
      :dominantTypes="dominantTypes"
      :dominantTypesLabel="dominantTypesLabel"
      :coreTraits="coreTraits"
      :developmentTips="developmentTips"
      :typeInfo="typeInfo"
      @restart="restartTest"
      @share="shareResult"
    />
  </div>
</template>

<script setup lang="ts">
import BackLink from '@/components/BackLink.vue'
import StartPage from './StartPage.vue'
import QuestionPage from './QuestionPage.vue'
import ResultPage from './ResultPage.vue'
import { useDiscTest } from '@/composables/useDiscTest'

const {
  page,
  currentIndex,
  answers,
  questions,
  currentQuestion,
  isLastQuestion,
  progressPercent,
  scoreList,
  dominantTypes,
  dominantTypesLabel,
  coreTraits,
  developmentTips,
  typeInfo,
  startTest,
  selectOption,
  nextQuestion,
  prevQuestion,
  restartTest,
  shareResult,
} = useDiscTest()
</script>

<style scoped>
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 20px 16px 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #fff;
  color: #2c3e50;
  line-height: 1.6;
  -webkit-tap-highlight-color: transparent;
}

@media (max-width: 480px) {
  .container {
    padding: 16px 10px 32px;
  }
}
</style>
