import React, { useEffect } from "react";
import SearchForm from "../../componentes/SearchForm";
import { useSearch } from "../../hooks/useSearch";

export default function Home() {
  const { prediction } = useSearch();

  useEffect(() => {
    console.log(prediction);
  }, [prediction]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-12">
          <h1 className="mb-4">
            Selecciona una ciudad para poder ver el tiempo !
          </h1>
          <SearchForm />
        </div>

        <div className="col-xl-12"></div>
      </div>
    </div>
  );
}
