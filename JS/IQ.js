// Ques 1 

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }
// sayHi();
// variables declared using var is initialized by undefined by default . hence we can access them . 
//if values are unintialized , then they cannot be acessed . if we try to do it they give us error . 

// A: Lydia and undefined
// B: Lydia and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError


// Ques 2

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

  

// Ques 3

// for (let i = 0; i < 3; i++) {
//     //copy of i is created inside this loop
//     // this cb function remebers the value of i because of closures, hence value of i is used . 
//     setTimeout(() => console.log(i), 1);
//   }


  //Ques 4

//   const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter()); //20
//   console.log(shape.perimeter()); //nan


// Ques 5 

// const bird = {
//     size: 'small',
//   };
//   let obj={
//     size: 'small',
//   }

//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
// let random="size;"
//   obj.name_of_key / obj["nameofkey"]  / obj[random]-> obj["size"]-> "small"
// A: mouse.bird.size is not valid //error
// B: mouse[bird.size] is not valid //true
// C: mouse[bird["size"]] is not valid //true 
// D: All of them are valid

// Ques 6 

// let c = { greeting: 'Hey!' }; //4k -> obj 
// let d;

// d = c; //4k 
// c.greeting = 'Hello';
// console.log(d.greeting);


// Ques 7 

// class Chameleon {
//     //are designed to live only oin the constructor in which they are creates and cannot be passed down to any children or called upon class instances. 
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//       console.log(newColor);
//     }
// }
  
//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange')); //type error 

// Ques 8 

// constructor function 
//   function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   const member = new Person('Lydia', 'Hallie');
// //   this-> {firstName: "Lydia", lastName:"Hallie"}
// console.log(member);
// //   Person.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`;
// //   };

//   Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());


//   Ques 9 

// function sum(a, b) {
//     return a + b;
//   }
  
//   console.log(sum(1, '2'));
  
//   Ques 10 

// let number = 0;
// console.log(number++); //0
// console.log(++number); //2
// console.log(number); //2

// Ques 11 
// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//       console.log('You are still an adult.');
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
//   }
  
//   checkAge({ age: 18 });


//   Ques 12

// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// let fn=sayHi.bind(person, 21)
// console.log(fn());

// Ques 13 

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });
  
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
  
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));



// closures
// var num=10;
// function b(){
//   let a=100;
//   console.log(num);
// }
// function fn(){
//   var num=20;
//   b();
//   console.log(num);
// }
// fn();

console.log(a);
var a=10; //-> default initalised by default with value ud 

// console.log(b);
let b;
console.log(b);
b=100;
console.log(b);
//let b=100; // -> initlaised with 100 , if it not initlaised with a value , it remains in tdz. u cannot access this variable. 

// console.log(c);
// const c=1000;

// hello();
// function hello(){
//   console.log("hello");
// }

// const hello=function(){
//   console.log("hello");
// }
console.log(hello);
hello();
var hello=()=>{
  console.log("hello");
}
// hello();