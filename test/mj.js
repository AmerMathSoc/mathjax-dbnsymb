import { mathjax } from '@mathjax/src/js/mathjax.js';
import '@mathjax/src/js/util/asyncLoad/esm.js';
import { TeX } from '@mathjax/src/js/input/tex.js';
import { SVG } from '@mathjax/src/js/output/svg.js';
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js';

import {
  BaseConfiguration,
} from '@mathjax/src/js/input/tex/base/BaseConfiguration.js';

import { configuration as dbnsymb } from '../js/dbnsymb.js';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: [BaseConfiguration.name, dbnsymb.name],
});

import { MathJaxNewcmFont } from '@mathjax/mathjax-newcm-font/mjs/svg.js';

const modernFont = new MathJaxNewcmFont({
  dynamicPrefix: '@mathjax/mathjax-newcm-font/mjs/svg/dynamic'
});

const svg = new SVG({
  fontData: modernFont,
  fontCache: 'global',
  displayAlign: 'left',
  displayIndent: '0',
});

export const mj = async (documentstring) => {
  const mj = mathjax.document(documentstring, {
    InputJax: tex,
    OutputJax: svg,
  });
  await mathjax.handleRetriesFor(() => mj.render());
  return adaptor.outerHTML(adaptor.root(mj.document));
};
