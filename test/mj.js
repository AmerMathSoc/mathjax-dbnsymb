import { mathjax } from 'mathjax-full/js/mathjax.js';
mathjax.asyncLoad = async (name) => import(name + '.js');
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

import {
  BaseConfiguration,
} from 'mathjax-full/js/input/tex/base/BaseConfiguration.js';

import { configuration as dbnsymb } from '../js/dbnsymb.js';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: [BaseConfiguration.name, dbnsymb.name],
});

import { MathJaxModernFont } from 'mathjax-modern-font/mjs/svg.js';

const modernFont = new MathJaxModernFont({
  dynamicPrefix: 'mathjax-modern-font/mjs/svg/dynamic'
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
