<script>
import FlowerItem from './FlowerItem.vue'
export default {
  components: { FlowerItem },

  props: ['flowers'],

  emit: ['flowers-updated'],

  methods: {
    updateFlower(newFlower, oldFlower) {
      this.$emit(
        'flowers-updated',
        this.flowers.map(f => (f === oldFlower ? newFlower : f))
      )
    },
    deleteFlower(flower) {
      this.$emit(
        'flowers-updated',
        this.flowers.filter(f => f !== flower)
      )
    },
  },
}
</script>

<template>
  <ul>
    <FlowerItem
      v-for="flower of flowers"
      v-bind:key="flower"
      v-bind:flower="flower"
      v-on:flower-deleted="deleteFlower($event)"
      v-on:flower-updated="updateFlower($event, flower)"
    />
  </ul>
</template>
