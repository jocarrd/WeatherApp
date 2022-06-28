import React, { useState } from "react";

const Context = React.createContext({});

export function SearhContextProvider({ children }) {
  const [prediction, setPrediction] = useState(() =>
    JSON.parse(window.localStorage.getItem("lastPrediction"))
  );

  return (
    <Context.Provider value={{ prediction, setPrediction }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
