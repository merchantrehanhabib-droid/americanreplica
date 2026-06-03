import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

export default defineConfig({
  plugins: [mockupPreviewPlugin(), react(), tailwindcss()],
  resolve: {
    alias: [
      // Yeh line sabse zaroori hai: ye `/components/ui/...` ko root file par redirect kar degi
      { find: /^@\/components\/ui\/(.*)/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: /^components\/ui\/(.*)/, replacement: path.resolve(import.meta.dirname, "./$1.tsx") },
      { find: "@", replacement: path.resolve(import.meta.dirname, ".") }
    ]
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true
  }
});
