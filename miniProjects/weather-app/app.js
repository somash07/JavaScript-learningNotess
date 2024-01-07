

const apiKey='ee041b3a9b6011bfd50ae763be7a02bd'
const TimeapiKey='iJpNOuSTok39x1I/M2EFeQ==Zy8aSZkGfsLeWPuV'
const card=document.querySelector('.card')
const errHead=document.querySelector('.errHead')
const searchBar=document.querySelector('form input')
const tempBox=document.querySelector('.temp-box p')
const weatherImage=document.querySelector('.weatherImg img')
const datecontainer=document.querySelector('.datecontainer')


let btn=document.querySelector('.search-btn')
btn.addEventListener('click',async (evt)=>{
	evt.preventDefault();
	const city=searchBar.value
	if(city===""){
		displayError("please enter a valid city.......")
	}
	else{
		try{
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
			const timeUrl=`https://api.api-ninjas.com/v1/worldtime?city=${city}`
			console.log(city.value)
			const response=await fetch(url)
			// console.log(response)
			let timeRes=await fetch(timeUrl,{
				method:'GET',
				headers: {
					'X-Api-Key': TimeapiKey,
					'Content-Type': 'application/json'
				  }
			})
			const time=await timeRes.json()
			console.log(time.date)
			const data=await response.json()
			console.log(data)
			await getWeatherData(data,city,time)
			

		}catch(err){
			displayError("please enter a valid city name")
		}
	}
})


function getWeatherData(data,city,time){

	card.style.display="flex"
	iconID=data.weather[0].id;

	for(weatherInformation of weatherData){
		if(iconID===Number.parseInt(weatherInformation.code)){
			console.log("hi")
			weatherImage.src = `https://openweathermap.org/img/wn/${weatherInformation.icon}@2x.png`;
			break;
		}
	}
	datecontainer.innerHTML=(time.date)
	temperature=(data.main.temp)
	tempBox.innerHTML=`${temperature} &deg;C`
	errHead.innerHTML=`Weather condition:  ${data.weather[0].description} in ${city}`

}

function displayError(msg){
	console.log("hiiii")
	errHead.innerHTML=msg
	card.style.display="none"
}




