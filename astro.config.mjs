// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import { loadEnv } from 'vite';

const { R2_DOMAIN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: [R2_DOMAIN?.replace(/'/g, '') || ''],
  },
});