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
      // Jab saari files baahar hain, to har tarah ke import raste ko direct root (.) par redirect karo
      { find: /^\@\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /^(components|pages|assets|sections|layout|lib|hooks|data|context)\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$2") },
      { find: /.*\/([^\/]+)\.(tsx|ts|css|png|jpg|jpeg|svg)$/, replacement: path.resolve(import.meta.dirname, "./$1.$2") },
      { find: /.*\/components\/ui\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /.*\/sections\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /.*\/layout\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /.*\/pages\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /.*\/hooks\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /.*\/lib\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: "@", replacement: path.resolve(import.meta.dirname, ".") }
    ]
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
