import React, { useEffect } from "react";
import OpenWeatherServices from "../../services/OpenWeatherServices";

export default function SearchForm() {
  useEffect(() => {
    OpenWeatherServices.currentWeather(35, 139).then((data) =>
      console.log(data)
    );

    OpenWeatherServices.geoCoding("bilbao", 2).then((response) =>
      console.log(response)
    );
  }, []);

  return (
    <form>
      <select name="selector"></select>
    </form>
  );
}
