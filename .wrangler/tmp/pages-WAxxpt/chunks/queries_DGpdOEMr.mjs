globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, g as addAttribute, l as renderHead, n as renderSlot, m as maybeRenderHead, s as spreadAttributes } from './astro/server_l6gAZFHD.mjs';
import { s as stegaClean, a as sanityClient } from './page-ssr_JMJQddy9.mjs';
/* empty css                          */

const $$Astro$c = createAstro();
const $$VisualEditing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$VisualEditing;
  const { enabled, zIndex } = Astro2.props;
  return renderTemplate`${enabled ? renderTemplate`${renderComponent($$result, "VisualEditingComponent", null, { "client:only": "react", "zIndex": zIndex, "client:component-hydration": "only", "client:component-path": "/Users/johanlorck/astro-poc/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component", "client:component-export": "VisualEditingComponent" })}` : null}`;
}, "/Users/johanlorck/astro-poc/node_modules/@sanity/astro/dist/visual-editing/visual-editing.astro", void 0);

const $$Astro$b = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Astro POC",
    description,
    lang = "fr",
    noIndex = false,
    translations = [],
    currentSlug,
    preview = false
  } = Astro2.props;
  const cleanTitle = stegaClean(title);
  const cleanDescription = stegaClean(description || "");
  const siteUrl = Astro2.site?.origin || Astro2.url.origin;
  const canonicalUrl = `${siteUrl}/${lang}/${currentSlug || ""}`;
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${cleanTitle}</title>${cleanDescription && renderTemplate`<meta name="description"${addAttribute(cleanDescription, "content")}>`}${noIndex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}>${translations?.map((t) => renderTemplate`<link rel="alternate"${addAttribute(t.language, "hreflang")}${addAttribute(`${siteUrl}/${t.language}/${t.slug}`, "href")}>`)}${currentSlug && renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(canonicalUrl, "href")}>`}<meta property="og:title"${addAttribute(cleanTitle, "content")}>${cleanDescription && renderTemplate`<meta property="og:description"${addAttribute(cleanDescription, "content")}>`}<meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:locale"${addAttribute(lang === "fr" ? "fr_FR" : "en_US", "content")}><meta property="og:type" content="website">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${preview && renderTemplate`${renderComponent($$result, "VisualEditing", $$VisualEditing, { "data-astro-cid-sckkx6r4": true })}`} </body></html>`;
}, "/Users/johanlorck/astro-poc/src/layouts/Layout.astro", void 0);

