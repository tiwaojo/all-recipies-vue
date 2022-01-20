<template >
  <div class="flex">
    <img alt="Vue logo" src="../assets/logo.png" class="h-1/4"/>
    <div class="self-end mb-2 space-y-2">
      <h1 class="font-bold text-4xl">All Receipies</h1>
      <button
        class="p-2 text-xl font-bold bg-gray-50 rounded-lg text-gray-400 filter drop-shadow-md hover:drop-shadow-2xl"
        @click="setTheme"
      >
        <!-- <select name="themes" id="themes" @change="setTheme">
          <option value="Dark" selected>Dark</option>
          <option value="Light">Light</option>
          <option value="System">System</option>
        </select> -->
        <i
          :class="[
            isDarkMode ? 'ms-Icon--LightbulbSolid' : 'ms-Icon--Lightbulb',
            'ms-Icon',
          ]"
        ></i>
        Dark Mode
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      isDarkMode: true,
    };
  },
  watch: {},
  // mounted() {
  //   this.setTheme();
  // },
  beforeCreate() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.theme === "light" ? !this.isDarkMode : this.isDarkMode;
    console.log(this.isDarkMode);
  },
  methods: {
    changeTheme: function () {
      console.log(this.isDarkMode);
      this.isDarkMode = !this.isDarkMode;
    },
    setTheme: function () {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      this.changeTheme();
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        if (localStorage.theme === "light") {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        } else {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        }
      }

      // Whenever the user explicitly chooses light mode
      //   localStorage.theme = "light";

      //   // Whenever the user explicitly chooses dark mode
      //   localStorage.theme = "dark";

      //   // Whenever the user explicitly chooses to respect the OS preference
      //   localStorage.removeItem("theme");
    },
  },
};
</script>
<style >
</style>