let jContainer=document.getElementById('jokecontainer');


// const apiKey='iJpNOuSTok39x1I/M2EFeQ==Zy8aSZkGfsLeWPuV'
const url="https://cat-fact.herokuapp.com/facts";

const generateRandomNumber=()=>{
      return Math.floor(Math.random()*5)
}
const getFacts=async()=>{
    let randomCatFacts=generateRandomNumber();
    console.log("getting data")
    let response = await fetch(url
    //     headers: {
    //       'X-Api-Key': apiKey,
    //       'Content-Type': 'application/json',
    //     },
    //   }
    );
    console.log(response);//response vaneko promise obj ho
    let data=await response.json()//usable data in form of js obj
    jContainer.innerHTML=data[randomCatFacts].text
    console.log(randomCatFacts)
}

//same thing using promise

/*
function getFacts(){
  fetch(url).then((response)=>{
    return response.json;
  })
  .then((data)=>{
    jContainer.innerHTML=data[randomCatFacts].text
    })
}\*/