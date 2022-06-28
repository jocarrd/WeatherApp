import React from "react";
import SearchForm from "../../componentes/SearchForm";

export default function Home() {
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
