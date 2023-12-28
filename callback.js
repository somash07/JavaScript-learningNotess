/*callbacks: function passed as an parameter in another function.
asynchronous task garna kaam lagxa.


-> closure : a fnx bind together with its lexical environment.

Asynchrounous actions are actions that we initiate now and they finish later.

Pyramid of Doom: horizontally grow.pyramid of these calls grows towards the right with every asyncronous action.
*/

// setTimeout(()=>{
//     console.log("hiii im running")
// },3000)


const cart=['apple','banana','note','pen']
//callBackHell->dependency in flow.api dependent on one after another.call back inside another call back. code grows horizontally not vertically.str is pyramid of doom.Example: 

api.createOrder(cart,()=>{
    api.proceedToPayment(()=>{
        api.showOrderSummary(()=>{
            api.updateWallet()
        })
    })
})

//Inversion of control: tala ko example ma proceedToPayment() ko control createOrder() ley garxa. which can be imp part of code.as it is responsibility of createOrder() to call the proceedToOrder()

api.createOrder(cart,()=>{
    api.proceedToPayment()
})