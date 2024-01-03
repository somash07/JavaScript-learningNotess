const apiKey='ee041b3a9b6011bfd50ae763be7a02bd'
const card=document.querySelector('.card')
const errHead=document.querySelector('.errHead')
const searchBar=document.querySelector('form input')


let btn=document.querySelector('.search-btn')
btn.addEventListener('click',async (evt)=>{
	evt.preventDefault();
	const city=searchBar.value
	if(city===""){
		displayError("BRO!!!enter a city.....")
	}
	else{
		try{
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
			console.log(city.value)

			const response=await fetch(url)
			console.log(response)
			const data=await response.json()
			console.log(data)
		}catch(err){
			displayError("please enter a valid weather")
		}
	}
})

getWeatherData=async(city)=>{

}

displayWeather=(data)=>{

}

getWeatherImg=(weatherId)=>{

}

displayError=(msg)=>{
	console.log("hiiii")
	errHead.style.color="red"
	errHead.innerHTML=msg
	card.style.display="none"

	setTimeout(()=>{
		errHead.innerHTML=""
	},2000)
}




