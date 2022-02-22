const fs = require('fs');
const mj = require('./mj');

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
  `

fs.writeFileSync(__dirname+'/test.html' ,mj(theBigString, true));
