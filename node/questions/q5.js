// move a file 

let fs = require("fs");
let path = require("path");

let srcpath= path.join(__dirname,"file.txt")
// console.log(srcpath);

let destpath = path.join(__dirname,"newfolder","file.txt")
// console.log(destpath);

fs.copyFileSync(srcpath,destpath);

fs.unlinkSync(srcpath);

