let createTodo=async()=>{
    let options ={
        method : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'somash',
            body: 'dai',
            userId: 11,
        }),
    }
    const url="https://jsonplaceholder.typicode.com/posts"
    let promise= await fetch(url,options)
    
    let response=await promise.json();
    return response
    }
    
    const mainFunc=async()=>{
        let todo=await createTodo();
        console.log(todo)
    }
    
    mainFunc();