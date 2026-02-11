import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/sanity/schemaTypes'
import { resolve } from './src/sanity/lib/resolve'

const projectId = 'dd2las0t'
const dataset = 'production'

export default defineConfig({
  name: 'astro-poc',
  title: 'ABC Vitrine (Astro POC)',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {
        origin: 'https://astro-poc-2lh.pages.dev',
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
