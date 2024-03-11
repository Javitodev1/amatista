import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BJJcvBo6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VPuxQjit.mjs');
const _page1 = () => import('./chunks/404_nVrFtE34.mjs');
const _page2 = () => import('./chunks/comunidad_yGpNWZov.mjs');
const _page3 = () => import('./chunks/contacto_4EwwRHEE.mjs');
const _page4 = () => import('./chunks/envios_DmMuFT1Y.mjs');
const _page5 = () => import('./chunks/legales_23PROudG.mjs');
const _page6 = () => import('./chunks/nosotras_q_H35q8N.mjs');
const _page7 = () => import('./chunks/test_DzUq-5gy.mjs');
const _page8 = () => import('./chunks/producto_MZINxxu3.mjs');
const _page9 = () => import('./chunks/_id__BabBO98n.mjs');
const _page10 = () => import('./chunks/index_Bm-L1J3N.mjs');
const _page11 = () => import('./chunks/index_swn93Fme.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/comunidad.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/envios.astro", _page4],
    ["src/pages/legales.astro", _page5],
    ["src/pages/nosotras.astro", _page6],
    ["src/pages/test.astro", _page7],
    ["src/pages/tienda/producto.astro", _page8],
    ["src/pages/tienda/[id].astro", _page9],
    ["src/pages/tienda/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "d02bdebb-be50-44e1-9d87-c07330901923"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
