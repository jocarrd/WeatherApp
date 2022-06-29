import React, { useState } from "react";

const Context = React.createContext({});

export function SearhContextProvider({ children }) {
  const [prediction, setPrediction] = useState(() =>
    JSON.parse(window.localStorage.getItem("lastPrediction"))
  );
  const [location, setLocation] = useState(
    localStorage.getItem("lastLocation") || "Logroño"
  );

  return (
    <Context.Provider
      value={{ prediction, setPrediction, location, setLocation }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
