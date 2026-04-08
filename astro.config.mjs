import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  server: {
    port: 3000,
    host: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});