<script>
export default {
  emits: ['fruit-submitted'],

  data() {
    return {
      fruit: '',
    }
  },

  methods: {
    handleClickButton() {
      if (this.fruit !== '') {
        this.$emit('fruit-submitted', this.fruit.toLowerCase())
        this.fruit = ''
      }
      this.$refs.elInput.focus()
    },
  },
}
</script>

<template>
  <div>
    <input
      ref="elInput"
      type="text"
      v-bind:value="fruit"
      v-on:input="fruit = $event.target.value"
      v-on:keypress.enter="handleClickButton"
      v-on:keydown.esc="fruit = ''"
    />
    <button v-on:click="handleClickButton">Add fruit</button>
    <button v-on:click="fruit = ''">Cancel</button>
  </div>
</template>
