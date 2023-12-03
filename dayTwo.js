/*

----->CallBack fnx: funcion passed as an argument to another function is callBack functions. Generally used for asyncronous tasks,promise.

------> Asynchronous : task that do not occur in sequential order and fo not block the execution of the program while waiting for their completion.

---->forEach((_)=>{})
let num=[1,2,3,4,5]
num.forEach((element)=>{
    console.log(element*element)
})
---->array.form() //used to create an array of html collection in dom/strings
let str="somash"
let arr=Array.from(str)
console.log(arr)
for (let i in arr){
    console.log(i)//index
}
for(let i of arr){
    console.log(i)//index's content
}
----->map : 
map ley naya array banaidinxa by performing some operations on elements unlike forEach jalley chai certain operations matra perform garxa array ma. eg: 
let num=[1,2,3,4,5,6]
let arrReturnedFromMap=num.map((value,index,array)=>{
    console.log(value,index,array)
    return value*value
})
console.log(arrReturnedFromMap)

----->Filter: (returns an array after performinng operations on array elements )filter le chai some condition milni values lai naya array ma return garaunxa.Filters an array with values that passes a test.eg: 

let num=[1,2,50,100,20,30,3]
let arr=num.filter((value)=>{
    return value==1  00
})
console.log(arr)

------>reduce : (returns value after opoerations)
let num=[1,2,3,4,5]
let value=num.reduce((val1,val2)=>{
    return val1+val2
})
console.log(value)

----> time timeEnd()
//comparing for loop and while loop speed
let i=0
console.time("while")
while(i<5)
{
    console.log("hello")
    i++
}
console.timeEnd("while")//same label

console.time("forLoop")
for(let j=0;j<5;j++){
    console.log("hellow")
}
console.timeEnd("forLoop")
*/