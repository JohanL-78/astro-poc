export const ALL_PAGES_QUERY = `*[_type == "page"]{
  "slug": slug.current,
  language
}`;

export const PAGE_QUERY = `*[_type == "page" && language == $language && slug.current == $slug][0]{
  _id,
  title,
  language,
  slug,
  seoTitle,
  seoDescription,
  seoImage{
    ...,
    asset->
  },
  noIndex,
  "translations": translations[]->{
    language,
    "slug": slug.current
  },
  content[]{
    _key,
    _type,
    title,
    subtitle,
    heading,
    text,
    image{
      ...,
      asset->
    },
    imagePosition,
    cta,
    items[]{
      _key,
      title,
      description,
      image{
        ...,
        asset->
      },
      link
    },
    columns
  }
}`;
