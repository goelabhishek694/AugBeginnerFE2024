// let a=10; 
// let b=a;
// console.log(a);
// console.log(b);
// console.log(a==b);

// b=20;
// console.log(a);
// console.log(b);


// // non-primitves

// let obj={
//     name:"Sahil"
// };

// let obj2=obj;

// console.log(obj==obj2);

// let obj3={
//     name:"Sahil"
// };

// console.log(obj==obj3);


// let zoo = { //12k
//     name: "Amazing Zoo",
//     location: "Melbourne, Australia",
//     animals: [
//       {
//         species: "Lion",
//         favoriteTreat: "Meat",
//       },
//       {
//         species: "Panda",
//         favoriteTreat: "Bamboo",
//       },
//     ],
//   };
//spread operator 
//   let shallowCopyZoo = {...zoo}; //16k

//   shallowCopyZoo.name="Let live";
//   shallowCopyZoo.location="Delhi,India";
//   shallowCopyZoo.animals[0].species="Tiger";

//   console.log(zoo);
//   console.log(shallowCopyZoo);

//   console.log(zoo.animals==shallowCopyZoo.animals); //true 

//Object.assign(target,source)
//target-> inside which key value is copied . source-> from where key value is copied 
// let shallowCopyZoo=Object.assign({},zoo)
// console.log(zoo);
// console.log(shallowCopyZoo);


// Deep Copy 

// let deepCopyZoo=JSON.parse(JSON.stringify(zoo));
// deepCopyZoo.animals[0].species="Tiger";
// console.log(zoo);
// console.log(deepCopyZoo);

// console.log(zoo.animals==deepCopyZoo.animals); //false 

//stringify+parse 
// 1. it is very expensive , resource intensive . tc 
// 2. functions Dates and undefined is lost 

//what is the best way to deep copy ?
// ans -> we use 3rd party libraries -> lodash -> deepClone -> 

//polyfill of deep copy 


// const originalObj = {
//     name: "Alice",
//     age:12,
//     details: {
//         age: 30,
//     },
//     hobbies: ["reading", "cycling", "hiking"]
//     // greet() {
//     //     console.log(`Hello, my name is ${this.name}!`);
//     // }
// };

// // obj-> details obj , key = details
// function deepClone(obj){
//     const isArray=Array.isArray(obj);
//     let cloning=isArray?[]:{};

//     for(let prop in obj){
//         if(obj.hasOwnProperty(prop)){ //that prop is not of prototype or inherited basically. 
//             if(typeof obj[prop]==='object'){
//                 cloning[prop] = deepClone(obj[prop]);
//             }
//             else{
//                 cloning[prop] = obj[prop];
//             }
//         }
//     }
//     return cloning;
// }

// let deepCopiedObj=deepClone(originalObj);
// console.log(deepCopiedObj==originalObj);
// // deepCopiedObj.details.hobbies[0]="eating";
// console.log(originalObj);
// console.log(deepCopiedObj);





//flatten an array 
// let arr=[1,2,3,[4,5,[6,7,8]]] -> [1,2,3,4,5,6,7,8]
let arr=[1,2,3,[4,5,[6,7,8,[9,10,[11,12]]]]];




function flattenArray(arr){
    let flattenedArr=[];
    for(let i=0;i<arr.length;i++){
        let ele = arr[i];
        if(Array.isArray(ele)){
            let smallFlattenedArr=flattenArray(ele);
            // console.log(smallFlattenedArr);
            flattenedArr.push(...smallFlattenedArr)
        }else{
            flattenedArr.push(arr[i]);
        }
    }
    return flattenedArr;
}

let flattenedArr = flattenArray(arr);
console.log(flattenedArr);


// IQ -> flatten upto a particular level . n=3
// i/p -> [1,2,3,[4,5,[6,7,8,[9,10,[11,12]]]]];
// o/p -> [1,2,3,[4,5,6,7,8,9,10,11,12]];


// flatten an object  -> HW 
// let dog={
//     fName:"Tommy",
//     breed:"labrador",
//     address:{
//         street: {"name":"Vasant Vihar",number:4},
//         city:"New Delhi"
//     }
// }

// let dog={
//     "fName":"Tommy",
//     "breed":"labrador",
//     "address.street.name":"Vasant Vihar",
//     "address.street.number":4,
//     "address.city":"New Delhi"
// }