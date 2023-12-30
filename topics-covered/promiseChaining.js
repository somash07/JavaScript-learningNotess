//chaining promise and passing resolved values to one another.Idea is to pass the result through the chain of .then handlers.
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("resolved after 2 secs")
        resolve(56)
    },2000)
})
p1.then((value)=>{
    // let err=true;
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        resolve("promise2")
    })
    return p2
})
.catch((err)=>{
    console.log(err)
})
.then((value)=>{
    console.log(value)//"promise 2 aaunxa"
    return 2
})
.then((value)=>{
    setTimeout(()=>{console.log(value)},3000)
})
