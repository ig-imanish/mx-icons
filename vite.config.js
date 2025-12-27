// vite.config.js (default config for dev/preview)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import pkg from './package.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define:{
    __APP_VERSION__: JSON.stringify(pkg.version),
  }
  // No build.lib here – this is for app mode
});
