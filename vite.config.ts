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
      // Saari files baahar hain, to har kism ke custom folder path ko direct root par target karo
      { find: /^\@\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1") },
      { find: /^(components|pages|assets|sections|layout|lib|hooks|data|context)\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$2") },
      
      // Relative paths fallback (agar koi file subfolder structure dhoond rahi ho)
      { find: /.*\/components\/ui\/toaster$/, replacement: path.resolve(import.meta.dirname, "./Toaster.tsx") },
      { find: /.*\/lib\/utils$/, replacement: path.resolve(import.meta.dirname, "./utils.ts") },
      { find: /.*\/layout\/PageLayout$/, replacement: path.resolve(import.meta.dirname, "./PageLayout.tsx") },
      { find: /.*\/sections\/(.+)$/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      
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
