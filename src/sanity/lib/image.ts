import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import type { Image } from 'sanity';

const builder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return undefined;
  }

  return builder.image(source).auto('format').fit('max');
};
