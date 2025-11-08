import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/icons/index.js",
      name: "MxIcons",
      fileName: (format) => `mx-icons.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      // Don't bundle peer deps
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        format: "es",
        preserveModules: true,
        preserveModulesRoot: "src/icons",
        entryFileNames: "[name].js",
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false,
    minify: false, // Keep readable for tree-shaking
  },
});
