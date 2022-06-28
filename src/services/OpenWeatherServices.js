import API from "./config";
import OpenWeatherEP from "../services/OpenWeatherEP";

const OpenWeatherServices = {
  currentWeather: (lat, lon) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.CURRENT_WEATHER}?lat=${lat}&lon=${lon}&appid=${OpenWeatherEP.API_KEY}`
      )
        .then(resolve)
        .catch((err) => console.log(err));
    }),

  geoCoding: (cityName, limit) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.GEOCODING}?q=${cityName}&limit=${limit}&appid=${OpenWeatherEP.API_KEY}`
      )
        .then(resolve)
        .catch((err) => console.log(err));
    }),
};

export default OpenWeatherServices;
