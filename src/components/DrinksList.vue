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
      v-for="(drink, idx) of drinks"
      v-bind:key="idx"
      v-bind:drink="drink"
      v-on:edited-drink="updateDrink($event, drink)"
      v-on:deleted-drink="deleteDrink"
    />
  </section>
</template>
