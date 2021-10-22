<template>
  <section class="dark:bg-black text-gray-50">
    <div class="container px-5 md:mx-auto md:px-0 space-y-2">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1 class="font-bold text-4xl">All Receipies</h1>
      <div class="w-full h-1 dark:bg-gray-50 rounded-lg"></div>
      <div class="p-9">
        <Categories />
      </div>
    </div>
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
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
