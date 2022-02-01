<template>
  <section class="text-gray-800 dark:text-gray-50 my-20">
    <div class="container px-5 md:mx-auto md:px-0 space-y-2">
      <Title />
      <div
        class="w-full align-middle h-1 bg-gray-800 dark:bg-gray-50 rounded-lg"
      ></div>
      <Categories />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Categories from "@/components/Categories";
import Title from "@/components/Title";
import "../assets/tailwind.css";
export default {
  name: "Home",
  components: {
    Categories,
    Title,
  },
};
</script>
