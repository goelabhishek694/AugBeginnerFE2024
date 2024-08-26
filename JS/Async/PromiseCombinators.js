// // Promise.all -> takes an iterbale of promises as input and return a single promise as o/p . 

// input -> arr of promises 
// o/p -> new promise that always resolves 
// resolves -> 1. if all promises are fuflfilled -> array with each index containing the result of promise 
            // 2. if any of the promise gets rejected -> rejection message 

// function fetchUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({userId:1, userName: "Sai"})
//         },100)
//     })
// }

// function fetchUserPosts(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve(["Post1","Post2","Post3"])
//             reject("fetchUserPosts rejected: data could not be fetched")
//         },1000)
//     })
// }

// let allDataPromise=Promise.all([fetchUserData(),fetchUserPosts()]);
// allDataPromise.then(result=>{
//     console.log("userData", result[0]);
//     console.log("userPosts", result[1]);
// })
// .catch(err=>{
//     console.log(err);
// })


// Promise.allSettled -> waits for all the promises to either resolve or reject and then resolves with an array of objects represeting the outcome of each promise . useful when u need all promises top be completed(settled) regardless of their individual success or failure


// input -> arr of prmises 
// o/p -> new promise that always resolves 
// resolves -> array of objects . each objects represents the result of each prmise. status: fulfilled with a Value. or status: rejected with a reason



// function fetchUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({userId:1, userName: "Sai"})
//         },100)
//     })
// }

// function fetchUserPosts(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve(["Post1","Post2","Post3"])
//             reject("fetchUserPosts rejected: data could not be fetched")
//         },1000)
//     })
// }

// let failedPromises=[];
// let promiseArr=[fetchUserData(),fetchUserPosts()];
// Promise.allSettled(promiseArr)
// .then(results=>{
//     results.forEach((result,index)=>{
//         if(result.status=="fulfilled"){
//             console.log(result.value);
//         }else if(result.status=="rejected"){
//             console.log(result.reason);
//             failedPromises.push(promiseArr[index])
//         }
//     })
//     console.log(failedPromises);
// })


// Data Loading : 5 sources . and if data of 1 sources is blocked . show data from other 4 sources. 


// Promise.race

function quickResolve(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("quickly resolved")},1000)
    })
}

function slowResolveOrFastReject(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("quickly resolved")},2000)
        setTimeout(()=>{reject(new Error("quickly rejected"))},500)
    })
}

// Promise.race([quickResolve(),slowResolveOrFastReject()])
// .then(result=>{
//     console.log("result: ",result);
// }).catch(err=>{
//     console.log(err);
// })

// Use cases 
// Timeouts for Promises: Ensuring that a promise either resolves within a certain time or times out, especially useful for network requests or any operations where a response time guarantee is needed.
// Responding to User Interaction: Returning the result of whichever user interaction completes first (like clicking a button vs automatic timeout).
// System Resource Races: Handling scenarios where multiple resources are requested and only the first is needed.


Promise.any([quickResolve(),slowResolveOrFastReject()])
.then(result=>{
    console.log("result: ",result);
}).catch(err=>{
    console.log(err);
})

// use cases 
// Fetching Redundant Resources: Loading the same resource from multiple sources or mirrors and using the first successful load.
// Service Availability: Sending requests to multiple services or endpoints where you only need a response from one to proceed.
// Competitive Conditions: Handling scenarios where multiple potential sources of data or actions are available, and only the fastest (first successful) is needed.