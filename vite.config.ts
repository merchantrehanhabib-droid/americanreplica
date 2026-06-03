import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [
    mockupPreviewPlugin(),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Iska matlab hai: import mein kuch bhi "/components/ui/..." likha ho, 
      // usay seedha root directory mein dhoondo.
      "@": path.resolve(import.meta.dirname, "."),
      "/components/ui": path.resolve(import.meta.dirname, "."),
      "components/ui": path.resolve(import.meta.dirname, "."),
      "lib/utils": path.resolve(import.meta.dirname, "utils.ts"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "index.html")
      }
    }
  }
});
