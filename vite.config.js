import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: [] // react-moment fails without this!
  },
  build: {
    rollupOptions: {
      external: [
        'quill'
      ]
    }
  }
})