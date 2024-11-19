import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  base: '/newBankrollWebsite/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 5173
  },
  build: {
    outDir: 'docs',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            const dirname = path.dirname(assetInfo.name);
            return dirname === '.' ? `images/[name][extname]` : `[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  },
  publicDir: path.resolve(__dirname, 'public')
});
