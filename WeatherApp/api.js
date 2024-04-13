const apiKey = "3881c4017e043669f99dac87de760822";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();

    console.log(data);


    // Will hide weather info if city not found
    if (data.message == "city not found") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    //changing weather data
    // added by myself temp_max, temp_min, feels_like, pressure

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
    document.querySelector(".temp_max").innerHTML =  Math.round(data.main.temp_max) + ' °c';
    document.querySelector(".temp_min").innerHTML =  Math.round(data.main.temp_min) + ' °c';
    document.querySelector(".feels_like").innerHTML =  Math.round(data.main.feels_like) + ' °c';
    document.querySelector(".pressure").innerHTML =  data.main.pressure + ' hPa';

    //changing weather icons depends of weather

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }

    //making weather visiable if city is found and disalbe error if city is correct

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})