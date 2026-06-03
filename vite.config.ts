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
    alias: [
      // Agar files 'src' ke andar hain to standard fallback, agar baahar hain to root fallback
      { find: /^@\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./src/$1") },
      { find: /^\@$/, replacement: path.resolve(import.meta.dirname, "./src") },
      
      // Khuli hui files ke liye direct root resolver (safe fallback)
      { find: /^(components|pages|assets|sections|layout|lib|hooks|data|context)\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$2") },
      { find: "lib/utils", replacement: path.resolve(import.meta.dirname, "./utils.ts") },
      { find: "Toaster", replacement: path.resolve(import.meta.dirname, "./Toaster.tsx") }
    ]
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  }
});
