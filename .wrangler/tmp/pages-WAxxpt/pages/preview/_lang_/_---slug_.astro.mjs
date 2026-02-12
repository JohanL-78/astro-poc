globalThis.process ??= {}; globalThis.process.env ??= {};
import '../../../chunks/page-ssr_JMJQddy9.mjs';
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, h as createAstro } from '../../../chunks/astro/server_l6gAZFHD.mjs';
import { l as loadQuery, P as PAGE_QUERY, $ as $$Layout, a as $$PageBuilder } from '../../../chunks/queries_DGpdOEMr.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang, slug } = Astro2.params;
  let page = null;
  let error = null;
  try {
    const result = await loadQuery({
      query: PAGE_QUERY,
      params: { language: lang, slug: slug || "" },
      preview: true
    });
    page = result.data;
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }
  if (!page && !error) {
    return Astro2.redirect("/fr/accueil");
  }
  return renderTemplate`${error ? renderTemplate`<html>${maybeRenderHead()}<body><h1>Preview Error</h1><p>Lang: ${lang}, Slug: ${slug}</p><pre>${error}</pre></body></html>` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page.seoTitle || page.title, "description": page.seoDescription, "lang": lang, "noIndex": true, "translations": page.translations, "currentSlug": slug, "preview": true }, { "default": async ($$result2) => renderTemplate`<main>${page.content && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "sections": page.content })}`}</main>` })}`}`;
}, "/Users/johanlorck/astro-poc/src/pages/preview/[lang]/[...slug].astro", void 0);

const $$file = "/Users/johanlorck/astro-poc/src/pages/preview/[lang]/[...slug].astro";
const $$url = "/preview/[lang]/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
