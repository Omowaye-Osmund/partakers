// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [
//     react(), // Add this!
//     tailwindcss(),
//   ],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true,
    open: true,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    outDir: "dist", // Changed back to dist to match Render config
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});