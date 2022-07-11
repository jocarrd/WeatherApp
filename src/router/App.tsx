import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import { SearhContextProvider } from "../context/searchContext";

function App() {
  return (
    <div className="App">
      <SearhContextProvider>
        <Routes>
          <Route element={<Home />} path="/*" />
        </Routes>
      </SearhContextProvider>
    </div>
  );
}

export default App;
