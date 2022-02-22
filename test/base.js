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
  `

fs.writeFileSync(__dirname+'/test.html' ,mj(theBigString, true));
