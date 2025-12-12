<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruits-updated'],

  methods: {
    updateFruit(newFruit, oldFruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.map(f => (f === oldFruit ? newFruit : f))
      )
    },
    deleteFruit(fruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.filter(f => f !== fruit)
      )
    },
  },
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="fruit of fruits"
      v-bind:key="fruit"
      v-bind:fruit="fruit"
      v-on:fruit-updated="updateFruit($event, fruit)"
      v-on:fruit-deleted="deleteFruit"
    />
  </ul>
</template>
