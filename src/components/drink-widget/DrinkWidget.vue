<script>
import DrinkList from './DrinkList.vue'
import DrinkSubmitter from './DrinkSubmitter.vue'

export default {
  components: { DrinkSubmitter, DrinkList },

  data() {
    return {
      drinks: [],
    }
  },

  methods: {
    submit(drink) {
      if (!this.drinks.includes(drink)) this.drinks.push(drink)
    },
  },
}
</script>

<template>
  <div>
    <h2>Drinks</h2>
    <h2>{{ drinks }}</h2>
    <DrinkSubmitter v-on:drink-submitted="submit" />
    <DrinkList v-bind:drinks="drinks" v-on:drinks-updated="drinks = $event" />
  </div>
</template>
