import API from "./config";
import OpenWeatherEP from "../services/OpenWeatherEP";

const OpenWeatherServices = {
  weatherPrediction: (lat, lon) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.WEATHER_PREDICTION}?lat=${lat}&lon=${lon}&appid=${OpenWeatherEP.API_KEY}`
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
