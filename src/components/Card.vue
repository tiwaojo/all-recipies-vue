<template>
  <div
    class="px-2 grid content-center rounded-lg bg-gray-500 filter drop-shadow-2xl hover:drop-shadow-xl"
  >
    <div class="justify-center">
      <img :src="strCategoryThumb" :alt="strCategory" class="h-3/4" />
    </div>
    <div class="text-left">
      <!-- <h1 class="text-xl text-gray-300">{{ idCategory }}</h1> -->
      <h2 class="text-gray-800 dark:text-gray-300">{{ strCategory }}</h2>
      <h6
        class="text-gray-800 dark:text-gray-300 overflow-hidden text-ellipsis max-h-24"
      >
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
