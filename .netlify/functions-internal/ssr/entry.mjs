import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CMnwmTgs.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VPuxQjit.mjs');
const _page1 = () => import('./chunks/404_McQIkCCo.mjs');
const _page2 = () => import('./chunks/comunidad_Dgywmx4g.mjs');
const _page3 = () => import('./chunks/contacto_CIVkVjiy.mjs');
const _page4 = () => import('./chunks/legales_BRUyI519.mjs');
const _page5 = () => import('./chunks/nosotras_um18YCgF.mjs');
const _page6 = () => import('./chunks/test_DqK26X-x.mjs');
const _page7 = () => import('./chunks/producto_BDXQzm5O.mjs');
const _page8 = () => import('./chunks/_id__CnA2V7bU.mjs');
const _page9 = () => import('./chunks/index_uDZ0sgPS.mjs');
const _page10 = () => import('./chunks/index_LRmzEK3z.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/comunidad.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/legales.astro", _page4],
    ["src/pages/nosotras.astro", _page5],
    ["src/pages/test.astro", _page6],
    ["src/pages/tienda/producto.astro", _page7],
    ["src/pages/tienda/[id].astro", _page8],
    ["src/pages/tienda/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "9e5272d0-d9ad-416a-853e-58c34479d778"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
