/* 
    var vaneko global scope ko hunxa tara let ra const block scoped

    NNBBSSU

    object: 
    const Obj={
        "key1":"value1",
        "key2":"value2"
    }
    //accessing 
    console.log(Obj["key1"]) 

                LOOPS: 
    1.for 
    let n=Number.parseInt(prompt("enter any number"))
    let sum=0
    for(let i=1;i<=n;i++){
        sum=sum+i
    }
    console.log(sum)

    2> For In loop 

    let obj={
        somash: 30,
        sumina:40,
        shirshak:50
    }
    for(let a in obj){//a print garaunda keys dekhaunxa
        console.log(a)
    }

    3.for of loop : iterable huna parxa ie string or arrays.
    
    #ARROW FUNCTION : 
    
    const arrowFnc=(param1,param2)=>{
        return param1+param2
    }
    
    console.log(arrowFnc(2,2))

                STRINGS(immutable):
    
---->Template literals- `${var name}`  
#inserting variable directly inside tempelate literal is termed 'INTERPOLATION' .
eg: 
let name1="hello"
let name2="world"
let sent=`${name1} to the  ${name2}`
console.log(sent)

---->String methods: 
let namee="somash"
console.log(namee.length)//returns length
console.log(namee.toUpperCase())
console.log(namee.toLowerCase())
//>>SLICE
let name2=namee.slice(2,5)//last ko include hunna ie name index 2 dekhin index 4
console.log(name2)
let name3=namee.slice(2)//yo garda index 2 dekhin end samman aaunxa
console.log(name3)

console.log(namee.replace("som","sum"))
-->trim
let trimVar="       Somash       "
console.log(trimVar.trim())//white space khanxa


                ARRAYS(mutable): 

 
                let arr=[1,2,3,4,5]
                console.log(arr.toString())//string
                console.log(arr.join('seprator'))//string 
                let poppedElement=arr.pop()//original array lai nai change garxa ani return chai popped element lai garxa
                console.log(arr,"popped element: ",poppedElement)
                
                let newArrayLength=arr.push(6)//original array lai nai change garxa ani return chai new length of array garxa
                console.log(arr,"length of array is: ",newArrayLength)
                
                let r=arr.shift()//original array lai nai modify garxa by removing first element of the array and returns the removed element jhust like pop
                console.log(r,"modified array: ",arr)
                
                let s=arr.unshift(44)//0 position ma 44 halera original array lai modify garxa ani returns new array length just like push 
                console.log(s,"new array: ",arr)
                
                delete arr[0]//elley delete ta garxa 0 position ko but aray length affect hunna
                console.log(arr.length,arr)//op: 5 [ <1 empty item>, 2, 3, 4, 6 ]
                
                let arr2=[4,5,6,7]
                let arr3=[8,9,0,11]
                let newarr=arr.concat(arr2,arr3)//naya array banaunxa concat vako array lai affect hunna
                console.log(newarr)

                let comp=(a,b)=>{
                    return a-b //If the result is negative, a comes before b in the sorted array. If the result is positive, b comes before a. If the result is zero, the order remains unchanged.
                    //return b-a garda descending as b-a garda postivie aayo b aagdi janxa
                }
                let num=[1,12,111113,22224,5,6]
                num.sort()//alphabetically sort ie one bata suru vako first ma ani two vakooo haru and sooo onn. original array lai nai change garxa
                console.log(num)
                num.sort(comp)
                console.log(num)

                --->splice : syntax .splice(start,kati ota delete,delete vako thau ma k rakhni)
                let num=[1,2,3,4,5,6,7,8]
                num.splice(0,3,11,12,13)//modifies original array and return deleted elements from array
                console.log(num)
*/
                
