import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/mortgage-calculator/",
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Bolånekalkyl",
        short_name: "Bolån",
        start_url: "/mortgage-calculator/",
        display: "standalone",
        theme_color: "#1e4fa3",
        background_color: "#ffffff",
        icons: [
          {
            src: "/mortgage-calculator/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/mortgage-calculator/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
