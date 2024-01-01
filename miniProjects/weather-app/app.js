const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kathmandu';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '484b3471c9msh96bf41474e8aa0fp175567jsn647f510aa9a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
getdata =async()=>{
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getdata()