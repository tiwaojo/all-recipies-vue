<template>
  <div class="card-item dark-bg-900" tabindex="0">
    <img
      :src="strCategoryThumb"
      :alt="strCategory"
      class="delay-200 transition duration-150 ease-linear hover:scale-95 hover:translate-y-8 place-self-center mx-auto bg-contain"
      :aria-label="strCategory"
      :aria-describedby="`card-modal${idCategory}`"
    />
    <div class="card-description dark-bg">
      <h2 class="text-gray-800 font-semibold text-2xl mb-2 dark:text-white">
        {{ strCategory }}
        <span class="italic font-thin text-base"
          >&nbsp;&mdash;&nbsp;{{ idCategory }}</span
        >
      </h2>
      <div class="inline">
        <p
          class="text-gray-800 dark:text-white truncate max-h-24 hover:max-h-full z-0 hover:z-10 text-baseline"
        >
          {{ strCategoryDescription }}
        </p>
        <button
          :id="`expand-modal-btn--${idCategory}`"
          @click="openModal"
          class="text-right"
        >
          View More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {
    // Modal,
  },
  props: {
    idCategory: { type: String },
    strCategory: { type: String },
    strCategoryThumb: { type: String },
    strCategoryDescription: { type: String },
  },
  data() {
    return {
      cardModal: false,
    };
  },
  methods: {
    openModal() {
      this.$emit("cardClick", {
        modalState: true,
        id: this.idCategory,
        title: this.strCategory,
        description: this.strCategoryDescription,
      });
    },
  },
};
</script>
