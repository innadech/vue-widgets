<script>
export default {
  emits: ['flower-submitted'],

  data() {
    return {
      flower: '',
    }
  },

  methods: {
    handleClickButton() {
      if (this.flower !== '') {
        this.$emit('flower-submitted', this.flower)
        this.flower = ''
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
      v-bind:value="flower"
      v-on:input="flower = $event.target.value"
      v-on:keyup.enter="handleClickButton"
    />
    <button v-on:click="handleClickButton">Add flower</button>
  </div>
</template>
