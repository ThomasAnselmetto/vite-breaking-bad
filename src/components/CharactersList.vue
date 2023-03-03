<script>
import CharacterCard from "./CharacterCard.vue";
import BaseSearch from "./BaseSearch.vue";
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  props: { characters: Array },
  methods: {},
  components: {
    CharacterCard,
    BaseSearch,
  },
};
</script>

<template>
  <BaseSearch />
  <div
    v-if="!store.IsPageLoading"
    class="row row-cols-2 row-cols-md-3 row-cols-lg-4"
  >
    <CharacterCard
      v-for="character in store.characters"
      :pic="character.card_images[0].image_url"
      :name="character.name"
      :type="character.type"
      :price="character.card_prices[0].amazon_price"
    />
  </div>
  <h2 v-else>Page is loading</h2>
</template>

<style lang="scss" scoped></style>
