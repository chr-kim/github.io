// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import solidJs from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://chr-kim.github.io',

  // 또는 리포지토리 이름이 username.github.io가 아니라면 '/github.io'
  base: '/github.io',

  // GitHub Pages용 정적 사이트 명시
  output: 'static',

  integrations: [mdx(), sitemap(), solidJs()],

  build: {
    assets: 'assets' // 에셋 폴더 명시적 지정
  },

  vite: {
    plugins: [tailwindcss()]
  }
});