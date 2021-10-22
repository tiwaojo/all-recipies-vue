<template>
  <div
    class="
      space-y-7
      grid
      shadow
      dark:shadow-lg
      content-center
      rounded-lg
      hover:shadow-2xl
    "
  >
    <div class="">
      <img :src="strCategoryThumb" :alt="strCategory" />
    </div>
    <div class="text-left">
      <h1 class="text-gray-300">{{ idCategory }}</h1>
      <h6 class="text-gray-300">{{ strCategory }}</h6>
      <h6 class="text-gray-300 overflow-ellipsis">
        {{ strCategoryDescription }}
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    idCategory: { type: String },
    strCategory: { type: String },
    strCategoryThumb: { type: String },
    strCategoryDescription: { type: String },
  },
};
</script>

<style></style>
