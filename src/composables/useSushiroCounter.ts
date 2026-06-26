import { reactive, ref, computed } from 'vue'
import type { Plate, CustomPlate } from '@/types/sushiro'

export function useSushiroCounter() {
  const plates = reactive<Plate[]>([
    { id: 1, name: '白碟', price: 8, color: 'white', count: 0 },
    { id: 2, name: '红碟', price: 10, color: 'deep-red', count: 0 },
    { id: 3, name: '银碟', price: 15, color: 'silver', count: 0 },
    { id: 4, name: '金碟', price: 20, color: 'gold', count: 0 },
    { id: 5, name: '黑碟', price: 28, color: 'deep-gray', count: 0 },
  ])

  const customPlates = reactive<CustomPlate[]>([])
  let customPlateIdCounter = 1

  const serviceFeeEnabled = ref(false)
  const serviceCount = ref(1)
  const birthdayDiscountEnabled = ref(false)

  function animatePlusOne(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement
    const plusOne = document.createElement('div')
    plusOne.textContent = '+1'
    plusOne.className = 'plus-one'

    const rect = target.getBoundingClientRect()
    plusOne.style.left = rect.width / 2 + 45 + 'px'
    plusOne.style.top = rect.height / 2 + 'px'

    target.appendChild(plusOne)
    setTimeout(() => plusOne.remove(), 1000)
  }

  function increasePlate(id: number, event?: MouseEvent) {
    const plate = plates.find(p => p.id === id)
    if (plate) {
      plate.count++
      if (event) animatePlusOne(event)
    }
  }

  function decreasePlate(id: number) {
    const plate = plates.find(p => p.id === id)
    if (plate && plate.count > 0) plate.count--
  }

  function addCustomPlate() {
    customPlates.push({ id: customPlateIdCounter++, price: 0, count: 1 })
  }

  function increaseCustomPlate(index: number) {
    customPlates[index].count++
  }

  function decreaseCustomPlate(index: number) {
    if (customPlates[index].count > 0) {
      customPlates[index].count--
      if (customPlates[index].count === 0) {
        customPlates.splice(index, 1)
      }
    }
  }

  function limitPriceInput(plate: CustomPlate) {
    if (plate.price > 999) plate.price = 999
  }

  function toggleServiceFee() {
    serviceFeeEnabled.value = !serviceFeeEnabled.value
  }

  function increaseServiceCount() {
    if (serviceCount.value < 9) serviceCount.value++
  }

  function decreaseServiceCount() {
    if (serviceCount.value > 1) serviceCount.value--
  }

  function toggleBirthdayDiscount() {
    birthdayDiscountEnabled.value = !birthdayDiscountEnabled.value
  }

  const fixedPlatesPrice = computed(() =>
    plates.reduce((total, plate) => total + plate.price * plate.count, 0)
  )

  const customPlatesPrice = computed(() =>
    customPlates.reduce((total, plate) => total + (plate.price || 0) * plate.count, 0)
  )

  const platesTotalPrice = computed(() => fixedPlatesPrice.value + customPlatesPrice.value)

  const serviceFee = computed(() => {
    if (!serviceFeeEnabled.value) return 0
    return serviceCount.value * 5
  })

  const totalPrice = computed(() => {
    let total = platesTotalPrice.value + serviceFee.value
    if (birthdayDiscountEnabled.value) total *= 0.88
    return total
  })

  return {
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
  }
}
