//showing the date
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
hours = hours.toString();
if (hours.length === 1) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
minutes = minutes.toString();
if (minutes.length === 1) {
  minutes = `0${minutes}`;
}
let todayDate = document.querySelector("#today-date");
todayDate.innerHTML = `${day} ${hours}:${minutes}`;
//searching form
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let todayTempElement = document.querySelector("#today-temp");
  todayTempElement.innerHTML = temperature;
}

function showCityName(event) {
  event.preventDefault();
  let cityNameElement = document.querySelector("#search-city-input");
  let cityName = cityNameElement.value;
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = cityName;
  let myKey = "68548d6af374817b9b8a629525c6ac52";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let searchCity = document.querySelector("#search-city-form");
searchCity.addEventListener("submit", showCityName);
