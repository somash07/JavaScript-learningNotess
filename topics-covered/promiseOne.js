/*
    ----->promise
    - promise of code execution.
    -resolved or reject but fulfill
    -syntax: let promise=new promise((res,rej)=>{
    
    })  
    -resolve(value)
    -reject(error)
    -2 properties: result and state.
            result initially undefined and state initially pending
            result can be resolved or rejected while state can be pending or fulfilled(resolved,rejected) 


*/
//parallel execution of promise
let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("resolved")
        resolve("aything")
    },5000)

})  
let p2=new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("reject")
        reject(new Error("i am error"))
    },5000)

})  
p1.then((value)=>{
    console.log(value)
})
p2.catch((error)=>{ //error handeling.
    console.log("some error occured")
})
console.log(p1,p2)