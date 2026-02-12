// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/favicon.ico",
    "/favicon.svg",
    "/fr/*",
    "/en/*"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/johanlorck/astro-poc/.wrangler/tmp/pages-WAxxpt/bundledWorker-0.9025305362546281.mjs";
import { isRoutingRuleMatch } from "/Users/johanlorck/astro-poc/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/johanlorck/astro-poc/.wrangler/tmp/pages-WAxxpt/bundledWorker-0.9025305362546281.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=3wrmfgj6htv.js.map
