const fs = require("fs");

console.log("before");

// let content = 
fs.readFile("file.txt",cb); // here readfileSync  not used; but to make it asynchronous we use fs.readfile isse code chlta rhega

function cb(error,data){  // yha asynchronous krdia taaki end me chl jaye usse ek callbck chiye
    if(error){
        console.log(error);
    }else{
    console.log(data + "");
    }
}




// console.log(content + "")
console.log("After");