/*
    error vetda ni tala ko code chalos.
    ->try catch works synchronously. If an exception happens in scheduled code, like in setTimeout then try---catch wont catch it.egg:
            try{
                setTimeout(()=>{
                    console.log("procee 2")
                    console.log(jpterror)
                },3000)
                }catch(err){
                    console.log("eroor")
            }

        istead we can 

        setTimeout(()=>{
            console.log("procee 2")
            try{
            console.log(jpterror)
            }catch(err){
                console.log("eroor")
            }
        },3000)

*/
setTimeout(()=>{
    console.log("process 1")
},1000)
try{
console.log(smth)
}catch(err){
    console.log("error first")
}

setTimeout(()=>{
    console.log("procee 2")
    try{
    console.log(jpterror)
    }catch(err){
        console.log("eroor")
    }
},3000)

setTimeout(()=>{
    console.log("process3")
},5000)

