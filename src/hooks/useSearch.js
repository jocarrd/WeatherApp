import { useContext, useEffect, useState } from "react";

import Context from "../context/searchContext";
import OpenWeatherServices from "../services/OpenWeatherServices";

export function useSearch() {
  const { prediction, setPrediction } = useContext(Context);
  const [location, setLocation] = useState("Logroño");
  const [loading, setLoading] = useState(false);

  const locationToUse = location || localStorage.getItem("lastLocation");
  useEffect(() => {
    setLoading(true);
    OpenWeatherServices.geoCoding(`${locationToUse},ES`, 2).then((data) => {
      const datos = { ...data[0] };
      OpenWeatherServices.weatherPrediction(datos.lat, datos.lon).then(
        (response) => {
          setPrediction(response);
          localStorage.setItem("lastLocation", location);
          localStorage.setItem("lastPrediction", JSON.stringify(response));
          setLoading(false);
        }
      );
    });
  }, [location]);

  return { prediction, loading, location, setLocation };
}
