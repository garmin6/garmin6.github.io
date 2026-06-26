<template>
  <div class="card start-page">
    <h1>DISC 行为模型测试</h1>
    <p class="subtitle">40 道题 · 发现你的行为风格</p>

    <div class="type-badges">
      <TypeBadge type="D" />
      <TypeBadge type="I" />
      <TypeBadge type="S" />
      <TypeBadge type="C" />
    </div>

    <div class="instructions">
      <h3>测试说明</h3>
      <p>在每道题的四个选项中，只选择一个最符合你自己的描述。</p>
      <p>请按第一印象最快地选择，如果不能确定，可回忆童年时的情况，或参考最熟悉的人对你的评价。</p>
      <p>一共 40 题，不能遗漏。</p>
    </div>

    <button class="btn btn-primary" @click="$emit('start')">开始测试</button>
  </div>
</template>

<script setup lang="ts">
import TypeBadge from './components/TypeBadge.vue'

defineEmits<{
  start: []
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

.start-page {
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 40px 24px;
}

.start-page h1 {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #1a1a2e;
}

.subtitle {
  color: #95a5a6;
  font-size: 1rem;
  margin-bottom: 32px;
}

.type-badges {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.instructions {
  text-align: left;
  background: #fafafa;
  border: 1px solid #dde1e6;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 32px;
  max-width: 480px;
}

.instructions h3 {
  font-size: 1rem;
  margin-bottom: 12px;
  color: #1a1a2e;
}

.instructions p {
  font-size: 0.95rem;
  color: #95a5a6;
  margin-bottom: 8px;
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

@media (max-width: 480px) {
  .card {
    padding: 20px 16px;
    border-radius: 4px;
  }

  .start-page {
    padding: 32px 16px;
  }

  .start-page h1 {
    font-size: 1.6rem;
  }
}
</style>
