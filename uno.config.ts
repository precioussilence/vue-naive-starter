import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify({}),
    presetRemToPx(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
  ],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|vine.ts|mdx?|astro|elm|php|phtml|html)($|\?)/, './src/utils/icon.ts'],
    },
  },
})
