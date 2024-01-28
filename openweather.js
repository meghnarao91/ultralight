function fetchWeather() {
    const apiKey = '0c3a5257a7392f30b7511af78c6a542a';
    const city = 'New York'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const temp = data.main.temp;
        const weatherDescription = data.weather[0].description;
        document.getElementById('weather').innerText = `${temp}°C and ${weatherDescription}`;
    })
    .catch(error => console.error('Error fetching weather:', error));
}

window.onload = () => {
    fetchWeather();
};