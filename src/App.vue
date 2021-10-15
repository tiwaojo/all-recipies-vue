<template>
  <section class="dark:bg-black h-screen text-gray-50">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="bg-red-500">yhiybyb</div>
    <Categories />
  </section>
</template>

<script>
import Categories from "./components/Categories.vue";
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
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
