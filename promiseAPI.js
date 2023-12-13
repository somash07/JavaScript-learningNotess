/*
    SIX static methods of Promise class:
    1. Promise.all(promise_array)-euta reject vayey sakko
    2. Promise.allSettled(promis_array)-status ra value dinxa even if one is rejected.
    3.Promise.race(promise_array): jun pahila resolve hunxa tei dekhauni.
    4.Promise.any(promise_array): resolve huni madhey kun xito hunxa.reject vae ni op chai dinxa.If all rejected then AggregateError.
    5.Promise.resolve(value): makes a resolved promise.
    6Promise.reject(err):makes a rejected promise with the given error
*/
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    },4000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(new Error("error loading"))
        resolve("value2")
    },2000)
})
.catch((err)=>console.log(err))
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    },3000)
})

p1.then((value)=>console.log(value))
p2.then((value)=>console.log(value))
p3.then((value)=>console.log(value))

// let promise_all=Promise.all([p1,p2,p3])
// //tintai promise resolve vayepaxi tyo value ko array bandinxa.if any promise rejected,other results ignored.
// promise_all.then((value)=>{
//     console.log(value)
// })

// Promise.allSettled([p1,p2,p3]).then((value)=>{
//     console.log(value)
// })

// Promise.any([p1,p2,p3]).then((value)=>{
//     console.log("any"+value)
// })


// Promise.race([p1,p2,p3]).then((value)=>{
//     console.log("reace"+value)
// })

