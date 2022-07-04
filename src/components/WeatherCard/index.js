import React from "react";
import "../WeatherCard/WeatherCard.css";
import Card from "react-bootstrap/Card";
import DayPrediction from "../DayPrediction";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import PropTypes from "prop-types";
import {
  getDayName,
  getDate,
  getMonthName,
  localeTimeString,
  getYear,
} from "../../utilities/date";

WeatherCard.propTypes = {
  location: PropTypes.string.isRequired,
  current: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    dt: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
  dailyPrediction: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
      }),
      dt: PropTypes.number.isRequired,
      weather: PropTypes.array.isRequired,
    })
  ),
};
export default function WeatherCard({ location, current, dailyPrediction }) {
  return (
    <Card className="text-center">
      <Card.Header>{location}</Card.Header>
      <Card.Body>
        <Card.Title>
          {getDayName(current?.dt).toUpperCase()} {getDate(current?.dt)}
          {" de "}
          {getMonthName(current?.dt)}
          {" de "}
          {getYear(current?.dt)}
        </Card.Title>
        <Card.Title>{localeTimeString(current?.dt)}</Card.Title>
        <Card.Text>{current?.description}</Card.Text>

        <div className="row">
          <div className="col">
            <img
              src={`http://openweathermap.org/img/wn/${current?.icon}@2x.png`}
            ></img>
          </div>
          <div className="col">
            <p className="temperature">{current?.temperature} º</p>
          </div>
        </div>

        <Card.Text>
          <WiHumidity size="24px" /> {current.humidity} % <br></br>
          <WiStrongWind size="24px" /> {current.windSpeed} km/h
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Proximos días</Card.Text>
        <div className="row">
          {dailyPrediction?.map((element, key) => {
            return (
              <div key={key} className="col">
                <DayPrediction
                  tempMin={element?.temp.min}
                  tempMax={element?.temp.max}
                  icon={element?.weather[0].icon}
                  dayName={getDayName(element?.dt).toUpperCase()}
                  dayNumber={getDate(element?.dt)}
                ></DayPrediction>
              </div>
            );
          })}
        </div>
      </Card.Footer>
    </Card>
  );
}
