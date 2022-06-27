import API from "./config";
import OpenWeatherEP from "../services/OpenWeatherEP";

const OpenWeatherServices = {
  currentWeather: (lat, lon) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.CURRENT_WEATHER}?lat=${lat}&long=${lon}&appid=${OpenWeatherEP.API_KEY}`
      ).then(resolve);
    }),

  geoCoding: (cityName, statusCode, countryCode, limit) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.GEOCODING}?q=${cityName},${statusCode},${countryCode}&limit=${limit}&appid=${OpenWeatherEP.API_KEY}`
      );
    }),
};

export default OpenWeatherServices;
