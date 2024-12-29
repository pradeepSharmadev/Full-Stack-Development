/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7d7dbccadaaf68f6334d3696964c15f9

https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}

https://api.openweathermap.org/data/2.5/weather?q={delhi}&appid=7d7dbccadaaf68f6334d3696964c15f9

https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=7d7dbccadaaf68f6334d3696964c15f9

Documentation of API https://openweathermap.org/current#name */

window.addEventListener("DOMContentLoaded", () => {
  let inputCity = document.getElementById("city");
  let generateWeather = document.getElementById("getWeather");
  let cityName = document.getElementById("cityName");
  let temperature = document.getElementById("temperatur");
  let info = document.getElementById("info");
  let errorMessage = document.getElementById("errorMessage");

  let API_KEY = "7d7dbccadaaf68f6334d3696964c15f9";
  let city = "";
  let apiResponse = [
    // {
    //   coord: {
    //     lon: 10.99,
    //     lat: 44.34,
    //   },
    //   weather: [
    //     {
    //       id: 800,
    //       main: "Clear",
    //       description: "clear sky",
    //       icon: "01d",
    //     },
    //   ],
    //   base: "stations",
    //   main: {
    //     temp: 281.63,
    //     feels_like: 281.63,
    //     temp_min: 281.6,
    //     temp_max: 281.63,
    //     pressure: 1026,
    //     humidity: 67,
    //     sea_level: 1026,
    //     grnd_level: 958,
    //   },
    //   visibility: 10000,
    //   wind: {
    //     speed: 0.76,
    //     deg: 35,
    //     gust: 0.4,
    //   },
    //   clouds: {
    //     all: 0,
    //   },
    //   dt: 1735482489,
    //   sys: {
    //     type: 2,
    //     id: 2044440,
    //     country: "IT",
    //     sunrise: 1735455097,
    //     sunset: 1735487072,
    //   },
    //   timezone: 3600,
    //   id: 3163858,
    //   name: "Zocca",
    //   cod: 200,
    // },
  ];

  inputCity.addEventListener("change", (e) => {
    return (city = e.target.value.trim().toLowerCase());
  });

  generateWeather.addEventListener("click", async () => {
    try {
      if (city === "") {
        errorMessage.classList.add("hidden");
        errorMessage.innerText = "Please Enter City Name";
        return;
      }
      apiResponse = [];
      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      ).then((res) => res.json());
      apiResponse.push(fetchData);
    } catch (error) {
      errorMessage.classList.add("hidden");
      console.log("Error While Fetching Weather Data", error.message);
    }
    if (apiResponse.length !== 0) {
      errorMessage.classList.remove("hidden");
      cityName.innerText = apiResponse[0].name;
      temperature.innerText = apiResponse[0].main.temp;
      info.innerText = apiResponse[0].weather[0].description.toUpperCase();
      return;
    }
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 4000);
  });
});
