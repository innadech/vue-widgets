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

  methods: {
    cancel() {
      this.localFruit = this.fruit
      this.isEditing = false
    },
    ok() {
      $emit('fruit-updated', localFruit)
      this.isEditing = false
    },
  },
}
</script>

<template>
  <li>
    <input
      v-if="isEditing"
      ref="elInp"
      v-bind:value="localFruit"
      v-on:input="localFruit = $event.target.value"
      v-on:keypress.enter="$emit('fruit-updated', localFruit)"
      v-on:keydown.esc=";(localFruit = fruit), (isEditing = false)"
    />
    <span v-else>{{ fruit }}</span>

    <button v-on:click="isEditing = true">Edit</button>
    <button v-on:click="$emit('fruit-deleted', fruit)">Delete</button>

    <button v-on:click="$emit('fruit-updated', localFruit)">Ok</button>
    <button v-on:click="cancel">Cancel</button>
  </li>
</template>
