<template>
  <div class="categories"></div>
</template>


<script>
import axios from "axios";
export default {
  name: "Categories",
  props: {
    msg: String,
    // categories: { type: Array, required: true, validator: (value) => {} },
    categoryItem: {
      idCategory: "",
      strCategory: "",
      strCategoryThumb: "",
      strCategoryDescription: "",
    },
  },
  mounted() {
    axios
      .gget("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => {
        this.categories = result;
        console.log(result);
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
