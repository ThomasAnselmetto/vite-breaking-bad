<script>
import CharactersList from "./CharactersList.vue";
export default {
  components: { CharactersList },
  props: { characters: Array },
};
</script>

<template>
  <main class="container p-5 border border-primary">
    <CharactersList :characters="characters" />
  </main>
</template>

<Style lang="scss" scoped></Style>
