<script>
import CharactersList from "./CharactersList.vue";
export default {
  components: { CharactersList },
};
</script>

<template>
  <select class="form-select w-25 p-2 m-4" aria-label="Default select example ">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <main class="container p-4">
    <CharactersList />
  </main>
</template>

<Style lang="scss" scoped></Style>
