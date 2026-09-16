import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// StudyOS ships as ONE ready-to-run dist/index.html (all JS/CSS inlined).
// minify stays off so the verification harness can read the shipped code.
export default defineConfig({
  plugins: [viteSingleFile()],
  server: { allowedHosts: true },
  preview: { allowedHosts: true },
  build: {
    minify: false,
    target: 'es2020',
    cssCodeSplit: false,
    // single-file build has no separate chunks to preload; the injected
    // polyfill also breaks the minimal-DOM verification harness
    modulePreload: { polyfill: false }
  }
});
