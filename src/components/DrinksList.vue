<script>
import DrinkItem from './DrinkItem.vue'
export default {
  components: { DrinkItem },

  props: ['drinks'],

  emit: ['drinks-removed', 'drink-updated'],

  methods: {
    deleteDrink(drink) {
      this.$emit(
        'drinks-removed',
        this.drinks.filter(d => d !== drink)
      )
    },

    updateDrink(newDrink, oldDrink) {
      this.$emit(
        'drink-updated',
        this.drinks.map(d => (d === oldDrink ? newDrink : d))
      )
    },
  },
}
</script>

<template>
  <section>
    <DrinkItem
      v-for="drink in drinks"
      v-bind:key="drink"
      v-bind:drink="drink"
      v-on:drink-edited="updateDrink($event, drink)"
      v-on:drink-deleted="deleteDrink"
    />
  </section>
</template>
