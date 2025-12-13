<script>
import FlowerItem from './FlowerItem.vue'
export default {
  components: { FlowerItem },

  props: ['flowers'],

  emit: ['flower-updated'],

  methods: {
    deleteFlower(flower) {
      this.$emit(
        'flowers-updated',
        this.flowers.filter(f => f !== flower)
      )
    },

    updateFlower(newFlower, oldFlower) {
      this.$emit(
        'flower-updated',
        this.flowers.map(f => (f === oldFlower ? newFlower : f))
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
      v-on:flower-edited="updateFlower($event, flower)"
    />
  </ul>
</template>
