import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative asset URLs so the build works under the GitHub Pages subpath (/circuit-hunter-academy/).
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
