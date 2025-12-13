<script>
export default {
  props: ['flower'],

  emits: ['fruit-deleted', 'flower-updated'],

  data() {
    return {
      localFlower: this.flower,
      isEditing: false,
    }
  },
}
</script>

<template>
  <li>
    <h3>{{ localFlower }}</h3>
    <input
      v-if="isEditing"
      ref="elInput"
      v-bind:value="localFlower"
      v-on:input="localFlower = $event.target.value"
    />
    <span v-else>{{ flower }}</span>

    <button v-on:click="isEditing = true">Edit</button>
    <button v-on:click="$emit('flower-deleted', flower)">Delete</button>

    <button v-on:click="$emit('flower-updated', localFlower)">Ok</button>
    <button v-on:click="localFlower = flower">Cancel</button>
  </li>
</template>
