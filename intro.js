// // printing in js
// console.log("swagat hai aap sabhi ka");

// console.log("Deepak");

// // variables in js 

// let num = 10;  //number

// console.log(num);

// let char ='a';
// console.log(char); //character

// let str = 'i am a string';
// console.log(str);  // string

// let bool = true;
// console.log(bool);    //boolean

// //loops -> 

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let count=10;
// while(count>0){
//     console.log(count);
//     count--;
// }

// is a prime no code 

console.log("enter the number to be chechk wheather the no. is prime or not");

 let number = 5
 console.log(number);
let flag=1;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        flag=0;
    }
}
if(flag==1){
    console.log("number is prime");
}
else{
    console.log("number is not prime");
    
}
