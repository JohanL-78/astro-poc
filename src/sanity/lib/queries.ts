export const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]{
  siteName,
  logo,
  navItemsFr[]{
    _key,
    label,
    url
  },
  navItemsEn[]{
    _key,
    label,
    url
  },
  footerTextFr,
  footerTextEn,
  socialLinks[]{
    _key,
    platform,
    url
  }
}`;

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
  seoImage,
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
    image,
    imagePosition,
    cta,
    items[]{
      _key,
      title,
      description,
      image,
      link
    },
    columns
  }
}`;
