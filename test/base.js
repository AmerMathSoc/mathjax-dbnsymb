import * as fs from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import { mj } from './mj.js';

const theBigString =
  `
  $$ V(\\dbnsymb{doublepoint})$$ 
  $$V(\\doublepoint)$$
  $$V^\\doublepoint$$
  $$x \\doublepoint y$$
  $$G \\actsonleft X$$
  $$X \\actsonright G$$
  <p>\\( \\Associator \\) and \\( \\backoverslash \\) generate parenthesized tangles.</p>
  $$x \\BigCirc y$$
  $$\\sigma_yZ(\\OpenHopfUp_{\\!x}^y)  = \\Omega_y\\exp_\\#(\\botright_x^{\\!\\!y})$$
  $$ {\\mathcal A}^w(\\cappededge)$$
  $$(\\crossing)$$
  $$(\\hsmoothing-\\crossing)$$
  $$V(\\overcrossing)$$
  $$\\langle\\slashoverback\\rangle$$
  $$zC(\\smoothing)$$
  $$(\\undercrossing)$$
  $$(\\upupsmoothing)$$
  $$ V(\\dbnsymb{foo})$$ 
  `

fs.writeFileSync(__dirname+'/test.html' , '<!DOCTYPE html>\n'+await mj(theBigString, true));
