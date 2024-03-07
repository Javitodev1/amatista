/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_xymmXf3Q.mjs';
import 'kleur/colors';
/* empty css                              */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Component } from 'react';

const $$Astro$b = createAstro("https://amatistacomunidad.com/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/javier/Dev/amatista/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$a = createAstro("https://amatistacomunidad.com/");
const $$ThemeToggleDark = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ThemeToggleDark;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg>`;
}, "/home/javier/Dev/amatista/src/icons/ThemeToggleDark.astro", void 0);

const $$Astro$9 = createAstro("https://amatistacomunidad.com/");
const $$ThemeToggleLight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeToggleLight;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg>`;
}, "/home/javier/Dev/amatista/src/icons/ThemeToggleLight.astro", void 0);

const $$Astro$8 = createAstro("https://amatistacomunidad.com/");
const $$DarkModeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$DarkModeSwitcher;
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" title="Modo Oscuro" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"${addAttribute(createTransitionScope($$result, "bipszit6"), "data-astro-transition-persist")}> ${renderComponent($$result, "ThemeToggleDarkIcon", $$ThemeToggleDark, { "id": "theme-toggle-dark-icon", "class": "hidden w-5 h-5" })} ${renderComponent($$result, "ThemeToggleLightIcon", $$ThemeToggleLight, { "id": "theme-toggle-light-icon", "class": "hidden w-5 h-5" })} </button> `;
}, "/home/javier/Dev/amatista/src/components/DarkModeSwitcher.astro", "self");

const $$Astro$7 = createAstro("https://amatistacomunidad.com/");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className, variant = "h" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(className, "class:list")}> ${variant === "v" && renderTemplate`<svg version="1.1" id="Capa_1" x="0" y="0" viewBox="0 0 994 931.275" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css" id="style1">.st33{fill:#e5ae5e}.st35{fill:#b68dad}.st37{fill:#a46f9b}.st38{fill:#a56f9b}</style><g id="g46" transform="translate(-250.6 -220.625)"><g id="g18"><g id="g17"><g id="g2"><path class="st37" d="m263.3 1136.1-3 9.3h4.3v2.5h-12.5v-2.5h5.3l56-177.3-.3-.3h-5.8v-2.5h23.5v2.5h-4.3l56 177.5h5.8v2.5h-23.5v-2.5h4.3l-25-79.5c-40 4.6-69.8 38.1-80.8 70.3zm51.6-163.3-45.8 144.5c14.5-26 40.8-50 74.3-54z" id="path1"></path><path class="st38" d="M389.9 1149.4h-26.6v-5.6h3.7l-24-76.3c-39.5 5.1-67.7 38.2-78.2 69.1l-2.3 7.2h3.7v5.6h-15.6v-5.6h5.7l55.1-174.4h-5.5v-5.6h26.6v5.6h-3.7l55 174.4h6.2v5.6zm-18.9-3.1h10.2l-.2-.5-56.5-179h-10.3l.8.8-.1.4 30.4 96.6zM263.8 1130l-.5 1.7c.3-.9.7-1.7 1-2.6zm51-152-40.6 128.1c16.9-24.3 41.2-40.4 67-44.1z" id="path2"></path></g><g id="g4"><path class="st37" d="M425.9 1062.1c8-26.8 29.3-42 48.3-42 17.8 0 33.5 13.3 35.3 42.5 7.8-27 29.3-42.5 48.5-42.5 18.8 0 35.5 14.8 35.5 48v77.3h5v2.5H576v-2.5h5v-77.3c0-32-12.8-45.5-27.3-45.5-20 0-44 25.5-44 62.5v60.3h5v2.5h-22.5v-2.5h5v-77.3c0-32-12.8-45.5-27.3-45.5-20 0-44 25.5-44 62.5v62.8h-17.5v-2.5h5v-120h-5v-2.5l17.5-3z" id="path3"></path><path class="st38" d="M600 1149.4h-25.6v-5.6h5v-75.7c0-32.4-13.3-44-25.7-44-20 0-42.5 26.1-42.5 61v58.7h5v5.6h-25.6v-5.6h5v-75.7c0-32.4-13.3-44-25.7-44-20 0-42.5 26.1-42.5 61v64.3h-20.6v-5.6h5v-116.9h-5v-5.4l20.6-3.5v35.3c10.4-23.8 30.7-34.8 46.7-34.8 15.2 0 32 9.8 36.1 36.8 10-25.2 31.1-36.8 47.7-36.8 10.3 0 19.5 4.3 26 12.1 7.3 8.7 11.1 21.7 11.1 37.5v75.7h5zm-17.5-3.1h9.4v-78.2c0-33.5-16.7-45.9-32.8-46.4 12.1 2.9 23.4 16.2 23.4 46.4zm-83.8 0h9.4v-61.2c0-11.5 2.3-22.5 6.6-32.2-1.5 3.2-2.8 6.5-3.8 10.2l-2.5 8.7-.5-9.1c-1.8-29.5-17.8-40.5-32.6-41 12.1 2.9 23.4 16.2 23.4 46.4zm-83.8 0h9.4v-61.2c0-9.5 1.6-18.7 4.6-27.1-.5 1.5-1.1 3-1.5 4.6l-3.1 10.2v-51.1l-12.2 2.1h2.8z" id="path4"></path></g><g id="g6"><path class="st37" d="M663.9 1150.4c-25.3 0-40.8-16.3-40.8-32.5 0-40.3 85.8-22.3 85.8-65 0-15-13-30-33-30-16.5 0-29.8 10.3-36.3 25h-11.5c8.5-16 25.8-27.5 48.8-27.5 27.3 0 44.3 16.3 44.3 32.5v92l5 .5v2.5h-17.5v-22c-9.5 16.7-27.3 24.5-44.8 24.5zm44.8-76.5c-23.8 14.8-72.8 12.3-72.8 44 0 15 11.3 30 30.3 30 18.8 0 40-14.5 42.5-44z" id="path5"></path><path class="st38" d="M663.9 1151.9c-26.5 0-42.3-17.3-42.3-34.1 0-21 21.9-27 43.1-32.8 22-6 42.7-11.7 42.7-32.2 0-13.7-12-28.4-31.5-28.4-15.2 0-28.2 9-34.8 24.1l-.4.9h-15.1l1.2-2.3c9.4-17.7 28.2-28.3 50.1-28.3 28.7 0 45.8 17.3 45.8 34.1v90.6l5 .5v5.5h-20.6v-18.3c-9.5 13.1-25.3 20.7-43.2 20.7zm-8.7-60.9c-16.7 5-30.5 11.4-30.5 26.9 0 14 12.4 28.5 33.5 30.7-15.1-3.6-23.9-17.3-23.9-30.7.1-14 8.9-21.7 20.9-26.9zm55.1 55.3h9.7-.3v-93.4c0-13.5-12.6-27.4-34.1-30.4 15.6 4 24.9 17.6 24.9 30.4 0 14.1-8.6 21.9-20.4 27.2 6.6-2.1 12.8-4.4 17.8-7.5l2.4-1.5v32.9c-1.7 20-11.9 33.6-24.5 40.4 9.1-4 16.7-10.6 21.6-19.3l2.9-5.1zm-3.2-69.7c-7.9 4.3-18 7.1-27.7 9.8-21.5 6-41.9 11.6-41.9 31.5 0 13.8 10.1 28.4 28.7 28.4 18.5 0 38.6-14.6 41-42.5v-27.2zm-76.3-30.3h7.8c5.2-11.1 13.6-19 23.8-22.7-13.4 3.3-24.7 11.2-31.6 22.7z" id="path6"></path></g><g id="g8"><path class="st37" d="M759.7 1025.3h-9.5v-2.5h9.5v-45.5h-5v-2.5l17.5-2.5v50.5h56.5v27.5h-3.5c0-15.3-8.8-25-22.5-25h-30.5v77c0 28.5 14.5 43.5 29.8 43.5 10.8 0 22-7.8 28.5-23.8H842c-8.5 17.3-25 25.8-41 25.8-21 0-41.3-15-41.3-45.5z" id="path7"></path><path class="st38" d="M801 1149.4c-20.6 0-42.8-14.7-42.8-47.1v-75.5h-9.5v-5.6h9.5v-42.4h-5v-5.4l20.6-2.9v50.8h56.5v30.6h-6.6v-1.6c0-14.5-8-23.4-20.9-23.4h-29v75.5c0 28.8 14.6 42 28.2 42 11.2 0 21.3-8.5 27.1-22.8l.4-1h15.1l-1.1 2.2c-8.2 16.4-24.5 26.6-42.5 26.6zm-39.7-125.6v78.6c0 25.8 14.4 39.5 30.8 43-11.5-4.9-21.4-18.8-21.4-43V974.1l-11.5 1.6h2.1zm70.2 99.9c-4.1 9.7-10.2 16.8-17.3 20.6 10.5-3.3 19.5-10.6 25.2-20.6zm-4.8-74.9h.4v-24.4h-18.6c10.9 2.4 17.7 11.4 18.2 24.4z" id="path8"></path></g><g id="g10"><path class="st37" d="m881.2 1144.9 5 .5v2.5h-23v-2.5h5v-118.8h-5v-2.5l18-3zM874 972.6c5 0 9 3.8 9 8.8 0 5-4 9-9 9s-8.8-4-8.8-9c0-5.1 3.8-8.8 8.8-8.8z" id="path9"></path><path class="st38" d="M887.8 1149.4h-26.1v-5.6h5v-115.7h-5v-5.4l21.1-3.5v124.2l5 .5zm-18-3.1H880h-.3v-123.4L867 1025h2.7v121.3zm4.2-154.4c-5.8 0-10.3-4.6-10.3-10.6 0-5.9 4.4-10.3 10.3-10.3s10.6 4.5 10.6 10.3c-.1 5.9-4.8 10.6-10.6 10.6zm0-17.8c-4.2 0-7.2 3-7.2 7.2s3.1 7.4 7.2 7.4c4.2 0 7.4-3.3 7.4-7.4 0-4.1-3.2-7.2-7.4-7.2z" id="path10"></path></g><g id="g12"><path class="st37" d="M960.2 1020.3c22 0 37.5 11.5 46.5 27.5h-11.5c-7-14.8-18.8-25-35-25-21.3 0-31.8 15-31.8 30 0 42.8 80.8 24.8 80.8 65 0 16.3-15.5 32.5-47 32.5-24.3 0-41.5-11.5-51.5-27.5h11.5c8 14.8 21.3 25 40 25 23 0 34.3-15 34.3-30 0-41.8-80.8-24.3-80.8-65 0-16.2 14.8-32.5 44.5-32.5z" id="path11"></path><path class="st38" d="M962.2 1151.9c-22.7 0-41.5-10-52.8-28.2l-1.5-2.4h15.2l.4.8c6 11 17.5 24.2 38.6 24.2 22.5 0 32.7-14.7 32.7-28.4 0-19.8-19.3-25.5-39.6-31.5-20.2-5.9-41.1-12.1-41.1-33.5 0-16.4 14.4-34.1 46.1-34.1 20.6 0 37.6 10.1 47.9 28.3l1.3 2.3h-15.2l-.4-.9c-7.4-15.6-19.3-24.1-33.6-24.1-20.7 0-30.2 14.7-30.2 28.4 0 20.5 19.5 26.2 40.2 32.2 20 5.8 40.6 11.8 40.6 32.8 0 16.5-15.2 34.1-48.6 34.1zm13.9-61.8c12.4 5.3 21.9 13 21.9 27.8 0 12.5-7.5 25.7-23.8 30.1 22.9-3.5 33.4-17.2 33.4-30.1.1-16.5-14.5-22.7-31.5-27.8zm-62.5 34.3c8.3 11.9 20.1 19.8 34.3 22.9-13.4-4.2-21.7-14.1-26.6-22.9zm35.7-101.7c-21.9 3.4-32 17.2-32 30.1 0 16.6 14.4 23 31.3 28.3-12.3-5.3-21.7-13.2-21.7-28.3 0-12.5 7.1-25.8 22.4-30.1zm46.9 23.6h7.8c-7.7-12.4-19-20.4-32.4-23.2 10.2 3.3 18.7 11.2 24.6 23.2z" id="path12"></path></g><g id="g14"><path class="st37" d="M1040.5 1025.3h-9.5v-2.5h9.5v-45.5h-5v-2.5l17.5-2.5v50.5h56.5v27.5h-3.5c0-15.3-8.8-25-22.5-25H1053v77c0 28.5 14.5 43.5 29.8 43.5 10.8 0 22-7.8 28.5-23.8h11.5c-8.5 17.3-25 25.8-41 25.8-21 0-41.3-15-41.3-45.5z" id="path13"></path><path class="st38" d="M1081.8 1149.4c-20.6 0-42.8-14.7-42.8-47.1v-75.5h-9.5v-5.6h9.5v-42.4h-5v-5.4l20.6-2.9v50.8h56.5v30.6h-6.6v-1.6c0-14.5-8-23.4-20.9-23.4h-29v75.5c0 28.8 14.6 42 28.2 42 11.2 0 21.3-8.5 27.1-22.8l.4-1h15.1l-1.1 2.2c-8.2 16.4-24.5 26.6-42.5 26.6zm-39.7-125.6v78.6c0 25.8 14.4 39.5 30.8 43-11.5-4.9-21.4-18.8-21.4-43V974.1l-11.5 1.6h2.1zm70.2 99.9c-4.1 9.7-10.2 16.8-17.3 20.6 10.5-3.3 19.5-10.6 25.2-20.6zm-4.7-74.9h.4v-24.4h-18.6c10.8 2.4 17.7 11.4 18.2 24.4z" id="path14"></path></g><g id="g16"><path class="st37" d="M1180.8 1150.4c-25.3 0-40.8-16.3-40.8-32.5 0-40.3 85.8-22.3 85.8-65 0-15-13-30-33-30-16.5 0-29.8 10.3-36.3 25H1145c8.5-16 25.8-27.5 48.8-27.5 27.3 0 44.3 16.3 44.3 32.5v92l5 .5v2.5h-17.5v-22c-9.5 16.7-27.3 24.5-44.8 24.5zm44.8-76.5c-23.8 14.8-72.8 12.3-72.8 44 0 15 11.3 30 30.3 30 18.8 0 40-14.5 42.5-44z" id="path15"></path><path class="st38" d="M1180.8 1151.9c-26.5 0-42.3-17.3-42.3-34.1 0-21 21.9-27 43.1-32.8 22-6 42.7-11.7 42.7-32.2 0-13.7-12-28.4-31.5-28.4-15.2 0-28.2 9-34.8 24.1l-.4.9h-15.1l1.2-2.3c9.4-17.7 28.2-28.3 50.1-28.3 28.7 0 45.8 17.3 45.8 34.1v90.6l5 .5v5.5H1224v-18.3c-9.5 13.1-25.3 20.7-43.2 20.7zm-8.7-60.9c-16.7 5-30.5 11.4-30.5 26.9 0 14 12.4 28.5 33.5 30.7-15.1-3.6-23.9-17.3-23.9-30.7 0-14 8.9-21.7 20.9-26.9zm55 55.3h9.7-.3v-93.4c0-13.5-12.6-27.4-34.1-30.4 15.6 4 24.9 17.6 24.9 30.4 0 14.1-8.6 21.9-20.4 27.2 6.6-2.1 12.8-4.4 17.8-7.5l2.4-1.5v32.9c-1.7 20-11.9 33.6-24.5 40.4 9.1-4 16.7-10.6 21.6-19.3l2.9-5.1zm-3.1-69.7c-7.9 4.3-18 7.1-27.7 9.8-21.5 6-41.9 11.6-41.9 31.5 0 13.8 10.1 28.4 28.7 28.4 18.5 0 38.6-14.6 41-42.5v-27.2zm-76.3-30.3h7.8c5.2-11.1 13.6-19 23.8-22.7-13.5 3.3-24.7 11.2-31.6 22.7z" id="path16"></path></g></g></g><g id="g45"><path class="st33" d="M747.1 473.8c96.7 1.7 175.8 73.3 189.9 165.8 2-10.8 3.3-21.8 3.5-33.2 1.9-108.1-84.2-197.2-192.2-199.1-108.1-1.9-197.2 84.2-199.1 192.2-.2 11.3.6 22.4 2.3 33.3 17.4-91.9 98.9-160.7 195.6-159z" id="path18"></path><g id="g41"><g id="g40"><path transform="rotate(-10.978 990.438 544.378)" class="st33" id="rect18" d="M946.4 539.8h88.2v9.5h-88.2z"></path><g id="g21"><path transform="rotate(-26.012 947.472 516.735)" class="st33" id="rect19" d="M938 512h18.9v9.5H938z"></path><path transform="rotate(-26.012 1021.428 480.668)" class="st33" id="rect20" d="M997.1 476h48.6v9.5h-48.6z"></path><path transform="rotate(-26.012 1095.387 444.603)" class="st33" id="rect21" d="M1085.9 439.9h18.9v9.5h-18.9z"></path></g><path transform="rotate(-31.428 942.137 455.234)" class="st33" id="rect22" d="M900.2 450.5h84v9.5h-84z"></path><path transform="rotate(-42.819 942.546 386.21)" class="st33" id="rect23" d="M852.6 381.5h179.6v9.5H852.6z"></path><path transform="rotate(-52.938 875.626 393.8)" class="st33" id="rect24" d="M832.6 389.1h86v9.5h-86z"></path><g id="g27"><path transform="rotate(-66.516 818.279 403.181)" class="st33" id="rect25" d="M808.9 398.5h18.9v9.5h-18.9z"></path><path transform="rotate(-66.516 850.423 329.26)" class="st33" id="rect26" d="M826.7 324.5h47.4v9.5h-47.4z"></path><path transform="rotate(-66.516 882.564 255.341)" class="st33" id="rect27" d="M873.2 250.6h18.9v9.5h-18.9z"></path></g><path transform="rotate(-75.409 787.708 358.57)" class="st33" id="rect28" d="M742.4 353.8H833v9.5h-90.6z"></path><path transform="matrix(.02343 -.9997 .9997 .02343 416.88 1044.45)" class="st33" id="rect29" d="M655 304.1h176.2v9.5H655z"></path><path transform="rotate(-12.485 693.052 354.95)" class="st33" id="rect30" d="M688.4 311.7h9.5v86.5h-9.5z"></path><g id="g33"><path transform="rotate(-23.249 602.704 254.408)" class="st33" id="rect31" d="M598 244.9h9.5v18.9H598z"></path><path transform="rotate(-23.253 633.842 327.034)" class="st33" id="rect32" d="M629.2 303.8h9.5v46.4h-9.5z"></path><path transform="rotate(-23.263 665.182 399.7)" class="st33" id="rect33" d="M660.4 390.3h9.5v18.9h-9.5z"></path></g><path transform="rotate(-37.165 605.503 389.24)" class="st33" id="rect34" d="M600.7 345h9.5v88.4h-9.5z"></path><path transform="rotate(-45.404 541.265 384.198)" class="st33" id="rect35" d="M536.6 295.5h9.5v177.3h-9.5z"></path><path transform="rotate(-53.836 539.528 450.758)" class="st33" id="rect36" d="M534.8 407.4h9.5V494h-9.5z"></path><g id="g39"><path transform="rotate(-67.096 399.752 439.646)" class="st33" id="rect37" d="M395 430.2h9.5v18.9H395z"></path><path transform="rotate(-67.114 474.435 471.17)" class="st33" id="rect38" d="M469.7 447.3h9.4V495h-9.4z"></path><path transform="rotate(-67.12 549.11 502.709)" class="st33" id="rect39" d="M544.3 493.2h9.4v18.9h-9.4z"></path></g><path transform="rotate(-74.835 501.647 533.296)" class="st33" id="rect40" d="M496.9 487.4h9.5v91.8h-9.5z"></path></g></g><g id="g44"><path class="st35" d="M808.2 694.6c-1.3.6-2.6 1.2-3.8 1.7 1.3-.6 2.5-1.2 3.8-1.7z" id="path41"></path><path class="st35" d="M688.6 637.8c-.1.1-.2.2-.2.3 0-.1.1-.2.2-.3z" id="path42"></path><path class="st35" d="m808.2 694.5-6-.6 6 .6z" id="path43"></path><path class="st37" d="m828.9 701.7 43.4-112.9c-94.9-16.4-97.8-61.2-97.8-61.2h-56.9c-13.9 49.5-97.3 60.7-97.3 60.7l43.4 113.5c8.8 23 5.7 48.7-7.8 69.2-42.5 64.5-39.7 130.3-37.4 152.1.5 4.3 4.1 7.5 8.4 7.5h229.9c33.4-33.8 5.2-115.7-21.5-158.7-13-21.1-15.3-47.1-6.4-70.2Zm-143.2-52.8c1-11.5 5.7-21.4 13.7-29.7.4-.4.9-.7 1.3-1 2.9-2.3 5.6-5.1 8.9-6.9 18.7-10.3 37.3-9.8 55.1 2.2 12.5 8.5 19.4 20.7 21.3 35.7.7 5.3.5 10.7-.8 15.9-1.5 6 0 11.4 2.8 16.6 2.5 4.4 6.2 7.7 10.5 10.2.1.1.3 0 1 0-4.9-3.6-8.4-7.9-9.8-13.6 6.2-1.5 13.2.7 16.6 7.8 1.7 3.7 3.8 7.2 6 11.2-2.2 0-4.6.1-7 0-8.4-.5-15.1-3.9-18.8-11.9-1.3-2.9-2.4-5.8-3.6-8.7-.2-.4-.4-.7-.9-1.6-.7 1.9-1.5 3.4-1.8 4.9-1.9 8.2-5.6 15.4-12 21.1-5.9 5.3-13 8.1-20.8 9.5-6 1-12.1 1.1-18.5.6 6.2-6.8 9-15.1 12.6-23 4.3-9.3 11.7-13.9 21.8-14.6 2.6-.2 5.3-.2 8.3-.4-2.9 11.5-8.5 20.7-17.9 27.5 5.3-2.6 9.8-6.2 13.7-10.6 8.8-10 13.1-21.7 12.1-35.1-2-25.7-23.4-43.5-47.3-42.3-27.8 1.4-48.2 26.5-43.8 56.2-2.6-6.8-3.3-13.4-2.7-20zM822 834.4c-1.2 13.4-6.6 24.9-16 34.6-.5.5-1 .8-1.5 1.2-3.4 2.7-6.6 6-10.3 8-21.8 12-43.4 11.5-64.2-2.6-14.6-9.9-22.6-24.1-24.8-41.5-.8-6.2-.6-12.4.9-18.5 1.7-7 0-13.3-3.3-19.3-2.9-5.2-7.2-8.9-12.2-11.9-.1-.1-.4 0-1.2 0 5.7 4.2 9.8 9.2 11.5 15.8-7.3 1.8-15.4-.8-19.3-9-2-4.3-4.5-8.4-7-13 2.6 0 5.4-.1 8.2 0 9.8.6 17.6 4.5 21.9 13.8 1.5 3.3 2.8 6.8 4.2 10.2.2.4.5.8 1 1.8.9-2.2 1.7-3.9 2.1-5.7 2.2-9.6 6.6-18 14-24.5 6.9-6.1 15.2-9.5 24.2-11 7-1.2 14-1.2 21.5-.7-7.2 8-10.5 17.6-14.7 26.8-5 10.8-13.7 16.2-25.4 17.1-3.1.2-6.1.3-9.7.4 3.4-13.4 9.9-24.1 20.9-32-6.2 3-11.5 7.2-15.9 12.3-10.2 11.7-15.3 25.3-14.1 40.9 2.3 29.9 27.3 50.6 55 49.2 32.3-1.6 56.1-30.8 51-65.5 3 7.7 3.8 15.4 3.2 23.1z" id="path44"></path></g></g></g></svg>`} ${variant === "h" && renderTemplate`<svg version="1.1" id="Capa_1" x="0" y="0" viewBox="0 0 1365.108 516.618" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><style type="text/css" id="style1">.st33{fill:#e5ae5e}.st35{fill:#b68dad}.st37{fill:#a46f9b}.st38{fill:#a56f9b}</style><g id="g616" transform="translate(-214.492 -355.482)"><g id="g588"><g id="g587"><g id="g572"><path class="st37" d="m598.3 856.3-3 9.3h4.3v2.5h-12.5v-2.5h5.3l56-177.3-.3-.3h-5.8v-2.5h23.5v2.5h-4.3l56 177.5h5.8v2.5h-23.5v-2.5h4.3l-25-79.5c-40 4.5-69.8 38-80.8 70.3zM649.8 693 604 837.5c14.5-26 40.8-50 74.3-54z" id="path571"></path><path class="st38" d="M724.9 869.6h-26.6V864h3.7l-24-76.3c-39.5 5.1-67.7 38.2-78.2 69.1l-2.3 7.2h3.7v5.6h-15.6V864h5.7l55.1-174.4h-5.5V684h26.6v5.6h-3.7l55 174.4h6.2v5.6zm-18.9-3.1h10.2l-.2-.5-56.5-179h-10.3l.8.8-.1.4 30.4 96.6zm-107.2-16.3-.5 1.7c.3-.9.7-1.7 1-2.6zm51-152-40.6 128.1c16.9-24.3 41.2-40.4 67-44.1z" id="path572"></path></g><g id="g574"><path class="st37" d="M760.9 782.3c8-26.8 29.3-42 48.3-42 17.8 0 33.5 13.3 35.3 42.5 7.8-27 29.3-42.5 48.5-42.5 18.8 0 35.5 14.8 35.5 48v77.3h5v2.5H911v-2.5h5v-77.3c0-32-12.8-45.5-27.3-45.5-20 0-44 25.5-44 62.5v60.3h5v2.5h-22.5v-2.5h5v-77.3c0-32-12.8-45.5-27.3-45.5-20 0-44 25.5-44 62.5V868h-17.5v-2.5h5v-120h-5V743l17.5-3z" id="path573"></path><path class="st38" d="M935 869.6h-25.6V864h5v-75.7c0-32.4-13.3-44-25.7-44-20 0-42.5 26.1-42.5 61V864h5v5.6h-25.6V864h5v-75.7c0-32.4-13.3-44-25.7-44-20 0-42.5 26.1-42.5 61v64.3h-20.6V864h5V747.1h-5v-5.4l20.6-3.5v35.3c10.4-23.8 30.7-34.8 46.7-34.8 15.2 0 32 9.8 36.1 36.8 10-25.2 31.1-36.8 47.7-36.8 10.3 0 19.5 4.3 26 12.1 7.3 8.7 11.1 21.7 11.1 37.5V864h5zm-17.5-3.1h9.4v-78.2c0-33.5-16.7-45.9-32.8-46.4 12.1 2.9 23.4 16.2 23.4 46.4zm-83.8 0h9.4v-61.2c0-11.5 2.3-22.5 6.6-32.2-1.5 3.2-2.8 6.5-3.8 10.2l-2.5 8.7-.5-9.1c-1.8-29.5-17.8-40.5-32.6-41 12.1 2.9 23.4 16.2 23.4 46.4zm-83.8 0h9.4v-61.2c0-9.5 1.6-18.7 4.6-27.1-.5 1.5-1.1 3-1.5 4.6l-3.1 10.2v-51.1l-12.2 2.1h2.8z" id="path574"></path></g><g id="g576"><path class="st37" d="M998.9 870.5c-25.3 0-40.8-16.3-40.8-32.5 0-40.3 85.8-22.3 85.8-65 0-15-13-30-33-30-16.5 0-29.8 10.3-36.3 25h-11.5c8.5-16 25.8-27.5 48.8-27.5 27.3 0 44.3 16.3 44.3 32.5v92l5 .5v2.5h-17.5v-22c-9.5 16.8-27.3 24.5-44.8 24.5zm44.8-76.5c-23.8 14.8-72.8 12.3-72.8 44 0 15 11.3 30 30.3 30 18.8 0 40-14.5 42.5-44z" id="path575"></path><path class="st38" d="M998.9 872.1c-26.5 0-42.3-17.3-42.3-34.1 0-21 21.9-27 43.1-32.8 22-6 42.7-11.7 42.7-32.2 0-13.7-12-28.4-31.5-28.4-15.2 0-28.2 9-34.8 24.1l-.4.9h-15.1l1.2-2.3c9.4-17.7 28.2-28.3 50.1-28.3 28.7 0 45.8 17.3 45.8 34.1v90.6l5 .5v5.5h-20.6v-18.3c-9.5 13-25.3 20.7-43.2 20.7zm-8.7-61c-16.7 5-30.5 11.4-30.5 26.9 0 14 12.4 28.5 33.5 30.7-15.1-3.6-23.9-17.3-23.9-30.7 0-14 8.9-21.6 20.9-26.9zm55 55.4h9.7-.3V773c0-13.5-12.6-27.4-34.1-30.4 15.6 4 24.9 17.6 24.9 30.4 0 14.1-8.6 21.9-20.4 27.2 6.6-2.1 12.8-4.4 17.8-7.5l2.4-1.5v32.9c-1.7 20-11.9 33.6-24.5 40.4 9.1-4 16.7-10.6 21.6-19.3l2.9-5.1zm-3.1-69.8c-7.9 4.3-18 7.1-27.7 9.8-21.5 6-41.9 11.6-41.9 31.5 0 13.8 10.1 28.4 28.7 28.4 18.5 0 38.6-14.6 41-42.5v-27.2zm-76.3-30.2h7.8c5.2-11.1 13.6-19 23.8-22.7-13.4 3.3-24.7 11.2-31.6 22.7z" id="path576"></path></g><g id="g578"><path class="st37" d="M1094.7 745.5h-9.5V743h9.5v-45.5h-5V695l17.5-2.5V743h56.5v27.5h-3.5c0-15.3-8.8-25-22.5-25h-30.5v77c0 28.5 14.5 43.5 29.8 43.5 10.8 0 22-7.8 28.5-23.8h11.5c-8.5 17.3-25 25.8-41 25.8-21 0-41.3-15-41.3-45.5z" id="path577"></path><path class="st38" d="M1135.9 869.6c-20.6 0-42.8-14.7-42.8-47.1V747h-9.5v-5.6h9.5V699h-5v-5.4l20.6-2.9v50.8h56.5v30.6h-6.6v-1.6c0-14.5-8-23.4-20.9-23.4h-29v75.5c0 28.8 14.6 42 28.2 42 11.2 0 21.3-8.5 27.1-22.8l.4-1h15.1l-1.1 2.2c-8.1 16.4-24.4 26.6-42.5 26.6zM1096.2 744v78.6c0 25.8 14.4 39.5 30.8 43-11.5-4.9-21.4-18.8-21.4-43V694.3l-11.5 1.6h2.1V744Zm70.3 99.8c-4.1 9.7-10.2 16.8-17.3 20.6 10.5-3.3 19.5-10.6 25.2-20.6zm-4.8-74.8h.4v-24.4h-18.6c10.9 2.3 17.7 11.3 18.2 24.4z" id="path578"></path></g><g id="g580"><path class="st37" d="m1216.2 865 5 .5v2.5h-23v-2.5h5V746.8h-5v-2.5l18-3zm-7.2-172.3c5 0 9 3.8 9 8.8 0 5-4 9-9 9s-8.8-4-8.8-9 3.8-8.8 8.8-8.8z" id="path579"></path><path class="st38" d="M1222.8 869.6h-26.1V864h5V748.3h-5v-5.4l21.1-3.5v124.2l5 .5zm-18-3.1h10.2-.3V743.1l-12.6 2.1h2.7zm4.2-154.4c-5.8 0-10.3-4.6-10.3-10.6 0-5.9 4.4-10.3 10.3-10.3s10.6 4.5 10.6 10.3c-.1 5.8-4.8 10.6-10.6 10.6zm0-17.8c-4.2 0-7.2 3-7.2 7.2s3.1 7.4 7.2 7.4c4.2 0 7.4-3.3 7.4-7.4 0-4.1-3.2-7.2-7.4-7.2z" id="path580"></path></g><g id="g582"><path class="st37" d="M1295.2 740.5c22 0 37.5 11.5 46.5 27.5h-11.5c-7-14.8-18.8-25-35-25-21.3 0-31.8 15-31.8 30 0 42.8 80.8 24.8 80.8 65 0 16.3-15.5 32.5-47 32.5-24.3 0-41.5-11.5-51.5-27.5h11.5c8 14.8 21.3 25 40 25 23 0 34.3-15 34.3-30 0-41.8-80.8-24.3-80.8-65 0-16.2 14.8-32.5 44.5-32.5z" id="path581"></path><path class="st38" d="M1297.2 872.1c-22.7 0-41.5-10-52.8-28.2l-1.5-2.4h15.2l.4.8c6 11 17.5 24.2 38.6 24.2 22.5 0 32.7-14.7 32.7-28.4 0-19.8-19.3-25.5-39.6-31.5-20.2-5.9-41.1-12.1-41.1-33.5 0-16.4 14.4-34.1 46.1-34.1 20.6 0 37.6 10.1 47.9 28.3l1.3 2.3h-15.2l-.4-.9c-7.4-15.6-19.3-24.1-33.6-24.1-20.7 0-30.2 14.7-30.2 28.4 0 20.5 19.5 26.2 40.2 32.2 20 5.8 40.6 11.8 40.6 32.8 0 16.4-15.2 34.1-48.6 34.1zm13.9-61.9c12.4 5.3 21.9 13 21.9 27.8 0 12.5-7.5 25.7-23.8 30.1 22.9-3.5 33.4-17.2 33.4-30.1.1-16.5-14.5-22.6-31.5-27.8zm-62.5 34.4c8.3 11.9 20.1 19.8 34.3 22.9-13.4-4.2-21.7-14.1-26.6-22.9zm35.7-101.7c-21.9 3.4-32 17.2-32 30.1 0 16.6 14.4 23 31.3 28.3-12.3-5.3-21.7-13.2-21.7-28.3 0-12.5 7.1-25.8 22.4-30.1zm46.9 23.6h7.8c-7.7-12.4-19-20.4-32.4-23.2 10.2 3.2 18.7 11.2 24.6 23.2z" id="path582"></path></g><g id="g584"><path class="st37" d="M1375.5 745.5h-9.5V743h9.5v-45.5h-5V695l17.5-2.5V743h56.5v27.5h-3.5c0-15.3-8.8-25-22.5-25H1388v77c0 28.5 14.5 43.5 29.8 43.5 10.8 0 22-7.8 28.5-23.8h11.5c-8.5 17.3-25 25.8-41 25.8-21 0-41.3-15-41.3-45.5z" id="path583"></path><path class="st38" d="M1416.8 869.6c-20.6 0-42.8-14.7-42.8-47.1V747h-9.5v-5.6h9.5V699h-5v-5.4l20.6-2.9v50.8h56.5v30.6h-6.6v-1.6c0-14.5-8-23.4-20.9-23.4h-29v75.5c0 28.8 14.6 42 28.2 42 11.2 0 21.3-8.5 27.1-22.8l.4-1h15.1l-1.1 2.2c-8.2 16.4-24.5 26.6-42.5 26.6zM1377 744v78.6c0 25.8 14.4 39.5 30.8 43-11.5-4.9-21.4-18.8-21.4-43V694.3l-11.5 1.6h2.1V744Zm70.3 99.8c-4.1 9.7-10.2 16.8-17.3 20.6 10.5-3.3 19.5-10.6 25.2-20.6zm-4.8-74.8h.4v-24.4h-18.6c10.9 2.3 17.7 11.3 18.2 24.4z" id="path584"></path></g><g id="g586"><path class="st37" d="M1515.8 870.5c-25.3 0-40.8-16.3-40.8-32.5 0-40.3 85.8-22.3 85.8-65 0-15-13-30-33-30-16.5 0-29.8 10.3-36.3 25H1480c8.5-16 25.8-27.5 48.8-27.5 27.3 0 44.3 16.3 44.3 32.5v92l5 .5v2.5h-17.5v-22c-9.6 16.8-27.3 24.5-44.8 24.5zm44.7-76.5c-23.8 14.8-72.8 12.3-72.8 44 0 15 11.3 30 30.3 30 18.8 0 40-14.5 42.5-44z" id="path585"></path><path class="st38" d="M1515.8 872.1c-26.5 0-42.3-17.3-42.3-34.1 0-21 21.9-27 43.1-32.8 22-6 42.7-11.7 42.7-32.2 0-13.7-12-28.4-31.5-28.4-15.2 0-28.2 9-34.8 24.1l-.4.9h-15.1l1.2-2.3c9.4-17.7 28.2-28.3 50.1-28.3 28.7 0 45.8 17.3 45.8 34.1v90.6l5 .5v5.5H1559v-18.3c-9.5 13-25.3 20.7-43.2 20.7zm-8.7-61c-16.7 5-30.5 11.4-30.5 26.9 0 14 12.4 28.5 33.5 30.7-15.1-3.6-23.9-17.3-23.9-30.7 0-14 8.9-21.6 20.9-26.9zm55 55.4h9.7-.3V773c0-13.5-12.6-27.4-34.1-30.4 15.6 4 24.9 17.6 24.9 30.4 0 14.1-8.6 21.9-20.4 27.2 6.6-2.1 12.8-4.4 17.8-7.5l2.4-1.5v32.9c-1.7 20-11.9 33.6-24.5 40.4 9.1-4 16.7-10.6 21.6-19.3l2.9-5.1zm-3.1-69.8c-7.9 4.3-18 7.1-27.7 9.8-21.5 6-41.9 11.6-41.9 31.5 0 13.8 10.1 28.4 28.7 28.4 18.5 0 38.6-14.6 41-42.5v-27.2zm-76.3-30.2h7.8c5.2-11.1 13.6-19 23.8-22.7-13.5 3.3-24.7 11.2-31.6 22.7z" id="path586"></path></g></g></g><g id="g615"><path class="st33" d="M473.5 538.6c70 1.2 127.2 53.1 137.5 120 1.5-7.8 2.4-15.8 2.5-24 1.4-78.2-60.9-142.8-139.2-144.1-78.2-1.4-142.8 60.9-144.1 139.2-.1 8.2.5 16.2 1.7 24.1 12.6-66.6 71.6-116.4 141.6-115.2z" id="path588"></path><g id="g611"><g id="g610"><path transform="rotate(-10.978 649.704 589.725)" class="st33" id="rect588" d="M617.8 586.4h63.9v6.8h-63.9z"></path><g id="g591"><path transform="rotate(-26.012 618.588 569.735)" class="st33" id="rect589" d="M611.7 566.3h13.7v6.8h-13.7z"></path><path transform="rotate(-26.012 672.126 543.625)" class="st33" id="rect590" d="M654.5 540.2h35.1v6.8h-35.1z"></path><path transform="rotate(-26.012 725.666 517.517)" class="st33" id="rect591" d="M718.8 514.1h13.7v6.8h-13.7z"></path></g><path transform="rotate(-31.428 614.716 525.195)" class="st33" id="rect592" d="M584.4 521.8h60.8v6.8h-60.8z"></path><path transform="rotate(-42.819 615.018 475.26)" class="st33" id="rect593" d="M549.9 471.8h130v6.8h-130z"></path><path transform="rotate(-52.938 566.574 480.742)" class="st33" id="rect594" d="M535.4 477.3h62.3v6.8h-62.3z"></path><g id="g597"><path transform="rotate(-66.516 525.057 487.518)" class="st33" id="rect595" d="M518.2 484.1h13.7v6.8h-13.7z"></path><path transform="rotate(-66.516 548.327 434.006)" class="st33" id="rect596" d="M531.2 430.6h34.3v6.8h-34.3z"></path><path transform="rotate(-66.516 571.594 380.495)" class="st33" id="rect597" d="M564.8 377.1h13.7v6.8h-13.7z"></path></g><path transform="rotate(-75.409 502.92 455.239)" class="st33" id="rect598" d="M470.1 451.8h65.6v6.8h-65.6z"></path><path transform="matrix(.02343 -.9997 .9997 .02343 40.448 879.88)" class="st33" id="rect599" d="M406.8 415.8h127.5v6.8H406.8z"></path><path transform="rotate(-12.485 434.408 452.594)" class="st33" id="rect600" d="M431 421.3h6.8V484H431z"></path><g id="g603"><path transform="rotate(-23.249 368.993 379.835)" class="st33" id="rect601" d="M365.6 373h6.8v13.7h-6.8z"></path><path transform="rotate(-23.253 391.544 432.383)" class="st33" id="rect602" d="M388.2 415.6h6.8v33.6h-6.8z"></path><path transform="rotate(-23.263 414.235 485.02)" class="st33" id="rect603" d="M410.8 478.2h6.8v13.7h-6.8z"></path></g><path transform="rotate(-37.165 371.022 477.451)" class="st33" id="rect604" d="M367.6 445.4h6.8v64h-6.8z"></path><path transform="rotate(-45.404 324.526 473.78)" class="st33" id="rect605" d="M321.1 409.6h6.8V538h-6.8z"></path><path transform="rotate(-53.836 323.257 521.962)" class="st33" id="rect606" d="M319.9 490.6h6.8v62.7h-6.8z"></path><g id="g609"><path transform="rotate(-67.096 222.081 513.92)" class="st33" id="rect607" d="M218.7 507.1h6.8v13.7h-6.8z"></path><path transform="rotate(-67.114 276.147 536.751)" class="st33" id="rect608" d="M272.7 519.5h6.8V554h-6.8z"></path><path transform="rotate(-67.12 330.2 559.59)" class="st33" id="rect609" d="M326.8 552.7h6.8v13.7h-6.8z"></path></g><path transform="rotate(-74.835 295.846 581.724)" class="st33" id="rect610" d="M292.4 548.5h6.8V615h-6.8z"></path></g></g><g id="g614"><path class="st35" d="M517.8 698.5c-.9.4-1.9.8-2.8 1.3.9-.5 1.8-.9 2.8-1.3z" id="path611"></path><path class="st35" d="M431.2 657.4c-.1.1-.2.1-.2.2 0-.1.1-.2.2-.2z" id="path612"></path><path class="st35" d="M517.8 698.4c-1.4-.1-2.9-.3-4.3-.4 1.4.2 2.8.3 4.3.4z" id="path613"></path><path class="st37" d="m532.8 703.6 31.4-81.7c-68.7-11.9-70.8-44.3-70.8-44.3h-41.2c-10 35.8-70.5 43.9-70.5 43.9l31.4 82.2c6.4 16.6 4.1 35.2-5.7 50.1-30.7 46.7-28.8 94.3-27 110.1.3 3.1 3 5.5 6.1 5.5H553c24.2-24.5 3.8-83.7-15.5-114.9-9.5-15.3-11.2-34.1-4.7-50.9zM429 665.4c.7-8.3 4.1-15.5 9.9-21.5.3-.3.6-.5 1-.8 2.1-1.7 4.1-3.7 6.4-5 13.6-7.5 27-7.1 39.9 1.6 9.1 6.2 14 15 15.4 25.8.5 3.8.4 7.7-.6 11.5-1.1 4.4 0 8.2 2.1 12 1.8 3.2 4.5 5.5 7.6 7.4.1.1.2 0 .7 0-3.6-2.6-6.1-5.7-7.1-9.8 4.5-1.1 9.6.5 12 5.6 1.3 2.7 2.8 5.2 4.3 8.1-1.6 0-3.3.1-5.1 0-6.1-.4-11-2.8-13.6-8.6-1-2.1-1.8-4.2-2.6-6.3-.1-.3-.3-.5-.6-1.1-.5 1.4-1.1 2.4-1.3 3.6-1.4 6-4.1 11.2-8.7 15.3-4.3 3.8-9.4 5.9-15 6.9-4.3.8-8.7.8-13.4.5 4.5-5 6.5-11 9.1-16.7 3.1-6.7 8.5-10.1 15.8-10.6 1.9-.1 3.8-.2 6-.3-2.1 8.3-6.2 15-13 19.9 3.8-1.9 7.1-4.5 9.9-7.6 6.4-7.3 9.5-15.7 8.8-25.4-1.4-18.6-16.9-31.5-34.2-30.6-20.1 1-34.9 19.2-31.7 40.7-1.9-5-2.4-9.8-2-14.6zm98.7 134.3c-.8 9.7-4.8 18-11.6 25-.3.3-.7.6-1.1.9-2.5 2-4.7 4.3-7.5 5.8-15.8 8.7-31.4 8.3-46.4-1.9-10.6-7.2-16.4-17.5-18-30.1-.6-4.5-.4-9 .7-13.4 1.3-5.1 0-9.6-2.4-14-2.1-3.7-5.2-6.5-8.8-8.6-.1-.1-.3 0-.8 0 4.2 3.1 7.1 6.6 8.3 11.4-5.3 1.3-11.1-.6-14-6.5-1.5-3.1-3.2-6.1-5.1-9.4 1.9 0 3.9-.1 5.9 0 7.1.4 12.8 3.3 15.9 10 1.1 2.4 2 4.9 3.1 7.4.1.3.3.6.7 1.3.6-1.6 1.2-2.8 1.6-4.1 1.6-6.9 4.8-13 10.1-17.8 5-4.4 11-6.9 17.5-8 5.1-.9 10.2-.9 15.6-.5-5.2 5.8-7.6 12.8-10.6 19.4-3.6 7.8-9.9 11.7-18.4 12.3-2.2.2-4.4.2-7 .3 2.5-9.7 7.2-17.4 15.1-23.2-4.5 2.2-8.3 5.2-11.5 8.9-7.4 8.5-11.1 18.3-10.2 29.6 1.7 21.6 19.7 36.6 39.8 35.6 23.4-1.2 40.6-22.3 36.9-47.4 2.1 5.9 2.7 11.4 2.2 17z" id="path614"></path></g></g></g></svg>`} </a>`;
}, "/home/javier/Dev/amatista/src/icons/Logo.astro", void 0);

