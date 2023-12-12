// const cart=["shoes","pants","books"]

// const promise=createOrder(cart);//createrOrder() returns and empty obj with some property data ie {data: undefined} and after whatever asyc time some data aaunxa.
// promise.then((orderId)=>{
//     proceedToPayment(orderId);
// })// this callback is called whenever there is data inside of the promiseObject.ONLY ONCE


const GITHUB_API="https://api.github.com/users/somash07"

const user=fetch(GITHUB_API);//promise obj.

user
.then((data)=>console.log(data))