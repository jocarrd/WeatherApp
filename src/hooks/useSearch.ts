import { useContext, useEffect, useState } from "react";

import Context from "../context/searchContext";
import OpenWeatherServices from "../services/OpenWeatherServices";

import { TContext } from "../types";


export function useSearch() {
  const {prediction, setPrediction, location, setLocation } = useContext(Context) as TContext;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    OpenWeatherServices.geoCoding(`${location},ES`, 2).then((data: any) => {
      const datos = { ...data[0] };
      OpenWeatherServices.weatherPrediction(datos.lat, datos.lon).then(
        (response: any) => {
          const { description, icon } = response.current.weather[0];
          const { daily } = response;
          const {
            temp: temperature,
            humidity,
            wind_speed: windSpeed,
            wind_deg: windDeg,
            pressure,
            dew_point: dewPoint,
            feels_like: feelsLike,
            dt,
          } = response.current;

          setPrediction({
            current: {
              dt,
              temperature,
              description: description,
              icon: icon,
              humidity,
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
