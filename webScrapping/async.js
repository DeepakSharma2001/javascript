const fs = require("fs");

console.log("before");

// let content = 
fs.readFile("file.txt",cb1); // here readfileSync  not used; but to make it asynchronous we use fs.readfile isse code chlta rhega
fs.readFile("f2.txt",cb2);
function cb1(error,data){  // yha asynchronous krdia taaki end me chl jaye usse ek callbck chiye
    if(error){
        console.log(error);
    }else{
    console.log("data of file 1 ----->" + data);
    }
}

function cb2(error,data){  // yha asynchronous krdia taaki end me chl jaye usse ek callbck chiye
    if(error){
        console.log(error);
    }else{
        console.log("data of file 2  ----->" + data);
    }
}




// console.log(content + "")
console.log("After");