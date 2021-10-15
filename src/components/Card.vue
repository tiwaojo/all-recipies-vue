<template>
  <div class="space-y-7">
    <img :src="strCategoryImg" alt="" />
    <h2 class="text-gray-300">{{ strCategory }}</h2>
    <h6 class="text-gray-300">{{ strCategoryDescription }}</h6>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "idCategory",
    "strCategory",
    "strCategoryImg",
    "strCategoryDescription",
  ],
};
</script>

<style></style>
