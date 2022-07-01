import React from "react";
import "../DayPrediction/DayPrediction.css";
import PropTypes from "prop-types";

DayPrediction.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  tempMax: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
};

export default function DayPrediction({
  dayName,
  dayNumber,
  icon,
  tempMax,
  tempMin,
}) {
  return (
    <div className="day-prediction-container">
      <p>
        {dayName} {dayNumber}
      </p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
      <p>
        {tempMax} | {tempMin}
      </p>
    </div>
  );
}
