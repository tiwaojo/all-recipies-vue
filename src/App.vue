<template>
  <section class="text-gray-800 dark:text-gray-50 my-20">
    <div class="container px-5 md:mx-auto md:px-0 space-y-2 ">
      <Title />
      <div class="w-full align-middle h-1 bg-gray-800 dark:bg-gray-50 rounded-lg"></div>
      <Categories />
    </div>
  </section>
</template>

<script>
import Categories from "./components/Categories";
import Title from "./components/Title";
import "./assets/tailwind.css";
export default {
  name: "App",
  components: {
    Categories,
    Title,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
