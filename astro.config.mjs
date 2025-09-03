// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://chr-kim.github.io',
  // 리포지토리 이름이 'github.io'라면 base 설정 추가
  base: '/github.io', // 또는 리포지토리 이름이 username.github.io가 아니라면 '/github.io'
  output: 'static', // GitHub Pages용 정적 사이트 명시
  integrations: [mdx(), sitemap()],
  build: {
    assets: 'assets' // 에셋 폴더 명시적 지정
  }
});