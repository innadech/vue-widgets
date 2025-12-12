<script>
export default {
  props: ['flower'],

  emits: ['flower-deleted', 'flower-edited'],

  data() {
    return {
      newFlower: '',
    }
  },
}
</script>

<template>
  <li>
    <h2>{{ flower }}</h2>
    <input
      v-bind:value="flower"
      v-on:input="newFlower = $event.target.value"
      v-on:keyup.enter="$emit('flower-edited', newFlower)"
      ref="elInput"
      v-on:keyup.esc="$refs.elInput.blur()"
    />
    <button v-on:click="$emit('flower-edited', newFlower)">Edit</button>
    <button v-on:click="$emit('flower-deleted', flower)">Delete</button>
  </li>
</template>
