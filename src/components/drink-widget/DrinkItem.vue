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
  methods: {
    cancel() {
      this.localDrink = this.drink
      this.isEditing = false
    },
    ok() {
      this.$emit('drink-updated', this.localDrink)
      this.isEditing = false
    },
    edit() {
      this.$nextTick(() => this.$refs.elInput.focus())
      this.isEditing = true
    },
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
      v-on:keypress.enter="ok"
      v-on:keydown.esc="cancel"
    />
    <span v-else>{{ drink }}</span>

    <button v-on:click="edit">Edit</button>
    <button v-on:click="$emit('drink-deleted', drink)">Delete</button>

    <button v-on:click="ok">Ok</button>
    <button v-on:click="cancel">Cancel</button>
  </article>
</template>
