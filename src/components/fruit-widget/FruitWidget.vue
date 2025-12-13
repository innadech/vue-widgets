<script>
import FruitSubmitter from './FruitSubmitter.vue'
import FruitList from './FruitList.vue'

export default {
  components: { FruitSubmitter, FruitList },

  data() {
    return {
      fruits: ['banana', 'orange', 'apple'],
    }
  },

  methods: {
    submit(fruit) {
      if (!this.fruits.includes(fruit)) this.fruits.push(fruit)
    },
  },
}
</script>

<template>
  <div>
    <h2>Fruits</h2>
    <h2>{{ fruits }}</h2>
    <FruitSubmitter v-on:fruit-submitted="submit" />
    <FruitList v-bind:fruits="fruits" v-on:fruits-updated="fruits = $event" />
  </div>
</template>
