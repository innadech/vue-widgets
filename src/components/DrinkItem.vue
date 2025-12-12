<script>
export default {
  props: ['drink'],

  emits: ['deleted-drink', 'edited-drink'],
  data() {
    return {
      newDrink: '',
    }
  },
}
</script>

<template>
  <article>
    <h2>{{ drink }}</h2>
    <input
      v-bind:value="drink"
      v-on:input="newDrink = $event.target.value"
      v-on:keyup.enter="$emit('edited-drink', newDrink)"
      ref="elInput"
      v-on:keyup.esc="$refs.elInput.blur()"
    />
    <button v-on:click="$emit('edited-drink', newDrink)">Edit</button>
    <button v-on:click="$emit('deleted-drink', drink)">Delete</button>
  </article>
</template>
