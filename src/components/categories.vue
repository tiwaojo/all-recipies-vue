<template>
  <section class="categories">
    <div v-for="item in Categories" :key="item.idCategory">
    <Card :idCategory="item.idCategory"></Card>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
export default {
  name: "Categories",
  components: { Card },
  props: {
    idCategory: { type: String, required: true },
    strCategory: { type: String, required: true },
    strCategoryDescription: { type: String, required: true },
    strCategoryThumb: { type: String, required: true },
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => {
        console.log(result.data);
        this.Categories = result.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
