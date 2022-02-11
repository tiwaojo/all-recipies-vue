<template>
  <div class="mx-auto my-60">
    <div
      class="
        block
        md:hidden
        top-1/2
        shadow-lg
        px-6
        py-16
        rounded-md
        dark:bg-gray-900
        bg-gray-300
        text-gray-800
        dark:text-gray-50
      "
    >
      <div class="text-left whitespace-normal">
        <h1>Monaco Demonstration</h1>
        <h2>Please use a computer to access the demo</h2>
        <router-link to="/">
          <button
            id="return-home-btn"
            class="
              px-2
              py-2
              bg-green-500
              text-white text-base
              font-medium
              rounded-md
              w-auto
              shadow-sm
              hover:bg-green-600
              focus:outline-none focus:ring-2 focus:ring-green-300
            "
            type="button"
            autofocus="true"
          >
            Return Home
          </button></router-link
        >
      </div>
    </div>
    <div class="hidden md:block w-full px-8 space-y-5">
      <textarea class="rounded-lg" v-model="content" id="editor"></textarea>
      <div class="inline-flex mx-2">
        <select
          class="border-none rounded-md"
          name="cmModes"
          id="modes"
          @change="setMode"
          autofocus="true"
        >
          <option value="javascript" selected>Javascript</option>
          <option value="htmlmixed">HTML</option>
          <option value="gfm">Markdown</option>
        </select>
      </div>
      <button
        class="rounded-lg text-base text-gray-400 bg-white px-1"
        @click="setTheme()"
      >
        {{ cmTheme ? " Dracula Theme" : "3024 Theme" }}
      </button>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
// mode
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/gfm/gfm.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";
// theme css
import "codemirror/theme/dracula.css";
import "codemirror/theme/3024-day.css";
// hints
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";
export default {
  name: "easter-egg",
  props: {},
  data() {
    return {
      content: "let a = 0;\n",
      cmTheme: true,
    };
  },
  mounted() {
    this.cm = CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true,
      theme: "dracula",
      line: true,
      mode: "javascript",
      extraKeys: { "Ctrl-Space": "autocomplete" },
    });

    this.cm.setOption(
      "theme",
      document.documentElement.classList.contains("dark") ? "dracula" : "3024-day"
    );
  },
  methods: {
    setTheme() {
      this.cmTheme = !this.cmTheme;
      this.cm.setOption("theme", this.cmTheme ? "dracula" : "3024-day");
    },
    setMode() {
      const selectedMode = document.getElementById("modes").options;
      const selectedValue = selectedMode[selectedMode.selectedIndex].value;
      const cmMode = this.cm.getOption("mode");
      console.log(selectedValue);
      if (cmMode !== selectedValue) {
        this.cm.setOption("mode", selectedValue);
      }
    },
  },
};
</script>
<style>
.CodeMirror {
  @apply rounded-xl shadow-2xl;
}
option {
  @apply dark:bg-gray-900 bg-gray-300 text-white text-base font-medium;
}
</style>
