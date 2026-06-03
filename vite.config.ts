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
      // Jab bhi koi file kisi bhi folder ke andar kisi component ko dhoonde, usey direct baahar bhej do (bina case sensitive error ke)
      { find: /.*\/components\/ui\/toaster$/, replacement: path.resolve(import.meta.dirname, "./Toaster.tsx") },
      { find: /.*\/components\/ui\/toaster\.tsx$/, replacement: path.resolve(import.meta.dirname, "./Toaster.tsx") },
      { find: /.*\/components\/ui\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: /.*\/sections\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: /.*\/layout\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: /.*\/pages\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: /.*\/hooks\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.ts") },
      { find: /.*\/lib\/utils$/, replacement: path.resolve(import.meta.dirname, "./utils.ts") },
      
      // Standard fallback mappings
      { find: /^@\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
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
