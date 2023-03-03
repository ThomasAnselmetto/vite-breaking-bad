<script>
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import BaseSearch from "./components/BaseSearch.vue";
import { store } from "./data/store";

export default {
  data() {
    return {
      store,
      title: "YU-GI-OH API",
    };
  },
  components: { AppMain, BaseSearch },
  methods: {
    fetchCharacters(url) {
      store.IsPageLoading = true;
      axios
        .get(url)
        .then((response) => {
          store.characters = response.data.data;
        })
        .catch((error) => {
          store.characters = [];
          console.log(error);
        })
        // non si fa ma giusto per vedere il caricamento
        .finally(() => {
          // setTimeout(() => {
          store.IsPageLoading = false;
          // }, 3000);
        });
    },
    fetchFilteredPage(types) {},
  },
  created() {
    this.fetchCharacters(store.storeUrl);
  },
};
// creo un method fetch e nel created la richiamo metto url nel get e store.storeUrl nella dichiarazione della funzione
</script>

<template>
  <header>
    <BaseSearch @on-search="fetchFilteredPage" />
    <h1 class="p-3">{{ title }}</h1>
  </header>
  <AppMain :characters="characters"> </AppMain>
</template>

<Style lang="scss">
@use "./scss/style.scss";
</Style>
