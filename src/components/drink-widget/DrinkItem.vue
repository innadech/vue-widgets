<script>
export default {
  props: ['drink'],

  emits: ['drink-deleted', 'drink-updated'],

  data() {
    return {
      localDrink: this.drink,
      isEditing: false,
    }
  },
}
</script>

<template>
  <article>
    <h3>{{ localDrink }}</h3>
    <input
      v-if="isEditing"
      ref="elInput"
      v-bind:value="localDrink"
      v-on:input="localDrink = $event.target.value"
    />
    <span v-else>{{ drink }}</span>

    <button v-on:click="isEditing = true">Edit</button>
    <button v-on:click="$emit('drink-deleted', drink)">Delete</button>

    <button v-on:click="$emit('drink-updated', localDrink)">Ok</button>
    <button v-on:click="localDrink = drink">Cancel</button>
  </article>
</template>
