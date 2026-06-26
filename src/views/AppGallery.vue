<template>
  <div class="gallery-page">
    <BackLink to="/" label="Home" />
    <h1>Apps</h1>
    <div class="app-grid">
      <AppCard
        icon="&#x1F9E0;"
        name="DISC Test"
        desc="DISC 行为模型测试，40 道题逐题作答，统计 D/I/S/C 分布并给出行为分析。"
        to="/app/disc-test"
      />
      <AppCard
        icon="&#x1F363;"
        name="Sushiro Counter"
        desc="寿司郎点餐计数器，支持多种碟子价格、服务费与折扣计算。"
        to="/app/sushiro"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackLink from '@/components/BackLink.vue'
import AppCard from '@/components/AppCard.vue'
</script>

<style scoped>
.gallery-page {
  padding: 5vh 10vw;
  color: #3b3c3d;
  background: #fafafa;
  min-height: 100vh;
}

h1 {
  font-size: 3em;
  font-weight: 500;
  margin: 20px 0 30px;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}
</style>
