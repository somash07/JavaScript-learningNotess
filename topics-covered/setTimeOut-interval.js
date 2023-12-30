/*setTimeout: after certain time execute JS program
syntax: let timerId=setTimeout(function,delayin ms,arg1,arg2)
 
setInterval: repeat ater certain interval

*/

// let a=setTimeout(function(){
    //     alert("inside settimeout")
    // },2000)    -2000 miliseconds and returns a timerId
    
    //clearTimeout(a)->used to cancel the execution 
 const sum=(a,b)=>{
    alert("after 2 sec")
    a+b
 }
 let i=0
 const time=()=>{
    console.log(++i)
 }
 let a=setTimeout(sum,2000,2,2)//sum->fnc name,2000->milisec,(2,2)->arg for sum

let b=setInterval(time,1000)
setTimeout(function cls(){
    clearInterval(b)
},5000)

//stop counting after 5000ms