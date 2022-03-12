const { Console } = require("console");
let fs = require("fs");
// // console.log(fs);
let path = require("path");

const { fstat } = require("fs");
const { fileURLToPath } = require("url");

// let filePath = path.join(__dirname,"file.txt");
// // console.log(filePath);

// //C-create
// //it creates file if it does not exists else it override
// fs.writeFileSync(filePath,"Hello I am a text file ");

// //R-read
// console.log("Before update : ")
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// //U-update
// fs.appendFileSync(filePath,"\nNewly added content");
// console.log("After update : ")
// console.log(fs.readFileSync(filePath,'utf-8'));

// // //D-delete
// // fs.unlinkSync(filePath);

// create a directory same folder in which we all have our files

// if doesnot exits we have to chechk 

// if(!fs.existsSync("hamari directory"))
    // fs.mkdirSync("hamari directory");


    // read a directory 

    // let folderPath = "C:\Users\DEEPAK\Desktop\FJP-6\module2\node";
    // let contentofFolder = fs.readFileSync(folderPath);
    // console.log(contentofFolder);

    // delete directory

    // fs.unlinkSync("hamari directory");
    

    // to delete
    fs.rmdirSync("hamari directory"); // wrks on empty dir.

// copy a file 

// let sourcePath = path.join(__dirname,"file.txt");

// let destinationPath = path.join(__dirname,"ownmademodule","file.txt")
// console.log(sourcePath);
// console.log(destinationPath);

// fs.copyFileSync(sourcePath,destinationPath);