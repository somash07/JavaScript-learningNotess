

const apiKey='ee041b3a9b6011bfd50ae763be7a02bd'
const card=document.querySelector('.card')
const errHead=document.querySelector('.errHead')
const searchBar=document.querySelector('form input')
const tempBox=document.querySelector('.temp-box p')
const weatherImage=document.querySelector('.weatherImg img')


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
			console.log(city.value)
			const response=await fetch(url)
			// console.log(response)
			const data=await response.json()
			console.log(data)
			await getWeatherData(data,city)
			

		}catch(err){
			displayError("please enter a valid city name")
		}
	}
})

displayWeather=(data)=>{

}

function getWeatherData(data,city){

	iconID=data.weather[0].id;

	for(weatherInformation of weatherData){
		if(iconID===Number.parseInt(weatherInformation.code)){
			console.log("hi")
			weatherImage.src = `https://openweathermap.org/img/wn/${weatherInformation.icon}@2x.png`;
			weatherImage.style.height="15vh"
			break;
		}
	}

	temperature=(data.main.temp)
	tempBox.innerHTML=`${temperature} &deg;C`
	errHead.innerHTML=`Weather condition:  ${data.weather[0].description} in ${city}`
	


}
displayError=(msg)=>{
	console.log("hiiii")
	errHead.innerHTML=msg
	errHead.style.color="#f08080"
	card.style.display="none"
}




