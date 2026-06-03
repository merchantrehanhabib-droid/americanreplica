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
      "@/lib/utils": path.resolve(import.meta.dirname, "./utils.ts"),
      "@/lib": path.resolve(import.meta.dirname, "."),
      "@/components/ui": path.resolve(import.meta.dirname, "."),
      "@/components": path.resolve(import.meta.dirname, "."),
      "@/hooks": path.resolve(import.meta.dirname, "."),
      "@/pages": path.resolve(import.meta.dirname, "."),
      "@/assets": path.resolve(import.meta.dirname, "."),
      "@": path.resolve(import.meta.dirname, "."),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  }
});
