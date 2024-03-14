import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DFsC8YSR.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VPuxQjit.mjs');
const _page1 = () => import('./chunks/404_DtO36SHl.mjs');
const _page2 = () => import('./chunks/comunidad_DFuznL_E.mjs');
const _page3 = () => import('./chunks/contacto_DNYF_tE2.mjs');
const _page4 = () => import('./chunks/envios_DsLErqkX.mjs');
const _page5 = () => import('./chunks/kit-sanacion_VaWBlps3.mjs');
const _page6 = () => import('./chunks/legales_Cp6YrB69.mjs');
const _page7 = () => import('./chunks/nosotras_DjjtqZPI.mjs');
const _page8 = () => import('./chunks/test_DyeYCMhx.mjs');
const _page9 = () => import('./chunks/producto_B3gQf1ZT.mjs');
const _page10 = () => import('./chunks/_id__CZkbtzaq.mjs');
const _page11 = () => import('./chunks/index_Qyu9cWha.mjs');
const _page12 = () => import('./chunks/index_CqAqByPd.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/comunidad.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/envios.astro", _page4],
    ["src/pages/kit-sanacion.astro", _page5],
    ["src/pages/legales.astro", _page6],
    ["src/pages/nosotras.astro", _page7],
    ["src/pages/test.astro", _page8],
    ["src/pages/tienda/producto.astro", _page9],
    ["src/pages/tienda/[id].astro", _page10],
    ["src/pages/tienda/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c51229f2-c3da-4396-9aa8-e28fbe45c5cf"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
