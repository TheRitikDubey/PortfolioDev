import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the app accessible from your local network
    port: 3001, // Default Vite port (or use another if preferred)
  },
  define: {
    'process.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL),
      VITE_API_LOCAL: JSON.stringify(process.env.VITE_API_LOCAL),
    },
  },
  base: './', // Default: '/'
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true,
  },
})
