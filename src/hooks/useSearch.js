import { useContext, useEffect, useState } from "react";

import Context from "../context/searchContext";
import OpenWeatherServices from "../services/OpenWeatherServices";

export function useSearch() {
  const { prediction, setPrediction, location, setLocation } =
    useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    OpenWeatherServices.geoCoding(`${location},ES`, 2).then((data) => {
      const datos = { ...data[0] };
      OpenWeatherServices.weatherPrediction(datos.lat, datos.lon).then(
        (response) => {
          const description = response.current.weather[0].description;
          const icon = response.current.weather[0].icon;
          const daily = response.daily;
          const humidity = response.current.humidity;
          const windSpeed = response.current.wind_speed;
          const windDeg = response.current.wind_deg;
          const pressure = response.current.pressure;
          const dewPoint = response.current.dew_point;
          const feelsLike = response.current.feels_like;
          const dt = response.current.dt;

          setPrediction({
            current: {
              dt: dt,
              temperature: response.current.temp,
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
          setLocation(location);
          setLoading(false);
        }
      );
    });
  }, [location]);

  return { prediction, loading, location, setLocation };
}
