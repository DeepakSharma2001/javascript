// // empty object
// let obj={};
// console.log(obj);

// // objects with some content
// let objdeepak = {
//     "name": 'Deepak',
//     "age": '21',
//     phoneno: '987456321',
//     lastname: 'sharma'
// };

// console.log(objdeepak);

// captianamerica objects
let capamerica= {
    Name : 'steve',
    Age: 9999,
    friends: ['natasha','thor','tony','bucci'],
    Address:{
        City: 'queens',
        state: 'haryana',
    },
    isavenger:false,
    sayHI: function(){
        console.log("cap america say hello");
    }

}
//whole object 
console.log(capamerica);

// acess from an objects
//name of capamerica
console.log(capamerica.Name);// just write the key with dot notation to acess
console.log(capamerica.Address.City);
// array ke elements ko acess krne k liye 
console.log(capamerica.friends[0]);
// function k liye 
console.log(capamerica.sayHI()); // yeh undefined isloye aaya bcz no return value
capamerica.sayHI();

console.log("object before update",capamerica)
// add a new key to objects
capamerica.Movies = ['avengers','civilwar','endsame']
// after updation
console.log("object after updation",capamerica)

// to delete jkey
delete capamerica.Movies;
console.log("after deletion",capamerica)
// change key
capamerica.isavenger=true;
console.log("after chnage of false to true",capamerica);
capamerica.Address.state= 'las vegas';
console.log("chnage of city",capamerica);

// access a key another way to access 

// 1. acess key
console.log(capamerica.Name);
// 2. tareeka
console.log(capamerica['Name']);
