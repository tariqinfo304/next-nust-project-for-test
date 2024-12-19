// nuxt.config.ts (or nuxt.config.js)
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite: {
    server: {
      proxy: {
        // This will forward any requests starting with /api to the backend at http://localhost:3000
        '/api': {
          target: 'http://localhost:3000',  // Your NestJS API endpoint
          changeOrigin: true,  // Ensures the host header is correctly modified
          secure: false,  // Set to false if you're using HTTP instead of HTTPS
        },
      },
    },
  },
/*   modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://localhost:3000', // Adjust to your backend API URL
  }, */
});
