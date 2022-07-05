import React from "react";
import { SearchForm } from "../../components/SearchForm";
import { WeatherCard } from "../../components/WeatherCard";
import { useSearch } from "../../hooks/useSearch";

import { FormattedMessage } from "react-intl";
import "../Home/Home.css";

export default function Home() {
  const { prediction, location, loading } = useSearch();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12">
          <h1 className="mb-5 ">
            <FormattedMessage id="app.text"></FormattedMessage>
          </h1>
          <SearchForm />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <WeatherCard
            loading={loading}
            location={location}
            current={prediction?.current}
            dailyPrediction={prediction?.daily}
          ></WeatherCard>
        </div>
      </div>
    </div>
  );
}
