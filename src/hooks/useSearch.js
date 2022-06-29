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
          const daily = { ...response.daily };

          setPrediction({
            current: {
              temp: response.current.temp,
              description: description,
              icon: icon,
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
