<template >
  <div class="flex">
    <img alt="Vue logo" src="../assets/logo.png" class="h-1/4" />
    <div class="self-end mb-2 space-y-2">
      <h1 class="font-bold text-4xl">All Receipies</h1>
      <button
        class="
          theme-change
          bg-gray-700
          dark:bg-gray-100
          p-2
          text-xl
          font-bold
          overflow-hidden
          rounded-lg
          text-gray-400
          filter
          drop-shadow-md
          hover:drop-shadow-2xl
        "
        @click="setTheme"
        @mousemove="btnHoverEffect($event)"
      >
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
    btnHoverEffect: function (e) {
      let btn;
      if (this.isDarkMode) {
        e.target.classList.remove("theme-change");
        e.target.classList.add("theme-change-dark");
        btn = document.querySelector(".theme-change-dark");
      } else {
        e.target.classList.remove("theme-change-dark");
        e.target.classList.add("theme-change");
        btn = document.querySelector(".theme-change");
      }

      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
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
<style>
.theme-change:hover:before {
  --size: 30px;
}
.theme-change-dark:hover:before {
  --size: 30px;
}
.theme-change:before {
  --size: 1;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle closest-side, black, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}
.theme-change-dark:before {
  --size: 1;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle closest-side, white, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}
</style>