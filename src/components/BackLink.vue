<template>
  <router-link :to="to" class="back-link">
    &#8592; {{ label }}
  </router-link>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  to: string
  label?: string
}>(), {
  label: 'Home',
})
</script>

<style scoped>
.back-link {
  font-size: 14px;
  color: #999;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #555;
}
</style>
