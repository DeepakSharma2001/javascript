// copy index.html from module 1 to  insidde module 2 having name html 

// double dot .. ek dir peeche le jata hai

let fs = require("fs");
let path = require("path");

let srcpath = path.join(__dirname,"..","..","..","Module1","index.html")
console.log("source path --->", srcpath);
let destpath = path.join(__dirname,"..","..",'index.html');
console.log("destination--->", destpath);


fs.copyFileSync(srcpath,destpath);