const $$Astro$6 = createAstro("https://amatistacomunidad.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { href: "/", title: "Inicio" },
    { href: "/tienda", title: "Tienda" },
    { href: "/nosotras", title: "Nosotras" },
    { href: "/comunidad", title: "Comunidad" },
    { href: "/contacto", title: "Vend\xE9 tu ropa" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full py-1 bg-raw_white dark:bg-black"> <h2 class="font-semibold text-center text-black dark:text-raw_white">
Envíos a todo Uruguay
</h2> </div> <header class="bg-raw_white dark:bg-black py-2"> <nav class=" px-4 lg:px-6 py-2.5 "> <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto"> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-60" })} <div class="flex items-center lg:order-2"> ${renderComponent($$result, "DarkModeSwitcher", $$DarkModeSwitcher, {})} <button id="mobile-button" title="menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu"> <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"> ${links.map(({ href, title }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="block pl-2 lg:pl-0 py-2 lg:py-0 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amatista lg:p-0 dark:text-gray-400 lg:dark:hover:text-raw_white dark:hover:bg-gray-700 dark:hover:text-raw_white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"> ${title} </a> </li>`)} </ul> </div> </div> </nav> </header> `;
}, "/home/javier/Dev/amatista/src/layouts/partials/Header.astro", void 0);

