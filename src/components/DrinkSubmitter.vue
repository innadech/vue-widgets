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
      v-on:keyup.enter="handleClickButton"
    />
    <button v-on:click="handleClickButton">Add Drink</button>
  </div>
</template>
