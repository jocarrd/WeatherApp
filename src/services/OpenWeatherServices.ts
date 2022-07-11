import API from "./config";
import OpenWeatherEP from "./OpenWeatherEP";

const OpenWeatherServices = {
  weatherPrediction: (lat: number, lon:number) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.WEATHER_PREDICTION}?lat=${lat}&lon=${lon}&units=metric&appid=${OpenWeatherEP.API_KEY}`
      )
        .then((response) => resolve(response.data))
        .catch(reject);
    }),

  geoCoding: (cityName: string, limit: number) =>
    new Promise((resolve, reject) => {
      API.get(
        `${OpenWeatherEP.GEOCODING}?q=${cityName}&limit=${limit}&appid=${OpenWeatherEP.API_KEY}`
      )
        .then((response) => resolve(response.data))
        .catch(reject);
    }),
};

export default OpenWeatherServices;
