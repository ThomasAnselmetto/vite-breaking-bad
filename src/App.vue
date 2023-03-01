<script>
import "./components/AppMain.vue";
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
    <h1>{{ title }}</h1>
  </header>
  <AppMain />
</template>

<Style lang="scss">
@use "./scss/style.scss";
</Style>
