<template>
  <div class="plate" :class="'color-' + color" @click="$emit('click', $event)">
    <div class="plate-price">¥{{ price }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  price: number
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<style scoped>
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
  cursor: pointer;
  transition: transform 0.2s ease;
}

.plate:active {
  transform: translateY(-5px);
}

.plate-price {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.color-white { background: linear-gradient(135deg, #f8f8f8, #f0f0f0); }
.color-white .plate-price { color: #333; text-shadow: 1px 1px 2px rgba(255,255,255,0.5); }
.color-deep-red { background: linear-gradient(135deg, #c81e1e, #7a0303); }
.color-silver { background: linear-gradient(135deg, #eaeaea, #aaa); }
.color-gold { background: linear-gradient(135deg, #ffd700, #d5a018); }
.color-deep-gray { background: linear-gradient(135deg, #474f53, #272c2e); }
.color-custom { background: linear-gradient(135deg, #6dc370, #419345); }

@media (max-width: 768px) {
  .plate { width: 100px; height: 100px; }
  .plate-price { font-size: 1.3rem; }
}

@media (max-width: 480px) {
  .plate { width: 95px; height: 95px; }
}

@media (max-width: 360px) {
  .plate { width: 75px; height: 75px; }
  .plate-price { font-size: 1.1rem; }
}
</style>
