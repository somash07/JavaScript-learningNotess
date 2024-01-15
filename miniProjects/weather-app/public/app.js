
const apikey='ee041b3a9b6011bfd50ae763be7a02bd'
const timeApiKey='iJpNOuSTok39x1I/M2EFeQ==Zy8aSZkGfsLeWPuV'
const firstCard=document.querySelector('.first-card')
const Lastcard=document.querySelector('.second-card')
const weatherMsg=document.querySelector('.weather-msg')
const searchBar=document.querySelector('form input')
const tempBox=document.querySelector('.temp-box p')
const weatherImage=document.querySelector('.weatherImg img')
const datecontainer=document.querySelector('.datecontainer')
const windinf=document.querySelector('.windinf')
const humidityinf=document.querySelector('.humidityinf')
const minmax=document.querySelector('.minmax')
const pressureinf=document.querySelector('.pressureinf')
let btn=document.querySelector('.search-btn')
btn.addEventListener('click',async (evt)=>{
	evt.preventDefault();
	const city=searchBar.value
	if(city===""){
		displayError("please enter a valid city.......")
	}
	else{
		try{
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
			const timeUrl=`https://api.api-ninjas.com/v1/worldtime?city=${city}`
			console.log(city.value)
			const weatherResponse=await fetch(url)
			// console.log(response)
			let timeResponse=await fetch(timeUrl,{
				method:'GET',
				headers: {
					'X-Api-Key': timeApiKey,
					'Content-Type': 'application/json'
				  }
			})
			const time=await timeResponse.json()
			console.log(time)
			const data=await weatherResponse.json()
			console.log(data)
			await getWeatherData(data,city,time)
		}catch(err){
			displayError("trycatch")
		}
	}
})


function getWeatherData(data,city,time){
	let iconID=data.weather[0].id;
	for(weatherInformation of weatherData){
		if(iconID===Number.parseInt(weatherInformation.code)){
			console.log("hi")
			weatherImage.src = `https://openweathermap.org/img/wn/${weatherInformation.icon}@2x.png`;
			break;
		}
	}
	pressureinf.innerHTML=`Pressure : ${data.main.pressure}`
	humidityinf.innerHTML=`Humidity: ${data.main.humidity}`
	minmax.innerHTML=`Max-temp: ${data.main.temp_max}<br>Min-temp: ${data.main.temp_min}`
	windinf.innerHTML=`Wind-Speed: ${data.wind.speed}\nDegree: ${data.wind.deg}`
	datecontainer.innerHTML=`- As of ${time.datetime}`
	temperature=(data.main.temp)
	tempBox.innerHTML=`${temperature} &deg;C`
	weatherMsg.innerHTML=`Observed ${data.weather[0].description} in ${data.name}`

}

function displayError(msg){
	console.log("k garya vai")
	weatherMsg.innerHTML=msg
}




