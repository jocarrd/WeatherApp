import * as React from "react";
import { useState } from "react";

const Context = React.createContext({});
interface Props {
  children: React.ReactNode;
}

export function SearhContextProvider({ children }: Props) {
  const [prediction, setPrediction] = useState(() =>
    JSON.parse(window.localStorage.getItem("lastPrediction") as string)
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

/*
SearhContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
*/
export default Context;
