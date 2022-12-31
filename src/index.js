let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
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
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let date = now.getDate();
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${day}, ${date} ${month}, ${hour}:${minutes}`;

// Task 1

function showResult(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let maxTemp = document.querySelector("#max-temp");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);
  let minTemp = document.querySelector("#min-temp");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);
  let description = document.querySelector("#today-description");
  description.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = cityInput.value;
  let apiKey = "258213fabfb6e561af7eeb257d2a3047";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showResult);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", displayCity);

// Bonus Point

function showCurrentLoc(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "258213fabfb6e561af7eeb257d2a3047";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showResult);
}

function currentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLoc);
}

let currentLocButton = document.querySelector(".current-location");
currentLocButton.addEventListener("click", currentLoc);
