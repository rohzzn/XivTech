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
