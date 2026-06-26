<template>
  <router-link :to="to" class="app-card">
    <div class="app-icon">{{ icon }}</div>
    <div class="app-name">{{ name }}</div>
    <div class="app-desc">{{ desc }}</div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  name: string
  desc: string
  to: string
}>()
</script>

<style scoped>
.app-card {
  background: #fff;
  border-radius: 12px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.app-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.app-icon {
  font-size: 2.5em;
  line-height: 1;
}

.app-name {
  font-size: 1.3em;
  font-weight: 600;
  color: #121314;
}

.app-desc {
  font-size: 0.95em;
  color: #777;
  line-height: 1.5;
}
</style>