const $$Astro$5 = createAstro("https://amatistacomunidad.com/");
const $$Collections = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Collections;
  const filters = [
    "Gangas",
    "Abrigos",
    "Short y Pantalones",
    "Vestidos Y Poleras",
    "Accesorios Y Calzado",
    "Tejido Artesanal"
  ];
  return renderTemplate`${maybeRenderHead()}<ul class="text-gray-600 dark:text-gray-400 [&>li]:mb-4"> ${filters.map((filter) => renderTemplate`<li> <a${addAttribute(`/tienda/${filter}`, "href")} class="capitalize hover:underline"> ${filter} </a> </li>`)} </ul>`;
}, "/home/javier/Dev/amatista/src/layouts/partials/Collections.astro", void 0);

const $$Astro$4 = createAstro("https://amatistacomunidad.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="p-4 bg-raw_white sm:p-6 dark:bg-black"> <div class="max-w-screen-xl mx-auto"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0 md:w-full"> <div class="w-40"> ${renderComponent($$result, "Logo", $$Logo, { "variant": "v" })} </div> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-raw_white">
Tienda
</h2> ${renderComponent($$result, "Collections", $$Collections, {})} </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-raw_white">
Seguinos en nuestras redes
</h2> <ul class="text-gray-600 dark:text-gray-400 [&>li]:mb-4"> <li> <a href="https://www.instagram.com/amatista.comunidad/" target="_blank" class="hover:underline">Instagram</a> </li> <li> <a href="https://api.whatsapp.com/message/YSRW3CZPDBAED1?autoload=1&app_absent=0" target="_blank" class="hover:underline">Whatsapp</a> </li> <li> <a href="https://www.tiktok.com/@amatista.comunidad" target="_blank" class="hover:underline">TikTok</a> </li> <li> <a href="https://www.facebook.com/amatista.comunidad/" target="_blank" class="hover:underline">Facebook</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-raw_white">
Legales
</h2> <ul class="text-gray-600 dark:text-gray-400"> <li class="mb-4"> <a href="/legales#politicas-de-privacidad" class="hover:underline">Política de Privacidad</a> </li> <li class="mb-4"> <a href="/legales#politicas-de-reembolso" class="hover:underline">Política de Devoluciones y Reembolso</a> </li> <li> <a href="/legales#terminos-y-condiciones" class="hover:underline">Terminos &amp; Condiciones</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-500 dark:text-gray-400 text-nowrap">© 2024 <a href="/" class="hover:underline">Amatista Comunidad™</a> </span> <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 w-full"> <a href="https://www.instagram.com/amatista.comunidad/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-raw_white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> <a href="https://api.whatsapp.com/message/YSRW3CZPDBAED1?autoload=1&app_absent=0" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-raw_white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-5 h-5"> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path> </svg> </a> <a href="https://www.tiktok.com/@amatista2hand" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-raw_white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-5 h-5"> <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"></path></svg> </a> </div> </div> </div> </footer>`;
}, "/home/javier/Dev/amatista/src/layouts/partials/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://amatistacomunidad.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    h1 = "Amatista Comunidad Tienda Segunda Mano",
    title = "Amatista Comunidad - Tienda Segunda Mano",
    description = "En amatista comunidad alargamos el ciclo de prendas \xFAnicas y sustentables como blusas, camisas, pantalones, vestidos, abrigos, poleras y accesorios, a precios incre\xEDbles. enviamos a Maldonado, Montevideo, canelones, rocha y todo uruguay."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="font-lora"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <h1 class="hidden">${h1}</h1> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/javier/Dev/amatista/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://amatistacomunidad.com/");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, variant = "light", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(["py-12", [
    className,
    { "bg-white dark:bg-black dark:bg-opacity-95": variant === "light" },
    { "bg-raw_white dark:bg-black": variant === "darker" }
  ]], "class:list")}> <div class="max-w-sm mx-auto md:max-w-2xl lg:max-w-6xl"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/javier/Dev/amatista/src/components/SectionContainer.astro", void 0);

