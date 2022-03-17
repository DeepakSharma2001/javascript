let fs = require("fs");
let path = require("path");
let FolderPath = process.argv[2]; // input ka tareeka  another option path.join(__dirname,"Download");  if error comes

// console.log(FolderPath);
 let folderExist = fs.existsSync(FolderPath);

 let extensions = {
    Audio: [".mp3"],
    Video: [".mp4",".mkv",],
    Document: [".doc",".pdf",".xlsx",".txt"],
    Image: [ ".jpeg",".jpg",".gif"],
    Software: [".exe"]
};

 if(folderExist){
     // we will code here
    //  console.log("path is valid!!!"); 
    let files = fs.readdirSync(FolderPath);
    for(let i=1; i<files.length;i++){
        let ext = path.extname(files[i]);
        let NameOfFolder = giveFolderName(ext); 
        console.log("Ext--->",ext,"Folder--->",NameOfFolder);
    }
    // console.log(files);
    }
 else{
     console.log("please enter a Valid Path!!!");
 }



 function giveFolderName(ext){
     for(let key in extensions){   // key according to our object  // for each loop hai yeah
         let extArr = extensions[key];
         for(let i=0; i<extArr.length; i++){
             if(extArr[i]==ext){
                 return key;
            }
        }

    }
     return 'Others';
}