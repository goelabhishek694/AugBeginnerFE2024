// Promise.all polyfill

// Promise.myAll -> 

// Promise.myAll = function(values){
//     return new Promise((resolve,reject)=>{
//         let result=[];
//         let total=0;
//         values.forEach((p,idx)=>{
//             Promise.resolve(p).then((res)=>{
//                 result[idx]=res;
//                 total++;
//                 if(total==values.length) resolve(result);
//             }).catch(err=>{
//                 result[idx]=err;
//                 reject(err)
//             })
//         })
//     })
// }

// let promisesArr=[Promise.resolve(1),Promise.reject("err"),Promise.resolve(30)];

// Promise.myAll(promisesArr)
// .then(results=>console.log(results))
// .catch(err=>console.log(err));


// Promise.myAny = function(values){
//     return new Promise((resolve,reject)=>{
    // if(values.length==0){
    //         reject(new AggregateError("no promises were provided"));
    //     }
//         let rejections=[];
//         let rejectedCount=0;
//         values.forEach((p,idx)=>{
//             Promise.resolve(p).then(res=>{
//                 resolve(res);
//             }).catch(err=>{
//                 //if all the promises are rejected then call reject 
//                 rejections[idx]=err;
//                 rejectedCount++;
//                 if(rejectedCount==values.length) reject(new AggregateError(rejections,"All Promises were rejected"))
//             });
//         });
//     });
// };

// let promisesArr=[Promise.resolve(1),Promise.reject("err"),Promise.resolve(30)];

// Promise.myAny(promisesArr)
// .then(res=>{
//     console.log(res);
// }).catch(err=>console.log(err))


Promise.myRace = function(values){
    return new Promise((resolve,reject)=>{
        if(values.length==0){
            throw new TypeError("Cannot perform Promise.race on an empty array");
        }
        values.forEach((p,idx)=>{
            Promise.resolve(p)
            .then(res=>resolve(res))
            .catch(err=>reject(err));
        })
    })
}

let promisesArr=[new Promise((resolve)=>setTimeout(()=>resolve(1),3000)),
                new Promise((resolve,reject)=>setTimeout(()=>reject(10),1000)),
                new Promise((resolve)=>setTimeout(()=>resolve(100),2000))
];


Promise.myRace(promisesArr).then(res=>console.log(res)).catch(err=>console.log(err));