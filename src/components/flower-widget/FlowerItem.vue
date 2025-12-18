<script>
export default {
  props: ['flower'],

  emits: ['flower-deleted', 'flower-updated'],

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
      this.isEditing = true
      this.$nextTick(() => {
        if (this.$refs.elInput) {
          this.$refs.elInput.focus()
        }
      })
    },
  },
}
</script>

<template>
  <li>
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
