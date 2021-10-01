<template>
  <a href="">
    <div class="tw-bg-red-200">
      <img :src="strCategoryImg" alt="" />
      <h2 class="">{{idCategory}}</h2>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: {
    idCategory: { type: String, required: false },
    strCategory: { type: String, required: false },
    strCategoryImg: { type: String, required: false },
    strCategoryDescription: { type: String, required: false },
  },
};
</script>

<style></style>
