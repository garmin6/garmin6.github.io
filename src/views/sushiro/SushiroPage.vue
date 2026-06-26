<template>
  <div class="sushiro-wrapper">
    <div class="sushiro-page">
      <BackLink to="/app" label="Apps" />
      <h1 class="page-title">SUSHIRO</h1>

      <div class="plates-grid">
      <PlateCard
        v-for="plate in plates"
        :key="plate.id"
        :plate="plate"
        @increase="increasePlate(plate.id)"
        @decrease="decreasePlate(plate.id)"
        @plateClick="(e: MouseEvent) => increasePlate(plate.id, e)"
      />

      <CustomPlateCard
        v-for="(cp, index) in customPlates"
        :key="cp.id"
        :plate="cp"
        @increase="increaseCustomPlate(index)"
        @decrease="decreaseCustomPlate(index)"
        @update:price="(v: string) => updateCustomPrice(index, v)"
      />

      <AddPlateButton @add="addCustomPlate" />
    </div>

      <TotalBar
        :totalPrice="totalPrice"
        :serviceFeeEnabled="serviceFeeEnabled"
        :serviceCount="serviceCount"
        :birthdayDiscountEnabled="birthdayDiscountEnabled"
        @toggleService="toggleServiceFee"
        @increaseService="increaseServiceCount"
        @decreaseService="decreaseServiceCount"
        @toggleBirthday="toggleBirthdayDiscount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackLink from '@/components/BackLink.vue'
import PlateCard from './components/PlateCard.vue'
import CustomPlateCard from './components/CustomPlateCard.vue'
import AddPlateButton from './components/AddPlateButton.vue'
import TotalBar from './components/TotalBar.vue'
import { useSushiroCounter } from '@/composables/useSushiroCounter'

const {
  plates,
  customPlates,
  serviceFeeEnabled,
  serviceCount,
  birthdayDiscountEnabled,
  increasePlate,
  decreasePlate,
  addCustomPlate,
  increaseCustomPlate,
  decreaseCustomPlate,
  limitPriceInput,
  toggleServiceFee,
  increaseServiceCount,
  decreaseServiceCount,
  toggleBirthdayDiscount,
  totalPrice,
} = useSushiroCounter()

function updateCustomPrice(index: number, value: string) {
  const num = Number(value)
  customPlates[index].price = num
  limitPriceInput(customPlates[index])
}
</script>

<style scoped>
.sushiro-wrapper {
  background: #f9f6f4;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  -webkit-tap-highlight-color: transparent;
}

.sushiro-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 12px;
}

.page-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #b52224;
  font-family: Georgia, 'Times New Roman', serif;
  margin-bottom: 20px;
}

.plates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 4px 4px 4px;
  max-height: calc(100vh - 230px);
  overflow-y: auto;
  scrollbar-width: none;
}

@media (min-width: 768px) {
  .plates-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 480px) {
  .plates-grid { gap: 12px; }
}

@media (max-width: 360px) {
  .plates-grid { gap: 10px; }
}
</style>

<style>
.plus-one {
  position: absolute;
  color: #b52224;
  font-size: 1.2rem;
  font-weight: bold;
  pointer-events: none;
  animation: plusOneAnimation 1s ease-out forwards;
}

@keyframes plusOneAnimation {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-50px); opacity: 0; }
}
</style>
