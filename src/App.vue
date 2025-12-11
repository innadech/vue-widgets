<script>
import FlowersList from './components/flowersList.vue'
import FlowerSubmitter from './components/FlowerSubmitter.vue'
import FruitsList from './components/FruitsList.vue'
import FruitSubmitter from './components/FruitSubmitter.vue'
import DrinksList from './components/DrinksList.vue'
import DrinkSubmitter from './components/DrinkSubmitter.vue'

export default {
  components: {
    FlowersList,
    FlowerSubmitter,
    FruitSubmitter,
    FruitsList,
    DrinksList,
    DrinkSubmitter,
  },

  data() {
    return {
      flowers: [],
      fruits: [],
      drinks: [],
    }
  },
}
</script>

<template>
  <h1>APP WIDGETS</h1>
  <div>
    <h2>{{ flowers }}</h2>
    <h2>{{ fruits }}</h2>
    <h2>{{ drinks }}</h2>
    <h2>Flowers</h2>
    <FlowerSubmitter v-on:flower-submitted="flowers.push($event)" />
    <FlowersList
      v-bind:flowers="flowers"
      v-on:flower-updated="flowers = $event"
      v-on:flowers-removed="flowers = $event"
    />
  </div>
  <div>
    <h2>Fruits</h2>
    <FruitSubmitter v-on:fruit-submitted="fruits.push($event)" />
    <FruitsList
      v-bind:fruits="fruits"
      v-on:fruits-updated="fruits = $event"
      v-on:fruits-removed="fruits = $event"
    />
  </div>
  <div>
    <h2>Drinks</h2>
    <DrinkSubmitter v-on:drink-submitted="drinks.push($event)" />
    <DrinksList
      v-bind:drinks="drinks"
      v-on:drink-updated="drinks = $event"
      v-on:drinks-removed="drinks = $event"
    />
  </div>
</template>

<!-- /**
 * реализовать логику:
 *  добавление элемента
 *  удаление элемента
 *  редактирование элемента
 *  просмор списка
 *
 * нарезаем на компоненты
 */ -->
<!-- <ol>
   <li>Orange</li>
 </ol> -->
<!-- <section>
      <article>Water</article>
 </section> -->
