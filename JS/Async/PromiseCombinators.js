// Promise.all -> takes an iterbale of promises as input and return a single promise as o/p . 

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userId:1, userName: "Sai"})
        },100)
    })
}

function fetchUserPosts(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve(["Post1","Post2","Post3"])
            reject("fetchUserPosts rejected: data could not be fetched")
        },1000)
    })
}

let allDataPromise=Promise.all([fetchUserData(),fetchUserPosts()]);
allDataPromise.then(result=>{
    console.log("userData", result[0]);
    console.log("userPosts", result[1]);
})
.catch(err=>{
    console.log(err);
})