<template>
  <section class="align-middle p-9">
    <div
      class="categories grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14 justify-items-stretch"
      v-for="(category, index) in categories"
      :key="index"
    >
      <template v-for="(value, index) in category" :key="index">
        <Card
          :idCategory="value.idCategory"
          :strCategory="value.strCategory"
          :strCategoryThumb="value.strCategoryThumb"
          :strCategoryDescription="value.strCategoryDescription"
          @cardClick="updateModal($event)"
        ></Card>
      </template>
      <Modal
        v-if="triggerModal"
        @closeModal="updateModal($event)"
        :categoryId="modalItem.id"
        :categoryTitle="modalItem.title"
        :categoryDescription="modalItem.description"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import Modal from "./Modal.vue";
export default {
  name: "Categories",
  components: { Card, Modal },
  data() {
    return {
      categories: [],
      triggerModal: false,
      modalItem: {},
    };
  },
  beforeCreate() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => {
        console.log(result.data);
        this.categories = result.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    updateModal(e) {
      console.log("Event: ", e);
      this.modalItem = e;
      this.triggerModal = e.modalState;
    },
  },
};
</script>
