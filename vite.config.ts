import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "vite-ts-library-starter",
      fileName: "vite-ts-library-starter",
    },
    sourcemap: true,
  },
});
