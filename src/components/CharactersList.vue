<script>
import axios from "axios";
import CharacterCard from "./CharacterCard.vue";

export default {
  data() {
    return {
      characters: [],
    };
  },

  components: {
    CharacterCard,
  },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=100")
      .then((response) => {
        console.log(response);
        this.characters = response.data.data;
      });
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
    <CharacterCard
      v-for="character in characters"
      :pic="character.card_images[0].image_url"
      :name="character.name"
      :type="character.type"
      :price="character.card_prices[0].amazon_price"
    />
  </div>
</template>

<style lang="scss" scoped></style>
