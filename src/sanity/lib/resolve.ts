import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments: [
    {
      route: '/preview/:language/:slug',
      filter: `_type == "page" && language == $language && slug.current == $slug`,
    },
  ],
  locations: {
    page: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
        language: 'language',
      },
      resolve: (doc) => {
        if (!doc?.slug || !doc?.language) {
          return { locations: [] };
        }

        return {
          locations: [
            {
              title: doc.title || 'Page',
              href: `/preview/${doc.language}/${doc.slug}`,
            },
          ],
        };
      },
    }),
  },
};
