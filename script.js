window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, showError);
  } else {
    document.getElementById("weather").innerText = "Geolocation is not supported by your browser.";
  }
};

function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = "200ba9f660df290f15b2b25b00874d92";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const city = data.name;
      const desc = data.weather[0].description;
      document.getElementById("weather").innerText = 
        `Current weather in ${city}: ${temp}°C, ${desc}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerText = "Could not retrieve weather data.";
    });
}

function showError(error) {
  document.getElementById("weather").innerText = "Location access denied or unavailable.";
}
