<script>
export default {
  props: ['fruit'],

  emits: ['removed-fruit', 'edited-fruit'],
  data() {
    return {
      newFruit: '',
    }
  },
}
</script>

<template>
  <li class="completed">
    <h2>{{ fruit }}</h2>
    <input
      v-bind:value="fruit"
      v-on:input="newFruit = $event.target.value"
      v-on:keyup.enter="$emit('edited-fruit', newFruit)"
      ref="elInput"
      v-on:keyup.esc="$refs.elInput.blur()"
    />
    <button type="button" v-on:click="$emit('edited-fruit', newFruit)">
      Edit
    </button>

    <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton">
      Delete
    </button>
  </li>
</template>

<!-- <li class="completed">
    <input
      v-bind:value="fruit"
      v-on:input="$emit('edited-fruit', $event.target.value)"
    />
    <button type="button">Edit</button>

    <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton">
      Удалить
    </button>
  </li> -->