const $$Astro$1 = createAstro("https://amatistacomunidad.com/");
const $$TextContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextContainer;
  const { class: className, variant = "normal", hover = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    className,
    "[&_h2]:font-lora [&_h2]:mb-6 [&_h2]:text-4xl [&_h2]:uppercase [&_h2]:font-bold",
    { "[&_h2]:text-amatista": variant === "normal" },
    { "[&_h2]:text-white [&_h2]:dark:text-black": variant === "white" },
    { "[&_h2]:text-black [&_h2]:dark:text-white": variant === "black" },
    "[&_h3]:font-lora [&_h3]:mb-4 [&_h3]:text-xl [&_h3]:uppercase [&_h3]:font-semibold [&_h3]:opacity-65",
    { "[&_h3]:text-black [&_h3]:dark:text-white": variant === "normal" },
    { "[&_h3]:text-white [&_h3]:dark:text-black": variant === "white" },
    { "[&_h3]:text-black [&_h3]:dark:text-white": variant === "black" },
    {
      "[&_h3]:hover:text-amatista [&_h3]:group-hover:text-amatista [&_h3]:peer-hover:text-amatista": hover
    },
    {
      "[&_h3]:hover:opacity-100 [&_h3]:group-hover:opacity-100 [&_h3]:peer-hover:opacity-100": hover
    },
    "[&_p]:font-roboto [&_p]:mb-4 [&_p]:text-lg [&_p_strong]:text-amatista",
    { "[&_p]:text-black [&_p]:dark:text-white": variant === "normal" },
    { "[&_p]:text-white [&_p]:dark:text-black": variant === "white" },
    { "[&_p]:text-black [&_p]:dark:text-white": variant === "black" },
    {
      "[&_p]:hover:text-amatista [&_p]:group-hover:text-amatista [&_p]:peer-hover:text-amatista": hover
    },
    {
      "[&_p]:hover:opacity-100 [&_p]:group-hover:opacity-100 [&_p]:peer-hover:opacity-100": hover
    },
    "[&_ul]:font-roboto [&_ul]:mb-2 [&_ul]:text-lg [&_ul]:list-disc [&_ul]:pl-8",
    { "[&_ul]:text-black [&_ul]:dark:text-white": variant === "normal" },
    { "[&_ul]:text-white [&_ul]:dark:text-black": variant === "white" },
    { "[&_ul]:text-black [&_ul]:dark:text-white": variant === "black" }
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "/home/javier/Dev/amatista/src/components/TextContainer.astro", void 0);

