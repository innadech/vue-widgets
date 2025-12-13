<script>
import FruitWidget from './components/fruit-widget/FruitWidget.vue'
import DrinkWidget from './components/drink-widget/DrinkWidget.vue'
import FlowerWidget from './components/flower-widget/FlowerWidget.vue'

export default {
  components: {
    FruitWidget,
    FlowerWidget,
    DrinkWidget,
  },
}
</script>

<template>
  <h1>APP WIDGETS</h1>

  <FruitWidget />
  <FlowerWidget />
  <DrinkWidget />
</template>
