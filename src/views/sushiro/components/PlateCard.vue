<template>
  <div class="plate-card">
    <PlateDisc :color="plate.color" :price="plate.price" @click="$emit('plateClick', $event)" />
    <div class="plate-info">
      <CounterControl :count="plate.count" @increase="$emit('increase')" @decrease="$emit('decrease')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Plate } from '@/types/sushiro'
import PlateDisc from './PlateDisc.vue'
import CounterControl from './CounterControl.vue'

defineProps<{
  plate: Plate
}>()

defineEmits<{
  increase: []
  decrease: []
  plateClick: [event: MouseEvent]
}>()
</script>

<style scoped>
.plate-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 150px;
}

.plate-info {
  text-align: center;
  width: 100%;
}

@media (max-width: 480px) {
  .plate-card { padding: 12px; }
}
</style>
