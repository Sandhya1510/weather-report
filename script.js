const apiKey = '90361915a9939baf51d746c901a893f1'; 

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');

    // Clear previous results
    weatherResult.innerHTML = '';

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('City not found.');
        }

        const data = await response.json();
        displayWeather(data, city);
    } catch (error) {
        weatherResult.innerText = `Error: ${error.message}`;
    }
}

function displayWeather(data, city) {
    const { main, weather, wind, clouds, sys} = data;
    const weatherResult = document.getElementById('weatherResult');
 
    let forecastHTML = `
      <h2>Weather in ${city}</h2>
      <h3>Country: ${sys.country}</h3>
      <p>Temperature: ${main.temp}°C</p>
      <p>Pressure: ${main.pressure} Pa</p>
      
    `;

    weatherResult.innerHTML = forecastHTML;
}
