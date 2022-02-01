<template>
  <div
    id="card-modal"
    aria-hidden="true"
    class="fixed inset-0 dark:bg-gray-800 bg-gray-400 dark:bg-opacity-75 bg-opacity-80 h-screen w-screen"
    @click="closeModal"
  >
    <div
      class="relative top-1/3 mx-auto p-5 w-10/12 shadow-lg rounded-md dark:bg-gray-900 bg-gray-300"
    >
      <div class="mt-3 px-7 py-3 text-left">
        <h2 class="text-gray-800 font-semibold text-2xl mb-2 dark:text-white">
          {{ categoryTitle }}
          <span class="italic font-thin text-base"
            >&nbsp;&mdash;&nbsp;{{ categoryId }}</span
          >
        </h2>
        <div class="mt-2">
          <p class="text-base text-justify">
            {{ categoryDescription }}
          </p>
        </div>
        <div class="px-4 py-3 text-right">
          <button
            id="ok-btn"
            class="px-2 py-2 bg-green-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    categoryId: { type: String, required: true },
    categoryTitle: { type: String, required: true },
    categoryDescription: { type: String, required: true },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
  },
};
</script>
