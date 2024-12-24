import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Correctly points to the 'src' directory
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // Increase or decrease chunk size warning limit
    minify: 'terser', // Minify using Terser
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor libraries into a 'vendor' chunk
          }
        },
      },
    },
  },
});
