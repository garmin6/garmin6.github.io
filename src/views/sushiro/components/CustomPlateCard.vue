<template>
  <div class="plate-card">
    <div class="plate color-custom">
      <div class="price-input-wrapper">
        <span class="price-symbol">¥</span>
        <input
          type="number"
          :value="plate.price"
          min="0"
          max="999"
          placeholder="价格"
          class="plate-price-input"
          @input="$emit('update:price', ($event.target as HTMLInputElement).value)"
        >
      </div>
    </div>
    <div class="plate-info">
      <CounterControl :count="plate.count" @increase="$emit('increase')" @decrease="$emit('decrease')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CustomPlate } from '@/types/sushiro'
import CounterControl from './CounterControl.vue'

defineProps<{
  plate: CustomPlate
}>()

defineEmits<{
  increase: []
  decrease: []
  'update:price': [value: string]
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

.plate {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  position: relative;
  border: 5px solid white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

.color-custom { background: linear-gradient(135deg, #6dc370, #419345); }

.price-input-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}

.price-symbol {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}

.plate-price-input {
  width: 40px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  background: transparent;
  color: white;
  outline: none;
}

.plate-price-input::placeholder {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
}

.plate-price-input:focus { border-color: white; }

.plate-price-input::-webkit-outer-spin-button,
.plate-price-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.plate-info {
  text-align: center;
  width: 100%;
}

@media (max-width: 768px) {
  .plate { width: 100px; height: 100px; }
}

@media (max-width: 480px) {
  .plate-card { padding: 12px; }
  .plate { width: 95px; height: 95px; }
}

@media (max-width: 360px) {
  .plate { width: 75px; height: 75px; }
}
</style>
