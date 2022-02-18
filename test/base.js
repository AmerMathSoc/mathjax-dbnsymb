const fs = require('fs');
const mj = require('./mj');

const theBigString =
  `
  $$ V(\\dbnsymb{doublepoint})$$ 
  $$V(\\doublepoint)$$
  $$V^\\doublepoint$$
  `

fs.writeFileSync(__dirname+'/test.html' ,mj(theBigString, true));
