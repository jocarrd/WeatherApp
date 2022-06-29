import React from "react";
import "../DayPrediction/DayPrediction.css";

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
