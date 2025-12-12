<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruits-updated', 'fruits-removed'],

  methods: {
    editFruit(newFruit, oldFruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.map(f => (f === oldFruit ? newFruit : f))
      )
    },
    removeFruit(fruit) {
      this.$emit(
        'fruits-removed',
        this.fruits.filter(f => f !== fruit)
      )
    },
  },
}
</script>

<template>
  <ol>
    <FruitItem
      v-for="(fruit, idx) of fruits"
      v-bind:key="idx"
      v-bind:fruit="fruit"
      v-on:edited-fruit="editFruit($event, fruit)"
      v-on:removed-fruit="removeFruit"
    />
  </ol>
</template>
