import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({ reactivityTransform: true }),
    Pages({ exclude: ['**/components/*.vue', '**/*.ts'] }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'quasar',
      ],
      dirs: ['src/composables/**', 'src/store/**', 'src/plugins'],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      directoryAsNamespace: true,
      resolvers: [QuasarResolver()],
      dts: 'src/components.d.ts',
    }),
    Unocss(),
  ],
})
