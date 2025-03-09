// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),

//   ],
//   server: {
//     host: true,
//     port: 3000, // বা তোমার পোর্ট নম্বর
//     strictPort: true,
//     hmr: {
//       clientPort: 443, // Render সার্ভারে HMR কাজ করাতে
//     },
//     preview: {
//       allowedHosts: ["quick-chat-app-i130.onrender.com"] // এখানেই হোস্ট অনুমোদিত করতে হবে
//     }
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 3000, // বা তোমার পছন্দের পোর্ট নম্বর
    strictPort: true,
    hmr: {
      clientPort: 443, // Render সার্ভারে HMR কাজ করাতে
    },
  },
  preview: {
    allowedHosts: ["quick-chat-app-i130.onrender.com"] // এখানেই হোস্ট অনুমোদিত করতে হবে
  }
})

