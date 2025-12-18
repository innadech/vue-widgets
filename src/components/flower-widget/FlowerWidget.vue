<script>
import FlowerList from './FlowerList.vue'
import FlowerSubmitter from './FlowerSubmitter.vue'

export default {
  components: { FlowerSubmitter, FlowerList },

  data() {
    return {
      flowers: [],
    }
  },

  methods: {
    submit(flower) {
      if (!this.flowers.includes(flower)) this.flowers.push(flower)
    },
  },
}
</script>

<template>
  <div>
    <h2>{{ flowers }}</h2>
    <FlowerSubmitter v-on:flower-submitted="submit" />
    <FlowerList
      v-bind:flowers="flowers"
      v-on:flowers-updated="flowers = $event"
    />
  </div>
</template>
