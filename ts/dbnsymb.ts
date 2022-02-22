/*!
 *  Copyright (c) 2022 American Mathematical Society
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { Configuration } from "mathjax-full/js/input/tex/Configuration.js";
import { CommandMap } from "mathjax-full/js/input/tex/SymbolMap.js";
import { ParseMethod } from "mathjax-full/js/input/tex/Types.js";
import TexParser from "mathjax-full/js/input/tex/TexParser";
import BaseMethods from "mathjax-full/js/input/tex/base/BaseMethods.js";

let dbnsymbMethods: Record<string, ParseMethod> = {};

interface dbnDatum {
  src: string;
  valign?: string;
  width?: string;
  height?: string;
  alt: string;
}

type dbnObj = {
  [key: string]: dbnDatum;
};

const dbnData: dbnObj = {
  doublepoint: {
    src: "data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='94.689453' height='88.461609' viewBox='0 0 94.689453 88.461609'><path d='M60.970901 44.016541C60.970901 41.228394,59.863144 38.554779,57.891769 36.583405C55.920410 34.612045,53.246796 33.504288,50.458649 33.504288C47.670502 33.504288,44.996887 34.612045,43.025528 36.583405C41.054153 38.554779,39.946411 41.228394,39.946411 44.016541C39.946411 46.804688,41.054153 49.478302,43.025528 51.449661C44.996887 53.421036,47.670502 54.528778,50.458649 54.528778C53.246796 54.528778,55.920410 53.421036,57.891769 51.449661C59.863144 49.478302,60.970901 46.804688,60.970901 44.016541Z' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 0.000000;fill: rgb(0.000000%,0.000000%,0.000000%);'></path><path d='M8.409668 86.065521L92.507629 1.967560' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M13.665787 22.992050L8.409668 1.967560L29.434158 7.223679' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M8.409668 1.967560L92.507629 86.065521' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M71.483139 7.223679L92.507629 1.967560L87.251511 22.992050' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path></svg>",
    valign: "0",
    width: ".7em",
    height: ".7em",
    alt: "two upward arrows crossed with disc",
  },
};

dbnsymbMethods.dbnsymb = function (parser: TexParser, name: string) {
  const arg = parser.GetArgument(name);
  if (!dbnData[arg]) return;
  parser.Push(parser.create("token", "mglyph", dbnData[arg])); // NOTE mglyph gets TeX class ORD (as desired)
};
dbnsymbMethods.Macro = BaseMethods.Macro;

new CommandMap(
  "dbnsymb-macros",
  {
    dbnsymb: "dbnsymb",
    doublepoint: ["Macro", "\\dbnsymb{doublepoint}"],
  },
  dbnsymbMethods
);

export const configuration = Configuration.create("dbnsymb", {
  handler: {
    macro: ["dbnsymb-macros"],
  },
});
