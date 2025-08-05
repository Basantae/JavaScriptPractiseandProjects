    const apiKey = "a80925485c0271b4d564acd87990905d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector("#searchButton");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&units=metric&appid=${apiKey}`);
      const data = await response.json();
      
      if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = `${data.wind.speed}<br><span class="unit-suffix">km/h</span>`;
        
        // Weather emoji switch
        if (data.weather[0].main === "Clouds") {
          weatherIcon.innerHTML = "☁️";
        } else if (data.weather[0].main === "Clear") {
          weatherIcon.innerHTML = "☀️";
        } else if (data.weather[0].main === "Rain") {
          weatherIcon.innerHTML = "🌧️";
        } else if (data.weather[0].main === "Drizzle") {
          weatherIcon.innerHTML = "🌦️";
        } else if (data.weather[0].main === "Mist") {
          weatherIcon.innerHTML = "🌫️";
        } else if (data.weather[0].main === "Snow") {
          weatherIcon.innerHTML = "❄️";
        } else if (data.weather[0].main === "Thunderstorm") {
          weatherIcon.innerHTML = "⛈️";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
      }
    }

    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value.trim());
    });

    searchBox.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkWeather(searchBox.value.trim());
      }
    });

