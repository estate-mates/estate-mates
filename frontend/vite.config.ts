import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:8080/",
        // target: "https://d76455ef-2182-4c67-9b84-dfe63f906387.mock.pstmn.io/",
        changeOrigin: true,
      },
    },
  },
})
