import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pablosangueza.github.io/iron-stack-web/',
  base: '',
  output: 'static',
  integrations: [tailwind(), sitemap()]
});
