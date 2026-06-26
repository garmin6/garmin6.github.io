<template>
  <span v-if="variant === 'badge'" class="type-badge" :class="type.toLowerCase()">{{ type }}</span>
  <span v-else class="type-tag" :class="type.toLowerCase()">{{ type }}</span>
</template>

<script setup lang="ts">
import type { TypeKey } from '@/types/disc-test'

withDefaults(defineProps<{
  type: TypeKey
  variant?: 'badge' | 'tag'
}>(), {
  variant: 'badge',
})
</script>

<style scoped>
.type-badge {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  color: white;
}

.type-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  margin-right: 4px;
}

.type-badge.d, .type-tag.d { background: #c0392b; }
.type-badge.i, .type-tag.i { background: #d4a017; }
.type-badge.s, .type-tag.s { background: #27ae60; }
.type-badge.c, .type-tag.c { background: #2980b9; }
</style>
