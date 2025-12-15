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
  methods: {
    cancel() {
      this.localFlower = this.flower
      this.isEditing = false
    },
    ok() {
      this.$emit('flower-updated', this.localFlower)
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
  <li>
    <h3>{{ localFlower }}</h3>
    <input
      v-if="isEditing"
      ref="elInput"
      v-bind:value="localFlower"
      v-on:input="localFlower = $event.target.value"
      v-on:keypress.enter="ok"
      v-on:keydown.esc="cancel"
    />
    <span v-else>{{ flower }}</span>

    <button v-on:click="edit">Edit</button>
    <button v-on:click="$emit('flower-deleted', flower)">Delete</button>

    <button v-on:click="ok">Ok</button>
    <button v-on:click="cancel">Cancel</button>
  </li>
</template>
