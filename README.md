# mathjax-dbnsymb

MathJax TeX extension to re-implement `dbnsymb`.

## MathJax Extension: `dbnsymb.js`

This extension implements a TeX macro `\dbnsymb` as well as the following macros:

```latex
\actsonleft
\actsonright
\Associator
\backoverslash
\hsmoothing
\overcrossing
\OpenHopfUp
\slashoverback
\smoothing
\undercrossing 
\upupsmoothing
```

We will add more macros whenever a publication needs them.

## Using NodeJS

For example, install `@mathjax/src` and `@amermathsoc/mathjax-dbnsymb` and use something like

```js
import { TeX } from '@mathjax/src/js/input/tex.js';
import { configuration as dbnsymb } from 'mathjax-dbnsymb';
const tex = new TeX({
    packages: [dbnsymb.name]
});
```

## Using a browser

For client-side use, you need load `browser/dbnsymb.js`, e.g., from a CDN.

Follow the instructions from the MathJax documentation on [loading a third-party extensions](http://docs.mathjax.org/en/latest/web/webpack.html#loading-the-extension), e.g.,

```js
MathJax = {
    loader: {
        load: ['[dbnsymb]/dbnsymb.js'],
        paths: {dbnsymb: 'https://cdn.jsdelivr.net/npm/@amermathsoc/mathjax-dbnsymb@3/browser'}
    },
    tex: {
        packages: {'[+]': ['dbnsymb']}
    }
};
```
