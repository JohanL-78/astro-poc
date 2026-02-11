import { sanityClient } from 'sanity:client';

export async function loadQuery<T>({
  query,
  params = {},
  preview = false,
}: {
  query: string;
  params?: Record<string, unknown>;
  preview?: boolean;
}): Promise<{ data: T }> {
  const token = import.meta.env.SANITY_API_READ_TOKEN;
  const perspective = preview ? 'previewDrafts' : 'published';

  const data = await sanityClient.fetch<T>(query, params, {
    perspective,
    stega: preview,
    ...(preview && token ? { token } : {}),
    resultSourceMap: preview ? 'withKeyArraySelector' : false,
    useCdn: !preview,
  });

  return { data };
}
