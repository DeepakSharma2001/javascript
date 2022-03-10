// "C:\Users\DEEPAK\Desktop\FJP-6\module2\node\path.js"

// to give path 
 let path = require("path");
//  console.log(path);

// extension name  batat hai yeh 
// let extensionname = path.extname("C:\Users\DEEPAK\Desktop\FJP-6\module2\node\path.js");
// console.log(extensionname);

// // base name
// let baseName = path.basename(__filename);
// console.log(baseName);

// __dir name  ( gives us directory path )
console.log(__dirname);

// __filename (gives file path)
console.log(__filename);


let dirpath =  __dirname;
console.log(dirpath);

let newfilepath = path.join(dirpath,"test.js");
console.log(newfilepath);

