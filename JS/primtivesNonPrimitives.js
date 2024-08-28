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


const originalObj = {
    name: "Alice",
    age:12,
    details: {
        age: 30,
    },
    hobbies: ["reading", "cycling", "hiking"]
    // greet() {
    //     console.log(`Hello, my name is ${this.name}!`);
    // }
};

// obj-> details obj , key = details
function deepClone(obj){
    let isArr=Array.isArray(obj);
    let copy=isArr?[]:{};
    for(let key in obj){
        if(Array.isArray(obj[key])){
            copy[key]=[...obj][key];
            for(let i=0;i<copy[key].length;i++){
                if(copy[key][i]=="object"){
                    copy[key][i]=deepClone(obj[key][i]);
                }
            }
        }
        else if(typeof obj[key] == "object"){
            copy[key] = deepClone(obj[key])
        }else{
            copy[key] = obj[key];
        }
    }
    return copy;
}

let deepCopiedObj=deepClone(originalObj);

// deepCopiedObj.details.hobbies[0]="eating";
console.log(originalObj);
console.log(deepCopiedObj);

