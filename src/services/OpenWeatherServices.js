import API from "./config";
import OpenWeatherEP from "../services/OpenWeatherEP";

const OpenWeatherServices = {
  currentWeather: (lat, lon) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.CURRENT_WEATHER}?lat=${lat}&lon=${lon}&appid=${OpenWeatherEP.API_KEY}`
      )
        .then((response) => resolve(response.data))
        .catch(reject);
    }),

  geoCoding: (cityName, limit) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.GEOCODING}?q=${cityName}&limit=${limit}&appid=${OpenWeatherEP.API_KEY}`
      )
        .then((response) => resolve(response.data))
        .catch(reject);
    }),
};

export default OpenWeatherServices;
