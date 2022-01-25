<template>
  <div class="card-item ">
    <img
      :src="strCategoryThumb"
      :alt="strCategory"
      class="transition duration-150 ease-linear hover:translate-y-8 place-self-center mx-auto bg-contain"
    />
    <div class=" card-description">
      <!-- <h1 class="text-xl text-gray-300">{{ idCategory }}</h1> -->
      <h2 class="text-gray-800 font-semibold text-2xl mb-2 dark:text-white">
        {{ strCategory }}
      </h2>
      <p
        class="text-gray-800 dark:text-white truncate overflow-hidden whitespace-pre-wrap group-hover: max-h-24 text-baseline"
      >
        {{ strCategoryDescription }}
      </p>
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

<style>
.card-item {
  @apply max-h-full overflow-hidden justify-self-center rounded-lg bg-gray-300 dark:bg-gray-900 transition duration-150 ease-linear filter drop-shadow-lg md:transform transform-gpu hover:drop-shadow-3xl hover:-translate-y-1 hover:scale-110;
}

.card-description{
  @apply text-left p-2 dark:bg-gray-800 bg-gray-400 self-end;

  max-height: inherit;
}
</style>
