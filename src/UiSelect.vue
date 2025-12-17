<script>
export default {
  emits: ['country-updated'],

  data() {
    return {
      availableCountries: ['France', 'Germany', 'Spain', 'Australia', 'China'],
      selectedCountry: 'France',
    }
  },
}
</script>

<template>
  <div>
    <h1>{{ selectedCountry }}</h1>
    <select
      v-bind:value="selectedCountry"
      v-on:change="selectedCountry = $event.target.value"
    >
      <option v-for="ac of availableCountries" :key="ac">{{ ac }}</option>
    </select>
    <button v-on:click="selectedCountry = 'Australia'">
      PUSH ME to Australia
    </button>
    <button v-on:click="$emit('country-updated', selectedCountry)">
      CONFIRM!
    </button>
  </div>
</template>
