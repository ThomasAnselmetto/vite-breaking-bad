<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      types: [
        "Effect Monster",
        "Flip Effect Monster",
        "Flip Tuner Effect Monster",
        "Gemini Monster",
        "Normal Monster",
        "Normal Tuner Monster",
        "Pendulum Effect Monster",
        "Pendulum Effect Ritual Monster",
        "Pendulum Flip Effect Monster",
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster",
        "Ritual Effect Monster",
        "Ritual Monster",
        "Spell Card",
        "Spirit Monster",
        "Toon Monster",
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster",
      ],
    };
  },
  emits: ["on-search"],
  methods: {
    search() {
      this.$emit("on-search", this.types);
    },
  },
};
</script>

<template>
  <select
    class="form-select w-25 p-2 mb-5"
    aria-label="Default select example "
  >
    <option v-for="cardtype in types">{{}}</option>
  </select>
</template>

<style lang="scss" scoped></style>
