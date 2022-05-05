<template>
  <div class="flex my-auto">
    <router-link to="/codemirror-easter-egg">
      <img alt="Vue logo" src="../assets/logo.png" class="h-auto" />
    </router-link>
    <div class="self-end inline mb-2 space-y-2 content-center">
      <h1>All Receipies</h1>
      <div class="inline-flex space-x-4">
        <button
          class="theme-change inline-flex space-x-3 bg-gray-700 dark:bg-gray-100 p-1 rounded-lg text-gray-400 filter drop-shadow-md hover:drop-shadow-2xl"
          @click="isDarkMode = !isDarkMode"
          @mousemove="btnHoverEffect($event)"
        >
          <i
            :class="[
              isDarkMode === 'dark'
                ? 'ms-Icon--LightbulbSolid'
                : 'ms-Icon--Lightbulb',
              'ms-Icon',
            ]"
          ></i>
          Dark Mode
        </button>
        <button @click="createDocx($event)">
          <img
            src="https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/word_48x1.svg"
            class="w-8 h-full"
            alt="Word product icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
  BorderStyle,
} from "docx";
import { saveAs } from "file-saver";
export default {
  name: "Title",
  data() {
    return {
      isDarkMode: true,
    };
  },
  watch: {
    // TODO: Use watch for theme
    isDarkMode: function (theme) {
      localStorage.setItem("isDarkTheme", theme);
      // console.log("isDarkTheme: ", theme);
      this.setTheme(theme);
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log("something");
    // });
    window.addEventListener("focus", this.initTheme);
  },
  beforeUnmount() {
    window.removeEventListener("focus", this.initTheme);
  },
  methods: {
    initTheme: function () {
      if (
        !("theme" in localStorage) ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("isDarkTheme", true);
        this.setTheme(true);
        // console.log("setTheme dark: ", localStorage.isDarkTheme);
      } else {
        localStorage.setItem("isDarkTheme", false);
        this.setTheme(false);
        // console.log("setTheme light: ", localStorage.isDarkTheme);
      }
    },
    setTheme: function (theme) {
      const docEL = document.documentElement;
      if (theme) {
        docEL.classList.remove("light");
        docEL.classList.add("dark");
      } else {
        docEL.classList.remove("dark");
        docEL.classList.add("light");
      }
    },
    switchTheme: function () {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        this.isDarkMode = "light";
      } else {
        this.isDarkMode = "dark";
      }
    },
    btnHoverEffect: function (e) {
      let btn;
      // if (this.isDarkMode) {
      e.target.classList.remove("theme-change");
      e.target.classList.add("theme-change-dark");
      btn = document.querySelector(".theme-change-dark");
      // } else {
      //   e.target.classList.remove("theme-change-dark");
      //   e.target.classList.add("theme-change");
      //   btn = document.querySelector(".theme-change");
      // }

      // let rect = e.target.getBoundingClientRect();
      // let x = e.clientX - rect.left;
      // let y = e.clientY - rect.top;
      // btn.style.setProperty("--x", x + "px");
      // btn.style.setProperty("--y", e.clientY - y);

      const { x, y } = btn.getBoundingClientRect();
      btn.style.setProperty("--x", e.clientX - x);
      btn.style.setProperty("--y", e.clientY - y);
    },
    createDocx: function () {
      const docx = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                text: "Docx document example: Theres nothing here",
                heading: HeadingLevel.HEADING_1,
                border: {
                  bottom: {
                    color: "auto",
                    space: 1,
                    value: "single",
                    size: 6,
                    style: BorderStyle.SINGLE,
                  },
                },
                children: [
                  new TextRun({
                    style: "Heading 1",
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Needed it to use some icons lol",
                    bold: true,
                    italics: true,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Needed to avoid that copyright lawsuit lol",
                    bold: true,
                    italics: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(docx).then((buf) => {
        console.log(buf);
        saveAs(buf, "My Example Document.docx");
      });
    },
  },
};
</script>
<style>
.theme-change-dark:hover::after {
  opacity: 0.4;
}
.theme-change-dark::after {
  /* --size: 1; */
  content: "";
  position: absolute;
  left: calc(var(--x, 0) * 1px - 50px);
  top: calc(var(--y, 0) * 1px - 50px);
  width: 100px;
  height: 100px;
  background: radial-gradient(#2a3749, #3984ff00 80%);
  opacity: 0;
  /* transform: translate(-50%, -50%); */
  transition: opacity 0.4;
}
</style>