const formatter = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "UYU",
  maximumFractionDigits: 0
});
const formatCurreny = (price) => {
  return formatter.format(price);
};

var ProductTag = /* @__PURE__ */ ((ProductTag2) => {
  ProductTag2["Todo"] = "Todo";
  ProductTag2["Gangas"] = "Gangas";
  ProductTag2["Abrigos"] = "Abrigos";
  ProductTag2["Shorts_y_Pantalones"] = "Shorts y Pantalones";
  ProductTag2["Vestidos_y_Poleras"] = "Vestidos y Poleras";
  ProductTag2["Accesorios_y_Calzado"] = "Accesorios y Calzado";
  ProductTag2["Tejido_Artesanal"] = "Tejido Artesanal";
  return ProductTag2;
})(ProductTag || {});

const HYGRAPH_ENDPOINT = "https://sa-east-1.cdn.hygraph.com/content/clsw2dllh01en07unanpr7pv6/master";
function createGraphConfig(query) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  };
}
function createCacheMemory(data, expireTimeInHours) {
  const createdAt = /* @__PURE__ */ new Date();
  const expireAt = (/* @__PURE__ */ new Date()).setHours(createdAt.getHours() + expireTimeInHours);
  return {
    expireAt: expireAt.valueOf(),
    data
  };
}
async function hygraphQuery({
  query,
  expireTimeInHours
}) {
  return new Promise((resolve, reject) => {
    const queryInCache = localStorage.getItem(query);
    if (queryInCache) {
      const cacheInMemory = JSON.parse(queryInCache);
      const currentTime = (/* @__PURE__ */ new Date()).valueOf();
      if (currentTime < cacheInMemory.expireAt) {
        return resolve(cacheInMemory.data);
      } else {
        localStorage.removeItem(query);
      }
    }
    const config = createGraphConfig(query);
    fetch(HYGRAPH_ENDPOINT, config).then((response) => {
      if (!response.ok)
        reject(`Error on fetching to Hygraph, Status: ${response.statusText}`);
      return response.json();
    }).then((json) => json.data).then((data) => {
      const cache = createCacheMemory(data, expireTimeInHours);
      localStorage.setItem(query, JSON.stringify(cache));
      resolve(data);
    });
  });
}
async function fetchProducts() {
  return hygraphQuery({
    query: `
    {
      productos {
        id
        price
        size
        stock
        tag
        title
        backImg {
          url
        }
        frontImg {
          url
        }
        description
      }
    }
  `,
    expireTimeInHours: 1
  });
}
async function fetchProductById(id) {
  return hygraphQuery({
    query: `
    {
      producto(where: {id: "${id}"}) {
        id
        price
        size
        stock
        tag
        title
        backImg {
          url
        }
        frontImg {
          url
        }
        description
      }
    }
    `,
    expireTimeInHours: 24
  });
}

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: void 0
    };
    console.log(this.props.productURL);
  }
  componentDidMount() {
    const { productID } = this.props;
    if (!productID)
      return;
    fetchProductById(productID).then(({ producto }) => {
      this.setState((prevState) => ({ ...prevState, product: producto }));
    });
  }
  render() {
    const { product } = this.state;
    if (!product)
      return /* @__PURE__ */ jsx("div", { children: "Producto no encontrado" });
    const { productURL } = this.props;
    const isSoldOut = product.stock < 1;
    const content = isSoldOut ? "agotado" : "disponible";
    const classBadgeBg = isSoldOut ? "bg-black" : "bg-amatista";
    const hrefWsp = `https://api.whatsapp.com/send?phone=59896667633&text=${productURL}`;
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 grid-cols-1", children: [
      /* @__PURE__ */ jsx("div", { className: "md:order-1 order-2", children: /* @__PURE__ */ jsx("img", { src: product.frontImg.url, alt: product.title }) }),
      /* @__PURE__ */ jsx("div", { className: "md:order-2 order-3", children: /* @__PURE__ */ jsx("img", { src: product.backImg.url, alt: product.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:p-12 px-6 mb-12 md:mb-0 md:order-3 order-1", children: [
        /* @__PURE__ */ jsx("h2", { children: product.title }),
        /* @__PURE__ */ jsx("h3", { children: product.tag }),
        /* @__PURE__ */ jsx("p", { children: product.description }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Talla: ",
          product.size
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Precio: ",
          formatCurreny(product.price)
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `capitalize px-3 py-1 text-sm rounded-full text-raw_white ${classBadgeBg}`,
            children: content
          }
        ),
        /* @__PURE__ */ jsx("a", { href: hrefWsp, className: " bg-green-500 mt-12  block py-4 px-6 rounded-full hover:bg-green-400 duration-200 shadow-black/20 shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-3xl text-white", children: "LO QUIERO!" }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              className: "w-10 h-10",
              fill: "#fff",
              children: /* @__PURE__ */ jsx("path", { d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" })
            }
          )
        ] }) })
      ] })
    ] }) });
  }
}

const $$Astro = createAstro("https://amatistacomunidad.com/");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { href } = Astro2.url;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TextContainer", $$TextContainer, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProductPage", ProductPage, { "client:load": true, "productID": id, "productURL": href, "client:component-hydration": "load", "client:component-path": "@/react/ProductPage", "client:component-export": "default" })} ` })} ` })} ` })}`;
}, "/home/javier/Dev/amatista/src/pages/tienda/[id].astro", void 0);

const $$file = "/home/javier/Dev/amatista/src/pages/tienda/[id].astro";
const $$url = "/tienda/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionContainer as $, ProductTag as P, _id_ as _, $$Logo as a, $$TextContainer as b, $$Layout as c, fetchProducts as d, formatCurreny as f };
