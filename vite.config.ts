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
      // Exact files mappings
      { find: "@/lib/utils", replacement: path.resolve(import.meta.dirname, "./utils.ts") },
      { find: "lib/utils", replacement: path.resolve(import.meta.dirname, "./utils.ts") },
      
      // Relative paths catchers (jo files ke andar ./ ya ../ se call ho rahe hain)
      { find: /.*\/layout\/PageLayout$/, replacement: path.resolve(import.meta.dirname, "./PageLayout.tsx") },
      { find: /.*\/sections\/AnnouncementBar$/, replacement: path.resolve(import.meta.dirname, "./AnnouncementBar.tsx") },
      { find: /.*\/hooks\/use-toast$/, replacement: path.resolve(import.meta.dirname, "./use-toast.ts") },
      
      // Standard Folders mappings
      { find: /^@\/sections/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^sections/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/data/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "data", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/context/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "context", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/layout/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "layout", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/lib/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "lib", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/components\/ui/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "components/ui", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/components/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "components", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/hooks/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "hooks", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/pages/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "pages", replacement: path.resolve(import.meta.dirname, ".") },
      { find: /^@\/assets/, replacement: path.resolve(import.meta.dirname, ".") },
      { find: "assets", replacement: path.resolve(import.meta.dirname, ".") },
      { find: "@", replacement: path.resolve(import.meta.dirname, ".") },
    ]
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  }
});
