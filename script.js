function getWeather() {
    const apiKey = '94f467704d9a9e5818fdc34908b1421d';
    const city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>City not found</p>`;
            } else {
                const temperatureCelsius = data.main.temp;
                weatherInfo.innerHTML = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${temperatureCelsius} &#8451;</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


// Question 1 
/*
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;
    const weatherResults = await getWeatherData(cities);
    res.json({ weather: weatherResults });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function getWeatherData(cities) {
  const apiKey = '94f467704d9a9e5818fdc34908b1421d'; // Replace with your OpenWeatherMap API key
  const weatherResults = {};

  await Promise.all(
    cities.map(async (city) => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        const temperature = response.data.main.temp;
        const celsiusTemperature = (temperature - 273.15).toFixed(2);
        weatherResults[city] = `${celsiusTemperature}C`;
      } catch (error) {
        weatherResults[city] = 'N/A';
      }
    })
  );

  return weatherResults;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/