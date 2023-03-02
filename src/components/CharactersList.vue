<script>
import CharacterCard from "./CharacterCard.vue";
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    CharacterCard,
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
    <CharacterCard
      v-for="character in store.characters"
      :pic="character.card_images[0].image_url"
      :name="character.name"
      :type="character.type"
      :price="character.card_prices[0].amazon_price"
    />
  </div>
</template>

<style lang="scss" scoped></style>
