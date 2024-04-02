import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DoZt9IjQ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_VPuxQjit.mjs');
const _page1 = () => import('./chunks/404_BENKYAXB.mjs');
const _page2 = () => import('./chunks/como-comprar_BqsjP8kg.mjs');
const _page3 = () => import('./chunks/comunidad_1g2p_W5O.mjs');
const _page4 = () => import('./chunks/contacto_BGZAaHqi.mjs');
const _page5 = () => import('./chunks/empaques_DLwtgrc9.mjs');
const _page6 = () => import('./chunks/envios_C0RW8GkR.mjs');
const _page7 = () => import('./chunks/kit-sanacion_BoaXb-8G.mjs');
const _page8 = () => import('./chunks/legales_Jr1ALdwu.mjs');
const _page9 = () => import('./chunks/nosotras_CvjSNyyE.mjs');
const _page10 = () => import('./chunks/_filter__I_ABhV6t.mjs');
const _page11 = () => import('./chunks/_id__5phcqq07.mjs');
const _page12 = () => import('./chunks/index_C5wANFYu.mjs');
const _page13 = () => import('./chunks/index_CuYmciID.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/como-comprar.astro", _page2],
    ["src/pages/comunidad.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/empaques.astro", _page5],
    ["src/pages/envios.astro", _page6],
    ["src/pages/kit-sanacion.astro", _page7],
    ["src/pages/legales.astro", _page8],
    ["src/pages/nosotras.astro", _page9],
    ["src/pages/tienda/[filter].astro", _page10],
    ["src/pages/tienda/[id].astro", _page11],
    ["src/pages/tienda/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c5f24cf8-bf02-46e1-be5b-83564a3b807d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
