<script>
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
      title: "YU-GI-OH API",
    };
  },
  components: { AppMain },
  created() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=300&offset=100")
      .then((response) => {
        store.characters = response.data.data;
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
