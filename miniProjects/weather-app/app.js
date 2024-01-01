


// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kathmandu';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '484b3471c9msh96bf41474e8aa0fp175567jsn647f510aa9a6',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// getdata =async()=>{
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// getdata()

let btn=document.querySelector('.search-btn')
btn.addEventListener('click',async (evt)=>{
	evt.preventDefault();
	let city=document.querySelector('form input')
	console.log(city.value)

	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city.value}`;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '484b3471c9msh96bf41474e8aa0fp175567jsn647f510aa9a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
	};
	
	const response = await fetch(url, options);
	let data=await response.json()
	document.getElementById('temperature').innerHTML=data.temp
			
	
})

