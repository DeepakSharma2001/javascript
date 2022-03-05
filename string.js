let str='i am a string';
console.log(str);

//length of string
let len = str.length;
console.log(len);

// sliced method --> usse to extract part of string
let slicedArr = str.slice(2,8);
console.log(slicedArr);

// replace method -->to replace content 

let replacedarr = str.replace("am","was");
console.log(replacedarr);

// uppercase
let uppercase = str.toUpperCase();
console.log(uppercase);

// lowercase
let lowercase = str.toLowerCase();
console.log(lowercase);

// concat
let firstname = "Deepak";
let lastname = " Sharma";

let fullname = firstname.concat(lastname);
console.log(fullname);

//split---> return array on basis of user 
let split = str.split("a");
console.log(split);

// trim
let trim = str.trim("a");
console.log(trim);
