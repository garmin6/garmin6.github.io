<template>
  <div class="total-section">
    <div class="total-header">
      <div class="total-title">总价：</div>
      <div class="total-amount">¥{{ totalPrice }}</div>
    </div>
    <div class="options-section">
      <div class="option-capsule" :class="{ active: serviceFeeEnabled }" @click="$emit('toggleService')">
        <span class="option-label">服务费</span>
        <div class="service-counter">
          <button class="service-counter-btn" @click.stop="$emit('decreaseService')">-</button>
          <span class="service-counter-value">{{ serviceCount }}</span>
          <button class="service-counter-btn" @click.stop="$emit('increaseService')">+</button>
        </div>
      </div>
      <div class="option-capsule" :class="{ active: birthdayDiscountEnabled }" @click="$emit('toggleBirthday')">
        <span class="option-label">生日券88折</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  totalPrice: number
  serviceFeeEnabled: boolean
  serviceCount: number
  birthdayDiscountEnabled: boolean
}>()

defineEmits<{
  toggleService: []
  increaseService: []
  decreaseService: []
  toggleBirthday: []
}>()
</script>

<style scoped>
.total-section {
  background: white;
  border-top: 2px solid #b52224;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  width: calc(100% - 40px);
  z-index: 100;
}

.total-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.total-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.total-amount {
  font-size: 2.5rem;
  font-weight: bold;
  color: #d32f2f;
}

.options-section {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.option-capsule {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.option-capsule.active {
  background: #ffebee;
  border-color: #d32f2f;
  color: #d32f2f;
}

.option-capsule.active:hover {
  background: #ffcdd2;
}

.option-label {
  font-size: 0.9rem;
  font-weight: 500;
}

.service-counter {
  display: flex;
  align-items: center;
  gap: 2px;
}

.service-counter-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: white;
  color: #555;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.service-counter-btn:active {
  transform: scale(0.95);
}

.service-counter-value {
  font-size: 1rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .total-amount { font-size: 2rem; }
}

@media (max-width: 360px) {
  .total-amount { font-size: 1.8rem; }
  .options-section { flex-direction: column; align-items: stretch; }
  .option-capsule { justify-content: center; }
}
</style>
