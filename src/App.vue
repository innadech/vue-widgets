<script>
import FlowersList from './components/flowersList.vue'
import FlowerSubmitter from './components/FlowerSubmitter.vue'

export default {
  components: { FlowersList, FlowerSubmitter },

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
    <ol>
      <li>Orange</li>
    </ol>
  </div>
  <div>
    <h2>Drinks</h2>
    <section>
      <article>Water</article>
    </section>
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
