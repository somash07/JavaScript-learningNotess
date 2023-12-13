//Attaching multiple handler to a promise is different from promise chaining

//return nagari ni multiple handler hanna milxa.

//'return garda promise narakhi value pathauda resolved promise vayera janxa value. 

//all handlers runs independently


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve(1)
},2000)
})
.then((value)=>{
    console.log("resolved with value with value"+value)
})
.then(()=>{
    console.log("im second handler")
})