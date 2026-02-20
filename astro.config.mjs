// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/layouts': path.resolve(__dirname, './src/layouts'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/types': path.resolve(__dirname, './src/types'),
        '@/services': path.resolve(__dirname, './src/services'),
        '@/data': path.resolve(__dirname, './src/data'),
        '@/config': path.resolve(__dirname, './src/config'),
        '@/styles': path.resolve(__dirname, './src/styles'),
        '@/assets': path.resolve(__dirname, './src/assets'),
      },
    },
  },
});
