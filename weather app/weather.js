const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "777b782028e7826e840d4eea7057602e";

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

    card.innerHTML = "";
    card.style.display = "flex";

    const cityDisplay = createElement("h1", "cityDisplay", city);
    const tempDisplay = createElement("p", "tempDisplay", `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}&deg;F`);
    const humidityDisplay = createElement("p", "humidityDisplay", `Humidity: ${humidity}`);
    const descDisplay = createElement("p", "descDisplay", description);
    const weatherEmoji = createElement("p", "weatherEmoji", getWeatherEmoji(id));

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.innerHTML = text;
    return element;
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "🌧️";
        case weatherId >= 300 && weatherId < 400:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌧️";
        case weatherId >= 600 && weatherId < 700:
            return "🌨️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId >= 801 && weatherId < 810:
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = createElement("p", "errorDisplay", message);
    card.innerHTML = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
