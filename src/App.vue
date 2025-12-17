<script>
import FruitWidget from './components/fruit-widget/FruitWidget.vue'
import DrinkWidget from './components/drink-widget/DrinkWidget.vue'
import FlowerWidget from './components/flower-widget/FlowerWidget.vue'
import UiSelect from './UiSelect.vue'

export default {
  components: {
    FruitWidget,
    FlowerWidget,
    DrinkWidget,
    UiSelect,
  },
}
</script>

<template>
  <h1>APP WIDGETS</h1>
  <UiSelect v-on:country-updated="console.log($event)"></UiSelect>
  <!-- <FruitWidget />
  <FlowerWidget />
  <DrinkWidget /> -->
</template>
