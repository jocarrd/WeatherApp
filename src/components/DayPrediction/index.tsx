import * as React from "react";
import "../DayPrediction/DayPrediction.css";

import { IDayPrediction } from "../../types";

export function DayPrediction({
  dayName,
  dayNumber,
  icon,
  tempMax,
  tempMin,
}: IDayPrediction) {
  return (
    <div className="day-prediction-container">
      <p>
        {dayName} {dayNumber}
      </p>
      <img
        alt="prediction"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      ></img>
      <p>
        <span className="red">{tempMax} </span> |{" "}
        <span className="blue">{tempMin}</span>
      </p>
    </div>
  );
}

/*
DayPrediction.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
};
*/
