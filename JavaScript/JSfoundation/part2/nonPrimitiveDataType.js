// 1.Object
let obj = {};
console.log(obj);
console.log(typeof obj);

const username = { // username : object is fixed but inside this *
    firstname : "Aditya",  // *-> these primitives can be changed
    lastname : "Sharma",
    Email : "abc@gmail.com",
    isLoggedin : true,
    "Ph_no" : "12335536" //**specific
};
console.log(username);
console.log(username.firstname);
console.log(typeof username);

username.firstname = "aadi"; // firstname changed to aadi
console.log(username);
console.log(username.firstname);

username.gender = "male"; // add new primitive
console.log(username);

console.log(username['Ph_no']); // **specific
console.log(username);
console.log(typeof username);

//Date
let today = new Date();
console.log(today);
console.log(today.getDate()); //  date: 1-31
console.log(today.getDay());
/* sun=1
   mon=2
   .
   .
   .
   sat=3
*/


// 2.Arrays : collecction of data
let heros = ["ironman","spiderman","batman"]
console.log(typeof heros);
console.log(heros);

let anotheUser  = ["Aditya",true,21]
console.log(anotheUser[0]);

//(some times javascript work smartly -> assume related to given data : string + might be string )
console.log(1 + '1'); // out : 11
console.log("1" + 1); // out : 11

// true = 1 , false = 0
let isValue = true;
console.log(Number(isValue)); // implicit conversion

console.log(isValue + 1); //2

let value = "2abc"
console.log(Number(value)); //NaN
console.log(typeof Number(value)); //type of NaN : out ->Number

console.log(Number(null)); //0
console.log(Number(undefined)); // NaN










