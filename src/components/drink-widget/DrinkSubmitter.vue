<script>
export default {
  emits: ['drink-submitted'],

  data() {
    return {
      drink: '',
    }
  },

  methods: {
    handleClickButton() {
      if (this.drink !== '') {
        this.$emit('drink-submitted', this.drink)
        this.drink = ''
      }
      this.$refs.elInput.focus()
    },
  },
}
</script>

<template>
  <div>
    <input
      type="text"
      ref="elInput"
      v-bind:value="drink"
      v-on:input="drink = $event.target.value"
      v-on:keypress.enter="handleClickButton"
      v-on:keydown.esc="drink = ''"
    />
    <button v-on:click="handleClickButton">Add Drink</button>
  </div>
</template>
