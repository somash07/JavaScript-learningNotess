/*
    custom err: throw new Error("eror msh")
    custom err: throw new ReferenceError("eror msh")

    differt error that can be thrown : 
        SyntaxError 
        ReferenceError etc

    finally: one more code clause.chalxa chalxa.final cleanup.


     
*/
try{
let age=Number.parseInt(prompt("enter age: "))
if(age>150){
    throw new Error("this is not true age")
}
}catch(error){
    console.log(error.name)//error ko naam
    console.log(error.message)//message
    console.log(error.stack)//message
}finally//catch ma ni error aaunxa sakxa
{
    console.log("im am finally block")
    //close the file
    //exit the loop
    //write to the log file
}