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
  valign: string;
  width: string;
  height: string;
  alt: string;
}

type dbnObj = {
  [key: string]: dbnDatum;
};

const dbnData: dbnObj = {
  doublepoint: {
    src: "data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='101.472336' height='107.612579' viewBox='0 0 101.472336 107.612579'><path d='M60.970901 63.016541C60.970901 60.228394,59.863144 57.554779,57.891769 55.583405C55.920410 53.612045,53.246796 52.504288,50.458649 52.504288C47.670502 52.504288,44.996887 53.612045,43.025528 55.583405C41.054153 57.554779,39.946411 60.228394,39.946411 63.016541C39.946411 65.804688,41.054153 68.478302,43.025528 70.449661C44.996887 72.421036,47.670502 73.528778,50.458649 73.528778C53.246796 73.528778,55.920410 72.421036,57.891769 70.449661C59.863144 68.478302,60.970901 65.804688,60.970901 63.016541Z' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 0.000000;fill: rgb(0.000000%,0.000000%,0.000000%);'></path><path d='M8.409668 105.065521L92.507629 20.967560' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M13.665787 41.992050L8.409668 20.967560L29.434158 26.223679' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M8.409668 20.967560L92.507629 105.065521' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path><path d='M71.483139 26.223679L92.507629 20.967560L87.251511 41.992050' style='stroke:rgb(0.000000%,0.000000%,0.000000%); stroke-width: 4.363632;stroke-linecap: round;stroke-linejoin: round;stroke-miterlimit: 10.000000;fill: none;'></path></svg>",
    valign: "-0.1ex",
    width: ".9em",
    height: ".9em",
    alt: "double crossed arrows with disc at intersection",
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
