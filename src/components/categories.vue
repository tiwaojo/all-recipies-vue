<template>
  <section class="categories dark:bg-black">
    <div class="" v-for="(category, index) in categories" :key="index">
      <!-- <h1>{{ index }} : {{ category }}</h1> -->
      <div v-for="(value, index) in category" :key="index">
        <!-- <h1>{{ index }} : {{ value }} : {{ name }}</h1> -->
        <Card
          :idCategory="value"
          :strCategory="value"
          :strCategoryImg="value"
          :strCategoryDescription="value"
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
  // props: {
  //   idCategory: { type: String, required: false },
  //   strCategory: { type: String, required: false },
  //   strCategoryImg: { type: String, required: false },
  //   strCategoryDescription: { type: String, required: false },
  // },
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
<style >
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
