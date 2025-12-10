<script>
export default {
  data() {
    return {
      flowers: [],
      fruits: [],
      drinks: [],
    }
  },
}
/**
 * реализовать логику:
 *  добавление элемента
 *  удаление элемента
 *  редактирование элемента
 *  просмор списка
 *
 * нарезаем на компоненты
 */
</script>

<template>
  <h1>APP WIDGETS</h1>
  <div>
    <h2>Flowers</h2>
    <ul>
      <li>Rose</li>
    </ul>
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
