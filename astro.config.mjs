import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pablosangueza.github.io',
  base: '/iron-stack-web/',
  output: 'static',
  integrations: [tailwind(), sitemap()]
});
