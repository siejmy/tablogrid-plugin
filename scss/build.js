const fs = require("fs");
const sass = require("sass");
const srcdir = __dirname;
const dstdir = __dirname + '/../build';
const compileSass = (name) => fs.writeFileSync(`${dstdir}/${name}.css`, sass.compile(`${srcdir}/${name}.scss`).css)

compileSass('editor');
compileSass('client-post');
compileSass('client-twitter');
