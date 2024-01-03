const apiKey='ee041b3a9b6011bfd50ae763be7a02bd'
const card=document.querySelector('.card')
const errHead=document.querySelector('.errHead')
const searchBar=document.querySelector('form input')

const tempBox=document.querySelector('temp-box')


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
			console.log(response)
			const data=await response.json()
			console.log(data)

			getWeatherData(data.main.temp)

		}catch(err){
			displayError("please enter a valid weather")
		}
	}
})

displayWeather=(data)=>{

}

getWeatherData=(temp)=>{
	temp-box.innerHTML=temp
}

displayError=(msg)=>{
	console.log("hiiii")
	errHead.style.color="#f08080"
	errHead.innerHTML=msg
	card.style.display="none"

	setTimeout(()=>{
		errHead.innerHTML=""
	},3000)
}




