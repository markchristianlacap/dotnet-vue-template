import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  preprocess(matcher) {
    return matcher.startsWith('un-') ? matcher.slice(3) : undefined
  },
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
