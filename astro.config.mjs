import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://<GITHUB_USER>.github.io',
  base: '/<REPO_NAME>/',
  output: 'static',
  integrations: [tailwind(), sitemap()]
});
