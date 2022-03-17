let fs = require("fs");
let FolderPath = process.argv[2]; // input ka tareeka

// console.log(FolderPath);
 let folderExist = fs.existsSync(FolderPath);

 if(folderExist){
     // we will code here
    //  console.log("path is valid!!!"); 
    let files = fs.readdirSync(FolderPath);
    console.log(files);
    }
 else{
     console.log("please enter a Valid Path!!!");
 }
