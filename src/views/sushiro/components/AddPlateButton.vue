<template>
  <div class="plate-card" style="padding: 0">
    <button class="add-custom-card" @click="$emit('add')">+</button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  add: []
}>()
</script>

<style scoped>
.plate-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 150px;
}

.add-custom-card {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  color: #ccc;
  font-size: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
</style>
