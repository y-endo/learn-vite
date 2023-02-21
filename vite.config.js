import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";
import path from "path";

export default defineConfig({
  root: "project",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "../dist",
  },
  plugins: [
    legacy({
      targets: ["ie >= 11"],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      "~/": path.join(__dirname, "./project/src/"),
    },
  },
});
