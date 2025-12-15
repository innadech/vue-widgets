<script>
import DrinkItem from './DrinkItem.vue'

export default {
  components: { DrinkItem },

  props: ['drinks'],

  emit: ['drinks-updated'],

  methods: {
    deleteDrink(drink) {
      this.$emit(
        'drinks-updated',
        this.drinks.filter(d => d !== drink)
      )
    },

    updateDrink(newDrink, oldDrink) {
      this.$emit(
        'drinks-updated',
        this.drinks.map(d => (d === oldDrink ? newDrink : d))
      )
    },
  },
}
</script>

<template>
  <section>
    <DrinkItem
      v-for="drink of drinks"
      v-bind:key="drink"
      v-bind:drink="drink"
      v-on:drink-updated="updateDrink($event, drink)"
      v-on:drink-deleted="deleteDrink"
    />
  </section>
</template>
