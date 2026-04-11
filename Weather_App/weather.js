const API_KEY = "b867b000c27e90801a5bbfbee6fa7122";
document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const weatherResult = document.getElementById("weatherResult");

  errorMsg.classList.add("hidden");
  weatherResult.classList.add("hidden");

  if (!city) {
    errorMsg.textContent = "please enter a city name";
    errorMsg.classList.remove("hidden");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("cityName").textContent =
      `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent =
      `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent =
      `Condition: ${data.weather[0].description}`;
    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherResult.classList.remove("hidden");
  } catch (error) {
    errorMsg.textContent = error.message;
    errorMsg.classList.remove("hidden");
  }
}
