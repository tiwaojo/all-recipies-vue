<template>
  <div class="">
    <div class="bg-black">
      <h1>WHere si dark mode</h1>
    </div>
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <Categories msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Categories from "./components/categories.vue";
import "./assets/tailwind.css";
export default {
  name: "App",
  components: {
    Categories,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
