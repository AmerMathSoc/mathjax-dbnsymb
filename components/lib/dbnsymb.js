import {combineWithMathJax} from '../../node_modules/mathjax-full/mjs/components/global.js';
import {VERSION} from '../../node_modules/mathjax-full/mjs/components/version.js';

import * as module1 from '../../js/dbnsymb.js';

if (MathJax.loader) {
  MathJax.loader.checkVersion('[ams]/dbnsymb', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  dbnsymb: module1
}});
