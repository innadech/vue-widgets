<script>
export default {
  props: ['flower'],

  emits: ['flower-deleted', 'flower-edited'],
}
</script>

<template>
  <li>
    <span
      contenteditable="true"
      v-on:input="$emit('flower-edited', $event.target.innerText)"
    >
      {{ flower }}
    </span>
    <button
      type="button"
      class="btn btn-secondary btn-sm ms-3"
      v-on:click="$emit('flower-deleted', flower)"
    >
      Delete
    </button>
  </li>
</template>

<!-- contenteditable - это СТАТИСТИЧЕСКОЕ значение, часть HTML
  contenteditable="true" - нужно чтобы сделать любой HTML-элемент редактируемый прямо на странице как будто это <input></input> -->
