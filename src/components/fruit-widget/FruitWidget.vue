<script>
import FruitSubmitter from './FruitSubmitter.vue'
import FruitList from './FruitList.vue'

export default {
  components: { FruitSubmitter, FruitList },

  data() {
    return {
      fruits: [],
    }
  },
}
</script>

<template>
  <div>
    <h2>Fruits</h2>
    <h2>{{ fruits }}</h2>
    <FruitSubmitter v-on:fruit-submitted="fruits.push($event)" />
    <FruitList
      v-bind:fruits="fruits"
      v-on:fruits-updated="fruits = $event"
      v-on:fruits-removed="fruits = $event"
    />
  </div>
</template>
