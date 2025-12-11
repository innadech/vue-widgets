<script>
export default {
  props: ['drink'],

  emits: ['drink-deleted', 'drink-edited'],
}
</script>

<template>
  <article>
    <span
      contenteditable="true"
      v-on:input="$emit('drink-edited', $event.target.innerText)"
    >
      {{ drink }}
    </span>
    <button type="button" v-on:click="$emit('drink-deleted', drink)">
      Delete
    </button>
  </article>
</template>
