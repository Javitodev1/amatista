import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cSt2bXhg.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DksXqMnc.mjs');
const _page1 = () => import('./chunks/404_D9e8LNdV.mjs');
const _page2 = () => import('./chunks/comunidad_ByXVlv-i.mjs');
const _page3 = () => import('./chunks/contacto_U0P-I6fL.mjs');
const _page4 = () => import('./chunks/legales_B12agSTp.mjs');
const _page5 = () => import('./chunks/nosotras_DPHv0oVS.mjs');
const _page6 = () => import('./chunks/test_Bz_Zv1hy.mjs');
const _page7 = () => import('./chunks/index_iKTF_qmy.mjs');
const _page8 = () => import('./chunks/index_D2OSL_5c.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/comunidad.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/legales.astro", _page4],
    ["src/pages/nosotras.astro", _page5],
    ["src/pages/test.astro", _page6],
    ["src/pages/tienda/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f43226f8-1848-465d-8fa4-1878cc79011f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
