<script>
export default {
  props: {
    pic: String,
    name: String,
    type: String,
    price: String,
  },
};
</script>

<template>
  <div class="col text-center border">
    <img :src="pic" class="img-fluid" alt="" />
    <h3 class="name fw-bold">{{ name }}</h3>
    <h4 class="type fw-bold">{{ type }}</h4>
    <h6 class="price">Amazon Price {{ price }} $</h6>
  </div>
</template>

<style lang="scss" scoped></style>
