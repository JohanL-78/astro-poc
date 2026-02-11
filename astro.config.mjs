// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),

  integrations: [
    sanity({
      projectId: 'dd2las0t',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
      stega: {
        studioUrl: '/studio',
      },
    }),
    react(),
  ],

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
