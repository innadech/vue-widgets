<script>
import FlowersList from './components/FlowersList.vue'
import FlowerSubmitter from './components/FlowerSubmitter.vue'
import DrinksList from './components/DrinksList.vue'
import DrinkSubmitter from './components/DrinkSubmitter.vue'
import FruitWidget from './components/fruit-widget/FruitWidget.vue'

export default {
  components: {
    FruitWidget,
    FlowersList,
    FlowerSubmitter,
    DrinksList,
    DrinkSubmitter,
  },

  data() {
    return {
      flowers: [],
      drinks: [],
    }
  },
}
</script>

<template>
  <h1>APP WIDGETS</h1>

  <FruitWidget />

  <!-- <div>
    <h2>{{ flowers }}</h2>
    
    <h2>{{ drinks }}</h2>
    <h2>Flowers</h2>
    <FlowerSubmitter v-on:flower-submitted="flowers.push($event)" />
    <FlowersList
      v-bind:flowers="flowers"
      v-on:flower-updated="flowers = $event"
      v-on:flowers-removed="flowers = $event"
    />
  </div> -->
  <!-- <div>
    <h2>Drinks</h2>
    <DrinkSubmitter v-on:drink-submitted="drinks.push($event)" />
    <DrinksList
      v-bind:drinks="drinks"
      v-on:drink-updated="drinks = $event"
      v-on:drinks-removed="drinks = $event"
    />
  </div> -->
</template>
