// /frontend/src/vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {
      REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
    },
  },
});
