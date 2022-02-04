<template>
  <div
    class="top-1/2 shadow-lg rounded-md mx-5 my-56 px-6 py-16 dark:bg-gray-900 bg-gray-300 text-gray-800 dark:text-gray-50"
  >
    <div class="text-left whitespace-normal">
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
    <div class="px-4 py-3 text-left">
      <router-link to="/">
        <button
          id="ok-btn"
          class="px-2 py-2 bg-green-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          type="button"
          autofocus="true"
        >
          Return
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
