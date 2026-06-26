<template>
  <div class="counter">
    <button class="counter-btn" :style="count <= 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}" @click="$emit('decrease')">-</button>
    <div class="counter-value">{{ count }}</div>
    <button class="counter-btn" @click="$emit('increase')">+</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
}>()

defineEmits<{
  increase: []
  decrease: []
}>()
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
}

.counter-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #f0f0f0;
  color: #555;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.counter-btn:hover { background: #e0e0e0; }
.counter-btn:active { transform: scale(0.95); }

.counter-value {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 20px;
  min-width: 50px;
  text-align: center;
  color: #d32f2f;
}

@media (max-width: 768px) {
  .counter-value { font-size: 1.6rem; }
  .counter-btn { width: 36px; height: 36px; font-size: 1.4rem; }
}

@media (max-width: 480px) {
  .counter-value { font-size: 1.4rem; margin: 0; }
  .counter-btn { width: 32px; height: 32px; font-size: 1.2rem; }
}

@media (max-width: 360px) {
  .counter-btn { width: 28px; height: 28px; font-size: 1rem; }
  .counter-value { font-size: 1.2rem; margin: 0 10px; }
}
</style>
