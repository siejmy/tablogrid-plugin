import "./style.scss";
import "./editor.scss";

import { initBlockTablogridLTB } from "./row-ltb.js";
import { initBlockTablogridTBR } from "./row-tbr.js";
import { initBlockTablogridDuo } from "./row-duo.js";
import { initBlockTablogridMidline } from "./row-midline.js";
import { initBlockTablogridUno } from "./row-uno.js";
import { initBlockTablogridColumn } from "./column.js";
import { initBlockTablogridClientPost } from "./client-post.js";

initBlockTablogridColumn();
initBlockTablogridLTB();
initBlockTablogridTBR();
initBlockTablogridUno();
initBlockTablogridMidline();
initBlockTablogridDuo();
initBlockTablogridClientPost();