const example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
function parseAssetId(ref) {
  const [, id, dimensionString, format] = ref.split("-");
  if (!id || !dimensionString || !format)
    throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
  const [imgWidthStr, imgHeightStr] = dimensionString.split("x"), width = +imgWidthStr, height = +imgHeightStr;
  if (!(isFinite(width) && isFinite(height)))
    throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "${example}".`);
  return { id, width, height, format };
}
const isRef = (src) => {
  const source = src;
  return source ? typeof source._ref == "string" : false;
}, isAsset = (src) => {
  const source = src;
  return source ? typeof source._id == "string" : false;
}, isAssetStub = (src) => {
  const source = src;
  return source && source.asset ? typeof source.asset.url == "string" : false;
}, isInProgressUpload = (src) => {
  if (typeof src == "object" && src !== null) {
    const obj = src;
    return obj._upload && (!obj.asset || !obj.asset._ref);
  }
  return false;
};
function parseSource(source) {
  if (!source)
    return null;
  let image;
  if (typeof source == "string" && isUrl(source))
    image = {
      asset: { _ref: urlToId(source) }
    };
  else if (typeof source == "string")
    image = {
      asset: { _ref: source }
    };
  else if (isRef(source))
    image = {
      asset: source
    };
  else if (isAsset(source))
    image = {
      asset: {
        _ref: source._id || ""
      }
    };
  else if (isAssetStub(source))
    image = {
      asset: {
        _ref: urlToId(source.asset.url)
      }
    };
  else if (typeof source.asset == "object")
    image = { ...source };
  else
    return null;
  const img = source;
  return img.crop && (image.crop = img.crop), img.hotspot && (image.hotspot = img.hotspot), applyDefaults(image);
}
function isUrl(url) {
  return /^https?:\/\//.test(`${url}`);
}
function urlToId(url) {
  return `image-${url.split("/").slice(-1)[0]}`.replace(/\.([a-z]+)$/, "-$1");
}
function applyDefaults(image) {
  if (image.crop && image.hotspot)
    return image;
  const result = { ...image };
  return result.crop || (result.crop = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }), result.hotspot || (result.hotspot = {
    x: 0.5,
    y: 0.5,
    height: 1,
    width: 1
  }), result;
}
const SPEC_NAME_TO_URL_NAME_MAPPINGS = [
  ["width", "w"],
  ["height", "h"],
  ["format", "fm"],
  ["download", "dl"],
  ["blur", "blur"],
  ["sharpen", "sharp"],
  ["invert", "invert"],
  ["orientation", "or"],
  ["minHeight", "min-h"],
  ["maxHeight", "max-h"],
  ["minWidth", "min-w"],
  ["maxWidth", "max-w"],
  ["quality", "q"],
  ["fit", "fit"],
  ["crop", "crop"],
  ["saturation", "sat"],
  ["auto", "auto"],
  ["dpr", "dpr"],
  ["pad", "pad"],
  ["frame", "frame"]
];
function urlForImage$1(options) {
  let spec = { ...options || {} };
  const source = spec.source;
  delete spec.source;
  const image = parseSource(source);
  if (!image) {
    if (source && isInProgressUpload(source))
      return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
    throw new Error(`Unable to resolve image URL from source (${JSON.stringify(source)})`);
  }
  const id = image.asset._ref || image.asset._id || "", asset = parseAssetId(id), cropLeft = Math.round(image.crop.left * asset.width), cropTop = Math.round(image.crop.top * asset.height), crop = {
    left: cropLeft,
    top: cropTop,
    width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
    height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
  }, hotSpotVerticalRadius = image.hotspot.height * asset.height / 2, hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2, hotSpotCenterX = image.hotspot.x * asset.width, hotSpotCenterY = image.hotspot.y * asset.height, hotspot = {
    left: hotSpotCenterX - hotSpotHorizontalRadius,
    top: hotSpotCenterY - hotSpotVerticalRadius,
    right: hotSpotCenterX + hotSpotHorizontalRadius,
    bottom: hotSpotCenterY + hotSpotVerticalRadius
  };
  return spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop || (spec = { ...spec, ...fit({ crop, hotspot }, spec) }), specToImageUrl({ ...spec, asset });
}
function specToImageUrl(spec) {
  const cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), vanityStub = spec.vanityName ? `/${spec.vanityName}` : "", filename = `${spec.asset.id}-${spec.asset.width}x${spec.asset.height}.${spec.asset.format}${vanityStub}`, baseUrl = spec.mediaLibraryId ? `${cdnUrl}/media-libraries/${spec.mediaLibraryId}/images/${filename}` : `${cdnUrl}/images/${spec.projectId}/${spec.dataset}/${filename}`, params = [];
  if (spec.rect) {
    const { left, top, width, height } = spec.rect;
    (left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width) && params.push(`rect=${left},${top},${width},${height}`);
  }
  spec.bg && params.push(`bg=${spec.bg}`), spec.focalPoint && (params.push(`fp-x=${spec.focalPoint.x}`), params.push(`fp-y=${spec.focalPoint.y}`));
  const flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
  return flip && params.push(`flip=${flip}`), SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach((mapping) => {
    const [specName, param] = mapping;
    typeof spec[specName] < "u" ? params.push(`${param}=${encodeURIComponent(spec[specName])}`) : typeof spec[param] < "u" && params.push(`${param}=${encodeURIComponent(spec[param])}`);
  }), params.length === 0 ? baseUrl : `${baseUrl}?${params.join("&")}`;
}
function fit(source, spec) {
  let cropRect;
  const imgWidth = spec.width, imgHeight = spec.height;
  if (!(imgWidth && imgHeight))
    return { width: imgWidth, height: imgHeight, rect: source.crop };
  const crop = source.crop, hotspot = source.hotspot, desiredAspectRatio = imgWidth / imgHeight;
  if (crop.width / crop.height > desiredAspectRatio) {
    const height = Math.round(crop.height), width = Math.round(height * desiredAspectRatio), top = Math.max(0, Math.round(crop.top)), hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
    let left = Math.max(0, Math.round(hotspotXCenter - width / 2));
    left < crop.left ? left = crop.left : left + width > crop.left + crop.width && (left = crop.left + crop.width - width), cropRect = { left, top, width, height };
  } else {
    const width = crop.width, height = Math.round(width / desiredAspectRatio), left = Math.max(0, Math.round(crop.left)), hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
    let top = Math.max(0, Math.round(hotspotYCenter - height / 2));
    top < crop.top ? top = crop.top : top + height > crop.top + crop.height && (top = crop.top + crop.height - height), cropRect = { left, top, width, height };
  }
  return {
    width: imgWidth,
    height: imgHeight,
    rect: cropRect
  };
}
const validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], validAutoModes = ["format"];
function isSanityModernClientLike(client) {
  return client && "config" in client ? typeof client.config == "function" : false;
}
function isSanityClientLike(client) {
  return client && "clientConfig" in client ? typeof client.clientConfig == "object" : false;
}
function clientConfigToOptions(config) {
  const { apiHost: apiUrl, projectId, dataset } = config, baseOptions = {
    baseUrl: (apiUrl || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn.")
  }, resource = config["~experimental_resource"];
  if (resource?.type === "media-library") {
    if (typeof resource.id != "string" || resource.id.length === 0)
      throw new Error('Media library clients must include an id in "~experimental_resource"');
    return { ...baseOptions, mediaLibraryId: resource.id };
  }
  return { ...baseOptions, projectId, dataset };
}
function rewriteSpecName(key) {
  const specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
  for (const entry of specs) {
    const [specName, param] = entry;
    if (key === specName || key === param)
      return specName;
  }
  return key;
}
function getOptions(_options) {
  let options = {};
  return isSanityModernClientLike(_options) ? options = clientConfigToOptions(_options.config()) : isSanityClientLike(_options) ? options = clientConfigToOptions(_options.clientConfig) : options = _options || {}, options;
}
function createBuilder(Builder, _options) {
  const options = getOptions(_options);
  return new Builder(null, options);
}
function createImageUrlBuilder(options) {
  return createBuilder(ImageUrlBuilderImpl, options);
}
function constructNewOptions(currentOptions, options) {
  const baseUrl = options.baseUrl || currentOptions.baseUrl, newOptions = { baseUrl };
  for (const key in options)
    if (options.hasOwnProperty(key)) {
      const specKey = rewriteSpecName(key);
      newOptions[specKey] = options[key];
    }
  return { baseUrl, ...newOptions };
}
class ImageUrlBuilderImpl {
  options;
  constructor(parent, options) {
    this.options = parent ? { ...parent.options || {}, ...options || {} } : { ...options || {} };
  }
  withOptions(options) {
    const newOptions = constructNewOptions(this.options, options);
    return new ImageUrlBuilderImpl(this, newOptions);
  }
  // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
  // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
  // studio, the 'image'-document must be provided.
  image(source) {
    return this.withOptions({ source });
  }
  // Specify the dataset
  dataset(dataset) {
    return this.withOptions({ dataset });
  }
  // Specify the projectId
  projectId(projectId) {
    return this.withOptions({ projectId });
  }
  withClient(client) {
    const newOptions = getOptions(client), preservedOptions = { ...this.options };
    return delete preservedOptions.baseUrl, delete preservedOptions.projectId, delete preservedOptions.dataset, delete preservedOptions.mediaLibraryId, new ImageUrlBuilderImpl(null, { ...newOptions, ...preservedOptions });
  }
  // Specify background color
  bg(bg) {
    return this.withOptions({ bg });
  }
  // Set DPR scaling factor
  dpr(dpr) {
    return this.withOptions(dpr && dpr !== 1 ? { dpr } : {});
  }
  // Specify the width of the image in pixels
  width(width) {
    return this.withOptions({ width });
  }
  // Specify the height of the image in pixels
  height(height) {
    return this.withOptions({ height });
  }
  // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
  focalPoint(x, y) {
    return this.withOptions({ focalPoint: { x, y } });
  }
  maxWidth(maxWidth) {
    return this.withOptions({ maxWidth });
  }
  minWidth(minWidth) {
    return this.withOptions({ minWidth });
  }
  maxHeight(maxHeight) {
    return this.withOptions({ maxHeight });
  }
  minHeight(minHeight) {
    return this.withOptions({ minHeight });
  }
  // Specify width and height in pixels
  size(width, height) {
    return this.withOptions({ width, height });
  }
  // Specify blur between 0 and 100
  blur(blur) {
    return this.withOptions({ blur });
  }
  sharpen(sharpen) {
    return this.withOptions({ sharpen });
  }
  // Specify the desired rectangle of the image
  rect(left, top, width, height) {
    return this.withOptions({ rect: { left, top, width, height } });
  }
  // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
  format(format) {
    return this.withOptions({ format });
  }
  invert(invert) {
    return this.withOptions({ invert });
  }
  // Rotation in degrees 0, 90, 180, 270
  orientation(orientation) {
    return this.withOptions({ orientation });
  }
  // Compression quality 0-100
  quality(quality) {
    return this.withOptions({ quality });
  }
  // Make it a download link. Parameter is default filename.
  forceDownload(download) {
    return this.withOptions({ download });
  }
  // Flip image horizontally
  flipHorizontal() {
    return this.withOptions({ flipHorizontal: true });
  }
  // Flip image vertically
  flipVertical() {
    return this.withOptions({ flipVertical: true });
  }
  // Ignore crop/hotspot from image record, even when present
  ignoreImageParams() {
    return this.withOptions({ ignoreImageParams: true });
  }
  fit(value) {
    if (validFits.indexOf(value) === -1)
      throw new Error(`Invalid fit mode "${value}"`);
    return this.withOptions({ fit: value });
  }
  crop(value) {
    if (validCrops.indexOf(value) === -1)
      throw new Error(`Invalid crop mode "${value}"`);
    return this.withOptions({ crop: value });
  }
  // Saturation
  saturation(saturation) {
    return this.withOptions({ saturation });
  }
  auto(value) {
    if (validAutoModes.indexOf(value) === -1)
      throw new Error(`Invalid auto mode "${value}"`);
    return this.withOptions({ auto: value });
  }
  // Specify the number of pixels to pad the image
  pad(pad) {
    return this.withOptions({ pad });
  }
  // Vanity URL for more SEO friendly URLs
  vanityName(value) {
    return this.withOptions({ vanityName: value });
  }
  frame(frame) {
    if (frame !== 1)
      throw new Error(`Invalid frame value "${frame}"`);
    return this.withOptions({ frame });
  }
  // Gets the url based on the submitted parameters
  url() {
    return urlForImage$1(this.options);
  }
  // Alias for url()
  toString() {
    return this.url();
  }
}
function once(fn) {
  let didCall = false, returnValue;
  return (...args) => (didCall || (returnValue = fn(...args), didCall = true), returnValue);
}
const createWarningPrinter = (message) => once((...args) => {
  console.warn(message.join(" "), ...args);
}), printNoDefaultExport = createWarningPrinter([
  "The default export of @sanity/image-url has been deprecated. Use the named export `createImageUrlBuilder` instead."
]);
function defineDeprecated(createImageUrlBuilder2) {
  return function(options) {
    return printNoDefaultExport(), createImageUrlBuilder2(options);
  };
}

const deprecatedcreateImageUrlBuilder = defineDeprecated(createImageUrlBuilder);

const builder = deprecatedcreateImageUrlBuilder(sanityClient);
const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return void 0;
  }
  return builder.image(source).auto("format").fit("max");
};

const $$Astro$a = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { section } = Astro2.props;
  const imageUrl = urlForImage(section.image)?.width(1920).height(800).url();
  return renderTemplate`${maybeRenderHead()}<section class="hero"${addAttribute(imageUrl ? `background-image: url(${imageUrl})` : "", "style")} data-astro-cid-7nmnspah> <div class="hero-overlay" data-astro-cid-7nmnspah> <div class="hero-content" data-astro-cid-7nmnspah> <h1 data-astro-cid-7nmnspah>${section.title}</h1> ${section.subtitle && renderTemplate`<p class="subtitle" data-astro-cid-7nmnspah>${section.subtitle}</p>`} ${section.cta?.text && section.cta?.url && renderTemplate`<a${addAttribute(section.cta.url, "href")} class="cta-button" data-astro-cid-7nmnspah> ${section.cta.text} </a>`} </div> </div> </section> `;
}, "/Users/johanlorck/astro-poc/src/components/sections/HeroSection.astro", void 0);

function isPortableTextSpan(node) {
	return node._type === "span" && "text" in node && typeof node.text == "string" && (node.marks === void 0 || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
function isPortableTextBlock(node) {
	return typeof node._type == "string" && node._type[0] !== "@" && (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key == "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child == "object" && "_type" in child);
}
function isPortableTextListItemBlock(block) {
	return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (block.level === void 0 || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
	return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
	return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
	return node._type === "@text";
}
const knownDecorators = [
	"strong",
	"em",
	"code",
	"underline",
	"strike-through"
];
function sortMarksByOccurences(span, index, blockChildren) {
	if (!isPortableTextSpan(span) || !span.marks || !span.marks.length) return [];
	let marks = span.marks.slice(), occurences = {};
	return marks.forEach((mark) => {
		occurences[mark] = 1;
		for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
			let sibling = blockChildren[siblingIndex];
			if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
			else break;
		}
	}), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
	let aOccurences = occurences[markA], bOccurences = occurences[markB];
	if (aOccurences !== bOccurences) return bOccurences - aOccurences;
	let aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
	return aKnownPos === bKnownPos ? markA.localeCompare(markB) : aKnownPos - bKnownPos;
}
function buildMarksTree(block) {
	let { children } = block, markDefs = block.markDefs ?? [];
	if (!children || !children.length) return [];
	let sortedMarks = children.map(sortMarksByOccurences), rootNode = {
		_type: "@span",
		children: [],
		markType: "<unknown>"
	}, nodeStack = [rootNode];
	for (let i = 0; i < children.length; i++) {
		let span = children[i];
		if (!span) continue;
		let marksNeeded = sortedMarks[i] || [], pos = 1;
		if (nodeStack.length > 1) for (; pos < nodeStack.length; pos++) {
			let mark = nodeStack[pos]?.markKey || "", index = marksNeeded.indexOf(mark);
			if (index === -1) break;
			marksNeeded.splice(index, 1);
		}
		nodeStack = nodeStack.slice(0, pos);
		let currentNode = nodeStack[nodeStack.length - 1];
		if (currentNode) {
			for (let markKey of marksNeeded) {
				let markDef = markDefs?.find((def) => def._key === markKey), node = {
					_type: "@span",
					_key: span._key,
					children: [],
					markDef,
					markType: markDef ? markDef._type : markKey,
					markKey
				};
				currentNode.children.push(node), nodeStack.push(node), currentNode = node;
			}
			if (isPortableTextSpan(span)) {
				let lines = span.text.split("\n");
				for (let line = lines.length; line-- > 1;) lines.splice(line, 0, "\n");
				currentNode.children = currentNode.children.concat(lines.map((text) => ({
					_type: "@text",
					text
				})));
			} else currentNode.children = currentNode.children.concat(span);
		}
	}
	return rootNode.children;
}
function nestLists(blocks, mode) {
	let tree = [], currentList;
	for (let i = 0; i < blocks.length; i++) {
		let block = blocks[i];
		if (block) {
			if (!isPortableTextListItemBlock(block)) {
				tree.push(block), currentList = void 0;
				continue;
			}
			if (!currentList) {
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (blockMatchesList(block, currentList)) {
				currentList.children.push(block);
				continue;
			}
			if ((block.level || 1) > currentList.level) {
				let newList = listFromBlock(block, i, mode);
				if (mode === "html") {
					let lastListItem = currentList.children[currentList.children.length - 1], newLastChild = {
						...lastListItem,
						children: [...lastListItem.children, newList]
					};
					currentList.children[currentList.children.length - 1] = newLastChild;
				} else currentList.children.push(newList);
				currentList = newList;
				continue;
			}
			if ((block.level || 1) < currentList.level) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
				if (match) {
					currentList = match, currentList.children.push(block);
					continue;
				}
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (block.listItem !== currentList.listItem) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, { level: block.level || 1 });
				if (match && match.listItem === block.listItem) {
					currentList = match, currentList.children.push(block);
					continue;
				} else {
					currentList = listFromBlock(block, i, mode), tree.push(currentList);
					continue;
				}
			}
			console.warn("Unknown state encountered for block", block), tree.push(block);
		}
	}
	return tree;
}
function blockMatchesList(block, list) {
	return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
	return {
		_type: "@list",
		_key: `${block._key || `${index}`}-parent`,
		mode,
		level: block.level || 1,
		listItem: block.listItem,
		children: [block]
	};
}
function findListMatching(rootNode, matching) {
	let level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
	if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
	if (!("children" in rootNode)) return;
	let node = rootNode.children[rootNode.children.length - 1];
	return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
const LIST_NEST_MODE_HTML = "html";

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}
const nodeComponentsMap = /* @__PURE__ */ new WeakMap();
function setNodeComponents(node, Default, Unknown) {
  nodeComponentsMap.set(node, { Default, Unknown });
}
function getNodeComponents(node) {
  return nodeComponentsMap.get(node);
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function usePortableText(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$9 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$8 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$7 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$Astro$5 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Text;
  const { node } = Astro2.props;
  return renderTemplate`${node.text}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/Text.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro();
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      text: $$Text,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type, fallbackComponent) => {
    const component = ((component2) => {
      return component2[type] || component2;
    })(components[nodeType]);
    if (isComponent(component)) {
      return component;
    }
    missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
    return fallbackComponent;
  };
  let fallbackRenderOptions;
  const portableTextRender = (options, isInline) => {
    if (!fallbackRenderOptions) {
      throw new Error(
        "[PortableText portableTextRender] fallbackRenderOptions is undefined"
      );
    }
    const renderChildren = (children, inline = false) => {
      return children?.map(portableTextRender(options, inline)) ?? [];
    };
    const renderOptions = { ...fallbackRenderOptions, ...options ?? {} };
    return function renderNode(node, index) {
      function run(handler, props) {
        if (!isComponent(handler)) {
          throw new Error(
            `[PortableText render] No handler found for node type ${node._type}.`
          );
        }
        return handler(props);
      }
      if (isPortableTextToolkitList(node)) {
        const UnknownComponent2 = components.unknownList ?? $$UnknownList;
        setNodeComponents(node, $$List, UnknownComponent2);
        return run(renderOptions.list, {
          Component: provideComponent("list", node.listItem, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: renderChildren(node.children, false)
        });
      }
      if (isPortableTextListItemBlock(node)) {
        const { listItem, ...blockNode } = node;
        const isStyled = node.style && node.style !== "normal";
        node.children = isStyled ? renderNode(blockNode, index) : buildMarksTree(node);
        const UnknownComponent2 = components.unknownListItem ?? $$UnknownListItem;
        setNodeComponents(node, $$ListItem, UnknownComponent2);
        return run(renderOptions.listItem, {
          Component: provideComponent(
            "listItem",
            node.listItem,
            UnknownComponent2
          ),
          props: asComponentProps(node, index, false),
          children: isStyled ? node.children : renderChildren(node.children, true)
        });
      }
      if (isPortableTextToolkitSpan(node)) {
        const UnknownComponent2 = components.unknownMark ?? $$UnknownMark;
        setNodeComponents(node, $$Mark, UnknownComponent2);
        return run(renderOptions.mark, {
          Component: provideComponent("mark", node.markType, UnknownComponent2),
          props: asComponentProps(node, index, true),
          children: renderChildren(node.children, true)
        });
      }
      if (isPortableTextBlock(node)) {
        node.style ??= "normal";
        node.children = buildMarksTree(node);
        const UnknownComponent2 = components.unknownBlock ?? $$UnknownBlock;
        setNodeComponents(node, $$Block, UnknownComponent2);
        return run(renderOptions.block, {
          Component: provideComponent("block", node.style, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: renderChildren(node.children, true)
        });
      }
      if (isPortableTextToolkitTextNode(node)) {
        const isHardBreak = "\n" === node.text;
        const props = asComponentProps(node, index, true);
        if (isHardBreak) {
          return run(renderOptions.hardBreak, {
            Component: isComponent(components.hardBreak) ? components.hardBreak : $$HardBreak,
            props
          });
        }
        return run(renderOptions.text, {
          Component: isComponent(components.text) ? components.text : $$Text,
          props
        });
      }
      const UnknownComponent = components.unknownType ?? $$UnknownType;
      return run(renderOptions.type, {
        Component: provideComponent("type", node._type, UnknownComponent),
        props: asComponentProps(
          node,
          index,
          isInline ?? false
          /* default to block */
        )
      });
    };
  };
  globalThis[key] = (node) => ({
    getDefaultComponent: provideDefaultComponent.bind(null, node),
    getUnknownComponent: provideUnknownComponent.bind(null, node),
    render: (options) => node.children?.map(portableTextRender(options))
  });
  const provideDefaultComponent = (node) => {
    const DefaultComponent = getNodeComponents(node)?.Default;
    if (DefaultComponent) return DefaultComponent;
    if (isPortableTextToolkitList(node)) return $$List;
    if (isPortableTextListItemBlock(node)) return $$ListItem;
    if (isPortableTextToolkitSpan(node)) return $$Mark;
    if (isPortableTextBlock(node)) return $$Block;
    if (isPortableTextToolkitTextNode(node)) {
      return "\n" === node.text ? $$HardBreak : $$Text;
    }
    return $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    const UnknownComponent = getNodeComponents(node)?.Unknown;
    if (UnknownComponent) return UnknownComponent;
    if (isPortableTextToolkitList(node)) {
      return components.unknownList ?? $$UnknownList;
    }
    if (isPortableTextListItemBlock(node)) {
      return components.unknownListItem ?? $$UnknownListItem;
    }
    if (isPortableTextToolkitSpan(node)) {
      return components.unknownMark ?? $$UnknownMark;
    }
    if (isPortableTextBlock(node)) {
      return components.unknownBlock ?? $$UnknownBlock;
    }
    if (!isPortableTextToolkitTextNode(node)) {
      return components.unknownType ?? $$UnknownType;
    }
    throw new Error(
      `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
    );
  };
  const blocks = Array.isArray(value) ? value : value ? [value] : [];
  const nodes = nestLists(blocks, listNestingMode);
  const render = (options) => {
    fallbackRenderOptions = options;
    return portableTextRender(options);
  };
  const createSlotRenderer = (slotName) => Astro2.slots.render.bind(Astro2.slots, slotName);
  const slots = [
    "type",
    "block",
    "list",
    "listItem",
    "mark",
    "text",
    "hardBreak"
  ].reduce(
    (obj, name) => {
      obj[name] = Astro2.slots.has(name) ? createSlotRenderer(name) : void 0;
      return obj;
    },
    {}
  );
  return renderTemplate`${(() => {
    const renderNode = (slotRenderer) => {
      return ({ Component, props, children }) => slotRenderer?.([{ Component, props, children }]) ?? renderTemplate`${renderComponent($$result, "Component", Component, { ...props }, { "default": ($$result2) => renderTemplate`${children}` })}`;
    };
    return nodes.map(
      render({
        type: renderNode(slots.type),
        block: renderNode(slots.block),
        list: renderNode(slots.list),
        listItem: renderNode(slots.listItem),
        mark: renderNode(slots.mark),
        text: renderNode(slots.text),
        hardBreak: renderNode(slots.hardBreak)
      })
    );
  })()}`;
}, "/Users/johanlorck/astro-poc/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="portable-text" data-astro-cid-j2qpqncs> ${renderComponent($$result, "PortableText", $$PortableText$1, { "value": value, "data-astro-cid-j2qpqncs": true })} </div> `;
}, "/Users/johanlorck/astro-poc/src/components/PortableText.astro", void 0);

const $$Astro$1 = createAstro();
const $$TextWithImageSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextWithImageSection;
  const { section } = Astro2.props;
  const imageUrl = urlForImage(section.image)?.width(800).height(600).url();
  const imageOnLeft = stegaClean(section.imagePosition) === "left";
  return renderTemplate`${maybeRenderHead()}<section class="text-with-image" data-astro-cid-zttvvkjd> <div${addAttribute(["grid", { reversed: imageOnLeft }], "class:list")} data-astro-cid-zttvvkjd> <div class="text-col" data-astro-cid-zttvvkjd> <h2 data-astro-cid-zttvvkjd>${section.heading}</h2> ${section.text && renderTemplate`${renderComponent($$result, "PortableTextRenderer", $$PortableText, { "value": section.text, "data-astro-cid-zttvvkjd": true })}`} </div> <div class="image-col" data-astro-cid-zttvvkjd> ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")}${addAttribute(section.image?.alt || "", "alt")} loading="lazy" data-astro-cid-zttvvkjd>`} </div> </div> </section> `;
}, "/Users/johanlorck/astro-poc/src/components/sections/TextWithImageSection.astro", void 0);

const $$Astro = createAstro();
const $$PageBuilder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageBuilder;
  const { sections } = Astro2.props;
  return renderTemplate`${sections.map((section) => {
    switch (section._type) {
      case "hero":
        return renderTemplate`${renderComponent($$result, "HeroSection", $$HeroSection, { "section": section })}`;
      case "textWithImage":
        return renderTemplate`${renderComponent($$result, "TextWithImageSection", $$TextWithImageSection, { "section": section })}`;
      default:
        return renderTemplate`${maybeRenderHead()}<div style="padding: 2rem; background: #f0f0f0; text-align: center;"><p>Unknown section type: ${section._type}</p></div>`;
    }
  })}`;
}, "/Users/johanlorck/astro-poc/src/components/PageBuilder.astro", void 0);

async function loadQuery({
  query,
  params = {},
  preview = false
}) {
  const token = "skejjWEP2OnfWPly63UCkuJ29UkpmXQsiPZtnNCeELseAwKB1skfAedHZdflS2GmUKAHMDhUU3sdkmw8pbNhwoFPRLblAXrwoZsPpxmKRKxtQbdfFy6dfHaKi9xXuDCg1RA01MwZ2r9PbwqFwK48wKj36FhyKU2M53Lj0HJ3eZsJ0AA3IUlm";
  const perspective = preview ? "previewDrafts" : "published";
  const data = await sanityClient.fetch(query, params, {
    perspective,
    stega: preview,
    ...preview && token ? { token } : {},
    resultSourceMap: preview ? "withKeyArraySelector" : false,
    useCdn: !preview
  });
  return { data };
}

const ALL_PAGES_QUERY = `*[_type == "page"]{
  "slug": slug.current,
  language
}`;
const PAGE_QUERY = `*[_type == "page" && language == $language && slug.current == $slug][0]{
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

export { $$Layout as $, ALL_PAGES_QUERY as A, PAGE_QUERY as P, $$PageBuilder as a, loadQuery as l };
