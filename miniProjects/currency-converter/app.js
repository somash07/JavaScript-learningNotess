const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const msg=document.querySelector(".msg")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const dropDown=document.querySelectorAll(".dropdown select");
let i=0;
for(let select of dropDown){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="NPR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    // console.log(currCode)
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img")
    img.src=newSrc;
}

const btn=document.querySelector("form button")
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".amount input")
    let amtVal=amt.value;
    if(amtVal===""||amtVal<1){
        amtVal=1;
        amt.value="1";
    }

    const url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

    let response=await fetch(url);
    console.log(response);
    let data=await response.json();
    console.log(data);

    let rate=data[toCurr.value.toLowerCase()];
    let finalAmt=amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`

})

