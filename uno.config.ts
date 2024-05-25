// import { defineConfig } from 'unocss'

// export default defineConfig({
//   // ...UnoCSS options
//   theme: {
//     colors: {
//       'primary-100': '#E6BEAE',
//       'primary-200': '#B2967D',
//       'secondary-100': '#EEE4E1',
//       'secondary-200': '#E7D8C9',
//     },
//   },
// })
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      'primary-100': '#cba596',
      'primary-200': '#B2967D',
      'secondary-100': '#EEE4E1',
      'secondary-200': '#E7D8C9',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
