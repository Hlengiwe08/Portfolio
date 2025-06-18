window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else {
    document.getElementById("weather").innerText = "Geolocation not supported.";
  }
};

function showWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = "YOUR_API_KEY"; // Get from openweathermap.org
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
    
}
