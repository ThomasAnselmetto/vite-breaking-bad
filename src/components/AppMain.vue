<script>
import CharactersList from "./CharactersList.vue";
export default {
  components: { CharactersList },
};
</script>

<template>
  <select name="type-selector" id="">
    <option value=""></option>
  </select>

  <main class="container p-4">
    <CharactersList />
  </main>
</template>

<Style lang="scss" scoped></Style>
