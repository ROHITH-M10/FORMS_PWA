import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "AIMS Research Portal",
        short_name: "AIMS Research Portal",
        description: "AIMS Research Portal",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "./", // Ensure correct start URL
        icons: [
          {
            src: "/icons/favicon.png", // Make sure this file exists
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/favicon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
})
