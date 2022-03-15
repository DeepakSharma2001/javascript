// given an array arr = [audio,video,image,software,documents,aplication,other]
// make an folder for each element in given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let arr = ['audio','video','image','software','documents','aplication','other'];
 
let organisedPath = path.join(__dirname,"organised");
if(!fs.existsSync(organisedPath)){
fs.mkdirSync(organisedPath)
}
for(let i =0; i<arr.length;i++){
    let folderKaPath = path.join(organisedPath,arr[i]);
    fs.mkdirSync(folderKaPath);
}





