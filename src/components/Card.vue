<template>
  <a href="">
    <div>
      <img :src="strCategoryImg" alt="" />
    </div>
  </a>
</template>
<script>
export default {
  name: "Card",
  props: {
    foodName: { type: String, required: true },
    strCategory: { type: String, required: true },
    strCategoryImg: { type: String, required: true },
    strCategoryDescription: { type: String, required: true },
  },
};
</script>

<style></style>
