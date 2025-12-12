<script>
export default {
  props: ['fruit'],

  emits: ['fruit-deleted', 'fruit-updated'],

  data() {
    return {
      newFruit: '',
    }
  },
}
</script>

<template>
  <li>
    <input
      ref="elInput"
      v-bind:value="fruit"
      v-on:input="newFruit = $event.target.value"
      v-on:keypress="$emit('fruit-updated', newFruit)"
      v-on:keypress.esc="$refs.elInput.blur()"
    />
    <button v-on:click="$emit('fruit-updated', newFruit)">Edit</button>
    <button v-on:click="$emit('fruit-deleted', fruit)">Delete</button>
  </li>
</template>
