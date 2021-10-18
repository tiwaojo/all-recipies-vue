<template>
  <div class="space-y-7 grid">
    <div class="h-full">
      <img :src="strCategoryThumb" :alt="strCategory" />
    </div>
    <h1 class="text-gray-300">{{ idCategory }}</h1>
    <h6 class="text-gray-300">{{ strCategory }}</h6>
    <h6 class="text-gray-300">{{ strCategoryDescription }}</h6>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "idCategory",
    "strCategory",
    "strCategoryThumb",
    "strCategoryDescription",
  ],
};
</script>

<style></style>
