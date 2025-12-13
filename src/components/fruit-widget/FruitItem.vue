<script>
export default {
  props: ['fruit'],

  emits: ['fruit-deleted', 'fruit-updated'],

  data() {
    return {
      localFruit: this.fruit,
      isEditing: false,
    }
  },

  created() {
    console.log('FruitItem created with', this.fruit)
  },
}
// v-on:keypress="$emit('fruit-updated', localFruit)" тоже что кнопка Ok
// v-on:keypress.esc=""
</script>

<template>
  <li>
    <h3>{{ localFruit }}</h3>
    <input
      v-if="isEditing"
      ref="elInput"
      v-bind:value="localFruit"
      v-on:input="localFruit = $event.target.value"
    />
    <span v-else>{{ fruit }}</span>

    <button v-on:click="isEditing = true">Edit</button>
    <button v-on:click="$emit('fruit-deleted', fruit)">Delete</button>

    <button v-on:click="$emit('fruit-updated', localFruit)">Ok</button>
    <button v-on:click="localFruit = fruit">Cancel</button>
  </li>
</template>
