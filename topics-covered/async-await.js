/*
    Async fnx always returns a promise.
    ->different async fnx executes parallely.
*/
async function learningAsync(){
    let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data1")
    },3000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data2")
    },5000)
})
console.log("fetching p1")
let p1res=await p1
console.log("fetching p2")
let p2res=await p2
return[p1res,p2res]
}

console.log("welcome to asycfnx ")
learningAsync().then((val)=>{
    console.log(val)
})

