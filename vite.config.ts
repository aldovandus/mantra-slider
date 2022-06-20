import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    assetsInlineLimit: 4096,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactPicturesViewerLib",
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ["react"],

      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
});
