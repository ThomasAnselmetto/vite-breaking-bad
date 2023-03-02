<script>
import CharactersList from "./CharactersList.vue";
export default {
  components: { CharactersList },
  props: { characters: Array },
};
</script>

<template>
  <select class="form-select w-25 p-2 m-4" aria-label="Default select example ">
    <option selected>Open to Search</option>
    <option value="type-of"></option>
  </select>
  <main class="container p-5 border border-primary">
    <CharactersList :characters="characters" />
  </main>
</template>

<Style lang="scss" scoped></Style>
