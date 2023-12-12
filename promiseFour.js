async function getAllUsers(){
    try{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
    }catch(error){
        console.log(error)
    }
}
getAllUsers()


//same thing using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))