import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [cssInjectedByJsPlugin(), react()],

  build: {
    assetsInlineLimit: 4096,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MantraSliderLib',
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ['react'],

      output: {
        globals: {
          react: 'react',
        },
      },
    },
  },
});
