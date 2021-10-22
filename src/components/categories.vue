<template>
  <section class="align-middle">
    <div
      class="
        categories
        grid
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        gap-x-5
      "
      v-for="(category, index) in categories"
      :key="index"
    >
      <div v-for="(value, index) in category" :key="index">
        <Card
          :idCategory="value.idCategory"
          :strCategory="value.strCategory"
          :strCategoryThumb="value.strCategoryThumb"
          :strCategoryDescription="value.strCategoryDescription"
        ></Card>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "Categories",
  components: { Card },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
.categories {
  grid-auto-columns: 2rem;
}
</style>
