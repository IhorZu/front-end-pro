'use strict';

const URL = 'http://api.openweathermap.org/data/2.5/weather';

const textField = document.getElementById('text-field');
textField.addEventListener('change', (e) => {
    const cityName = e.target.value;
    getWeather(URL, cityName);
});

const getWeather = (URL, city = 'Kyiv') => {
    const params = `?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    const URI = URL + params;

    fetch(URI)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherContainer = document.querySelector('.weather');
                weatherContainer.classList.add('weather--is-visible');

                const city = document.querySelector('.weather__city');
                city.textContent = data.name;

                const icon = document.querySelector('.weather__icon');
                icon.innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='' />`;

                const temp = document.querySelector('.weather__temp-data');
                temp.textContent = data.main.temp;

                const pressure = document.querySelector('.weather__pressure-data');
                pressure.textContent = data.main.pressure;

                const description = document.querySelector('.weather__description');
                description.textContent = data.weather[0].description;

                const humidity = document.querySelector('.weather__humidity-data');
                humidity.textContent = data.main.humidity;

                const speed = document.querySelector('.weather__speed-data');
                speed.textContent = data.wind.speed;

                const deg = document.querySelector('.weather__deg-data');
                deg.textContent = data.wind.deg;
            } else {
                console.log(`Error ${data.cod} - ${data.message}`);
            }

        })
        .catch(error => {
            console.log(`Error: ${error.message}`);
        });
}
