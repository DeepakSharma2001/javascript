//  read content of unorganised folder and make an array which has extensions name of each

let fs = require("fs");
let path = require("path");

let folderkapath = path.join(__dirname,"..","..","unorganised");
// console.log(folderkapath)
let content = fs.readdirSync(folderkapath)
// console.log(content); 

let extArr = [];
for(let i=0; i<content.length; i++){
    let name = content[i];
    let extname = path.extname(name);
    extArr.push(extname);
}

console.log(extArr);