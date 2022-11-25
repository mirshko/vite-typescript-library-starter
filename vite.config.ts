import { resolve } from "path";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "vite-typescript-library-starter",
      filename: "vite-typescript-library-starter",
    },
    sourcemap: true,
  },
  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: [],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {},
    },
  },
});
