<script>
import AppMain from "./components/AppMain.vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "YU-GI-OH API",
      characters: [],
    };
  },
  components: { AppMain },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=100")
      .then((response) => {
        console.log(response);
        this.characters = response.data.data;
      });
  },
};
</script>

<template>
  <header>
    <h1 class="p-3">{{ title }}</h1>
  </header>
  <AppMain :characters="characters" />
</template>

<Style lang="scss">
@use "./scss/style.scss";
</Style>
