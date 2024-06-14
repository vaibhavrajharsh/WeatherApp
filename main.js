const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");


 async function checkWeather(city) {
   const apikey = "ca58c19f5ef14f1cb4591244241406";
   const apiurl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;

   const weatherData = await fetch(`${apiurl}`).then(response => response.json());

   
  document.getElementById("place").innerHTML =  weatherData.location.name;
  document.getElementById("temperature").innerHTML = Math.round(weatherData.current.temp_c) + "°c" ;
  document.querySelector(".aqi").innerHTML = "AQI " + weatherData.current.air_quality.co;
  document.querySelector(".heatidx").innerHTML = "Feels Like " + weatherData.current.heatindex_c;
  document.querySelector("#humidity").innerHTML = weatherData.current.humidity+ " %";
  document.querySelector("#speed").innerHTML = weatherData.current.wind_kph + " km/h";
  document.querySelector(".weather-icon").src = weatherData.current.condition.icon;
  
  document.querySelector(".weather-info").classList.remove("none");
  
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
});


