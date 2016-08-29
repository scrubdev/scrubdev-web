"use strict";

require("babel-register");
const Scrubweb = require("./src/scrubweb").default;

let scrub = new Scrubweb();
scrub.start();