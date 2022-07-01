import React, { useState } from "react";
import PropTypes from "prop-types";
const Context = React.createContext({});

SearhContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

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
