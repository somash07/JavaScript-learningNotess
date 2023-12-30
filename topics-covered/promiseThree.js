/*
    promise is an object that represents the eventual completion or failure of asynchronous operations.

*/
// creating promise
const promiseOne=new Promise((resolve,reject)=>{
    //do an async task
    //Db calls,cryptography,networkcalls
    setTimeout(()=>{
        console.log("async task complete")
        resolve(100)//then ko code chalxa
    },2000)
})
//promise consuming

promiseOne.then((data)=>{
    console.log(data)
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false
        if(!err){
            resolve({username: "somash",password: "1234"})
        }
        else{
            reject('Error :something wrong')
        }
    },2000)
}).then((user)=>{
    console.log(user);
    return user.username//yo tala ko .then ma param janxa
})
.then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("promise resolved or rejected")
})

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false
        if(!err){
            resolve({username: "rameyBro",password: "1234"})
        }
        else{
            reject('Error :Js wrong')
        }
    },2000)
})
//async is used instead of then
async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response)
}

consumePromiseFive()