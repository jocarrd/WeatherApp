import React from "react";
import SearchForm from "../../componentes/SearchForm";
import WeatherCard from "../../componentes/WeatherCard";
import { useSearch } from "../../hooks/useSearch";

export default function Home() {
  const { prediction, location } = useSearch();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12">
          <h1 className="mb-5 ">
            Seleccione una ciudad para consultar el tiempo !
          </h1>
          <SearchForm />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <WeatherCard
            location={location}
            current={prediction?.current}
            dailyPrediction={prediction?.daily}
          ></WeatherCard>
        </div>
      </div>
    </div>
  );
}
