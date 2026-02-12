globalThis.process ??= {}; globalThis.process.env ??= {};
import { o as decodeKey } from './chunks/astro/server_l6gAZFHD.mjs';
import './chunks/astro-designed-error-pages_Cc57cJks.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_aFKjo1W_.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/johanlorck/astro-poc/","cacheDir":"file:///Users/johanlorck/astro-poc/node_modules/.astro/","outDir":"file:///Users/johanlorck/astro-poc/dist/","srcDir":"file:///Users/johanlorck/astro-poc/src/","publicDir":"file:///Users/johanlorck/astro-poc/public/","buildClientDir":"file:///Users/johanlorck/astro-poc/dist/","buildServerDir":"file:///Users/johanlorck/astro-poc/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-sckkx6r4]{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#1a1a1a}img[data-astro-cid-sckkx6r4]{max-width:100%;height:auto}.hero[data-astro-cid-7nmnspah]{position:relative;min-height:60vh;display:flex;align-items:center;justify-content:center;background-size:cover;background-position:center;background-color:#2a2a2a;color:#fff}.hero-overlay[data-astro-cid-7nmnspah]{position:absolute;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center}.hero-content[data-astro-cid-7nmnspah]{text-align:center;padding:2rem;max-width:800px}h1[data-astro-cid-7nmnspah]{font-size:3rem;margin-bottom:1rem;line-height:1.2}.subtitle[data-astro-cid-7nmnspah]{font-size:1.25rem;margin-bottom:2rem;opacity:.9}.cta-button[data-astro-cid-7nmnspah]{display:inline-block;padding:.75rem 2rem;background:#fff;color:#1a1a1a;text-decoration:none;font-weight:600;border-radius:4px;transition:opacity .2s}.cta-button[data-astro-cid-7nmnspah]:hover{opacity:.9}.portable-text[data-astro-cid-j2qpqncs] p{margin-bottom:1rem}.portable-text[data-astro-cid-j2qpqncs] h2{font-size:1.75rem;margin-top:2rem;margin-bottom:.75rem}.portable-text[data-astro-cid-j2qpqncs] h3{font-size:1.5rem;margin-top:1.5rem;margin-bottom:.5rem}.portable-text[data-astro-cid-j2qpqncs] blockquote{border-left:3px solid #ccc;padding-left:1rem;margin:1rem 0;font-style:italic;color:#555}.portable-text[data-astro-cid-j2qpqncs] a{color:#2563eb;text-decoration:underline}.portable-text[data-astro-cid-j2qpqncs] strong{font-weight:700}.portable-text[data-astro-cid-j2qpqncs] em{font-style:italic}.text-with-image[data-astro-cid-zttvvkjd]{padding:4rem 2rem}.grid[data-astro-cid-zttvvkjd]{display:grid;grid-template-columns:1fr 1fr;gap:3rem;max-width:1200px;margin:0 auto;align-items:center}.grid[data-astro-cid-zttvvkjd].reversed{direction:rtl}.grid[data-astro-cid-zttvvkjd].reversed>[data-astro-cid-zttvvkjd]{direction:ltr}h2[data-astro-cid-zttvvkjd]{font-size:2rem;margin-bottom:1rem}.image-col[data-astro-cid-zttvvkjd] img[data-astro-cid-zttvvkjd]{width:100%;border-radius:8px}@media(max-width:768px){.grid[data-astro-cid-zttvvkjd]{grid-template-columns:1fr}.grid[data-astro-cid-zttvvkjd].reversed{direction:ltr}}\n"}],"routeData":{"route":"/preview/[lang]/[...slug]","isIndex":false,"type":"page","pattern":"^\\/preview\\/([^/]+?)(?:\\/(.*?))?\\/?$","segments":[[{"content":"preview","dynamic":false,"spread":false}],[{"content":"lang","dynamic":true,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["lang","...slug"],"component":"src/pages/preview/[lang]/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/johanlorck/astro-poc/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/johanlorck/astro-poc/src/pages/[lang]/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/johanlorck/astro-poc/src/pages/preview/[lang]/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/preview/[lang]/[...slug]@_@astro":"pages/preview/_lang_/_---slug_.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/[lang]/[...slug]@_@astro":"pages/_lang_/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_15Fx5D-1.mjs","/Users/johanlorck/astro-poc/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/Users/johanlorck/astro-poc/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C-FNxWI_.mjs","/Users/johanlorck/astro-poc/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DzkpJKvi.js","/Users/johanlorck/astro-poc/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.BVK9v00a.js","@astrojs/react/client.js":"_astro/client.D75h_c__.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources2.js":"_astro/resources2.DGBwvEda.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources6.js":"_astro/resources6.BHmPcXiL.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/VideoPlayer.js":"_astro/VideoPlayer.3RYyfnye.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources4.js":"_astro/resources4.BJx_VeA1.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources.js":"_astro/resources.CJe4e4mG.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources5.js":"_astro/resources5.CaZN9fOx.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources3.js":"_astro/resources3.Cd2IjdqO.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js":"_astro/ViteDevServerStopped.BrYE38uI.js","/Users/johanlorck/astro-poc/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.CCWuZUHy.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/index2.js":"_astro/index2.RXGuUYAD.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/index3.js":"_astro/index3.DuTvH4Nm.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/index4.js":"_astro/index4.BPZCNSQg.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources8.js":"_astro/resources8.BYBeJXDT.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/BroadcastDisplayedDocument.js":"_astro/BroadcastDisplayedDocument.DCTjPJFB.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/resources7.js":"_astro/resources7.zay985_J.js","/Users/johanlorck/astro-poc/node_modules/@sanity/astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.VZT_6TXC.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/QRCodeSVG.js":"_astro/QRCodeSVG.CaqyGIjE.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/LiveQueries.js":"_astro/LiveQueries.CAcZ_NUz.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessageDocuments.js":"_astro/PostMessageDocuments.C1SuEkwD.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessageRefreshMutations.js":"_astro/PostMessageRefreshMutations.QFjdudfX.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessagePerspective.js":"_astro/PostMessagePerspective.0v5VQE1K.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessagePreviewSnapshots.js":"_astro/PostMessagePreviewSnapshots.DRwbwvqt.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessageSchema.js":"_astro/PostMessageSchema.OE5NxBHO.js","/Users/johanlorck/astro-poc/node_modules/sanity/lib/_chunks-es/PostMessageTelemetry.js":"_astro/PostMessageTelemetry.YLnHLuRZ.js","/Users/johanlorck/astro-poc/node_modules/urlpattern-polyfill/index.js":"_astro/index.DPyTNidZ.js","/Users/johanlorck/astro-poc/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CsPmFsGn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.ico","/favicon.svg","/_astro/BroadcastDisplayedDocument.DCTjPJFB.js","/_astro/DisplayedDocumentBroadcaster.e2xizPr-.js","/_astro/LiveQueries.CAcZ_NUz.js","/_astro/PostMessageDocuments.C1SuEkwD.js","/_astro/PostMessagePerspective.0v5VQE1K.js","/_astro/PostMessagePreviewSnapshots.DRwbwvqt.js","/_astro/PostMessageRefreshMutations.QFjdudfX.js","/_astro/PostMessageSchema.OE5NxBHO.js","/_astro/PostMessageTelemetry.YLnHLuRZ.js","/_astro/PresentationToolGrantsCheck.BS8_7MHW.js","/_astro/QRCodeSVG.CaqyGIjE.js","/_astro/VideoPlayer.3RYyfnye.js","/_astro/ViteDevServerStopped.BrYE38uI.js","/_astro/browser.lMsfJV3V.js","/_astro/client.7PiuiyYU.js","/_astro/client.D75h_c__.js","/_astro/index.BeoUHn-y.js","/_astro/index.DPyTNidZ.js","/_astro/index.DbE_bXrC.js","/_astro/index2.RXGuUYAD.js","/_astro/index3.DuTvH4Nm.js","/_astro/index4.BPZCNSQg.js","/_astro/refractor.CCWuZUHy.js","/_astro/refractor.VZT_6TXC.js","/_astro/resources.CJe4e4mG.js","/_astro/resources2.DGBwvEda.js","/_astro/resources3.Cd2IjdqO.js","/_astro/resources4.BJx_VeA1.js","/_astro/resources5.CaZN9fOx.js","/_astro/resources6.BHmPcXiL.js","/_astro/resources7.zay985_J.js","/_astro/resources8.BYBeJXDT.js","/_astro/stegaEncodeSourceMap.DzkpJKvi.js","/_astro/studio-component.Bfm2OE_a.js","/_astro/studio-component.CsPmFsGn.js","/_astro/v4.BKrj-4V8.js","/_astro/visual-editing-component.BVK9v00a.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_RYNUECqJ.mjs","/_worker.js/chunks/astro-designed-error-pages_Cc57cJks.mjs","/_worker.js/chunks/astro_Db2Fr9s-.mjs","/_worker.js/chunks/browser_SoR-2ztN.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_BtKt1zdm.mjs","/_worker.js/chunks/index_CPG2is65.mjs","/_worker.js/chunks/noop-middleware_aFKjo1W_.mjs","/_worker.js/chunks/page-ssr_JMJQddy9.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/queries_DGpdOEMr.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_C-FNxWI_.mjs","/_worker.js/chunks/stegaEncodeSourceMap_DZZmdRV_.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/server_l6gAZFHD.mjs","/_worker.js/pages/_lang_/_---slug_.astro.mjs","/_worker.js/pages/studio/_---params_.astro.mjs","/_worker.js/pages/preview/_lang_/_---slug_.astro.mjs"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["fr","en"],"defaultLocale":"fr","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"XhwJnk8kYN0vaBuWvdW6CRo4DgYQoh8JYRQMNAL75lM=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
