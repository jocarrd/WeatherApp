import { useContext, useEffect, useState } from "react";

import Context from "../context/searchContext";
import OpenWeatherServices from "../services/OpenWeatherServices";

export function useSearch() {
  const { prediction, setPrediction, location, setLocation } =
    useContext(Context);

  const [loading, setLoading] = useState(false);

  const locationToUse = location || localStorage.getItem("lastLocation");
  useEffect(() => {
    setLoading(true);
    OpenWeatherServices.geoCoding(`${locationToUse},ES`, 2).then((data) => {
      const datos = { ...data[0] };
      OpenWeatherServices.weatherPrediction(datos.lat, datos.lon).then(
        (response) => {
          const description = response.current.weather[0].description;
          const icon = response.current.weather[0].icon;
          const daily = response.daily;
          const humidity = response.current.weather[0].humidity;
          const windSpeed = response.current.weather[0].wind_speed;
          const windDeg = response.current.weather[0].wind_deg;
          const pressure = response.current.weather[0].pressure;
          const dewPoint = response.current.weather[0].dew_point;
          const feelsLike = response.current.weather[0].feels_like;
          console.log(response);
          setPrediction({
            current: {
              temp: response.current.temp,
              description: description,
              icon: icon,
              humidity: humidity,
              windSpeed,
              windDeg,
              pressure,
              dewPoint,
              feelsLike,
            },
            daily: daily,
          });
          localStorage.setItem("lastLocation", location);
          localStorage.setItem("lastPrediction", JSON.stringify(response));
          setLoading(false);
          setLocation(location);
        }
      );
    });
  }, [location]);

  return { prediction, loading, location, setLocation };
}
