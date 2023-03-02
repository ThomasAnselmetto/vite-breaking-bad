<script>
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
      title: "YU-GI-OH",
    };
  },
  components: { AppMain },
};
</script>

<template>
  <header>
    <h1 class="p-3">{{ title }}</h1>
  </header>
  <AppMain />
</template>

<Style lang="scss">
@use "./scss/style.scss";
</Style>
