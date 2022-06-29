import React, { useEffect } from "react";
import SearchForm from "../../componentes/SearchForm";
import WeatherCard from "../../componentes/WeatherCard";
import { useSearch } from "../../hooks/useSearch";

export default function Home() {
  const { prediction, location } = useSearch();
  useEffect(() => {
    console.log(prediction);
    console.log(location);
  }, [prediction, location]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12">
          <h1 className="mb-4">
            Seleccione una ciudad para poder ver el tiempo !
          </h1>
          <SearchForm />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3"></div>

        <div className="col-md-6">
          <WeatherCard
            location={location}
            current={prediction?.current}
            title
          ></WeatherCard>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
