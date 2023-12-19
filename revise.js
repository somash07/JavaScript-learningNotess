function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data: ",dataId)
        if(getNextData){
            getNextData()
        }
    },2000)
}
//CallBackHell Problem.
getData(1,()=>{
    console.log("getting data2....")
    getData(2,()=>{
        console.log("getting data3.....")
        getData(3,()=>{
            console.log("getting data 4.")
            getData(4)
        })
    })
})

// promiseeee. ->solving callback hell

function getData(dataId){
    return new Promise((resolve,reject)=>{
        console.log("fetching data"+dataId)
        setTimeout(()=>{
            console.log("data: "+dataId)
            resolve("success")
        },3000)
    })
}
getData(1).then((val)=>{
    return getData(2)
})
.then((val)=>{
    return getData(3)
})
.then((val)=>{
    console.log(val)
})


//async-await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        console.log("fetching data"+dataId)
        setTimeout(()=>{
            console.log("data: "+dataId)
            resolve("success")
        },3000)
    })
}
async function getAlldata(){
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
}
getAlldata();// this is unnecesary so we can make it IIFE(Immediately invoked function expression).making getAlldata IIFE

(async function (){
        await getData(1)
        await getData(2)
        await getData(3)
        await getData(4)
})();//this is IIFI so no function call needed but only once execute hunxaaaa.
