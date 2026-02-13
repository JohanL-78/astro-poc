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
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['siteSettings'].includes(listItem.getId()!)
            ),
          ]),
    }),
    presentationTool({
      resolve,
      previewUrl: 'https://astro-poc-2lh.pages.dev/preview/fr/accueil',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
