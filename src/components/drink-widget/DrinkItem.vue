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
      this.isEditing = true
      this.$nextTick(() => this.$refs.elInput.focus())
    },
  },
}
</script>

<template>
  <article>
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

<style scoped>
input {
  width: 100px;
  margin: 0;
  padding: 0;
  border: 0;
}
span {
  display: inline-block;
  width: 100px;
}
</style>
