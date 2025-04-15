// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  output: 'server',
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  },

});