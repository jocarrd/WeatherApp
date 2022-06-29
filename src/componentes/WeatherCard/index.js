import React from "react";
import "../WeatherCard/WeatherCard.css";
import Card from "react-bootstrap/Card";
import DayPrediction from "../DayPrediction";
import { dias, meses } from "../../utilities/date";

export default function WeatherCard({ location, current, dailyPrediction }) {
  return (
    <Card className="text-center">
      <Card.Header>{location}</Card.Header>
      <Card.Body>
        <Card.Title>
          {dias[new Date().getDay()].toUpperCase()} {new Date().getDate()}
          {" de "}
          {meses[new Date().getMonth()]}
        </Card.Title>
        <Card.Title>{new Date().toLocaleTimeString()}</Card.Title>

        <div className="row">
          <div className="col">
            <img
              src={`http://openweathermap.org/img/wn/${current.icon}@2x.png`}
            ></img>
          </div>
          <div className="col">
            <p className="temperature">{current?.temp} º</p>
          </div>
        </div>

        <Card.Text>{current?.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Proximos días</Card.Text>
        <div className="row">
          {dailyPrediction.map((element, key) => {
            return (
              <div key={key} className="col">
                <DayPrediction
                  tempMin={element.temp.min}
                  tempMax={element.temp.max}
                  icon={element.weather[0].icon}
                  dayName={dias[
                    new Date(element.dt * 1000).getDay()
                  ].toUpperCase()}
                  dayNumber={new Date(element.dt * 1000).getDate()}
                ></DayPrediction>
              </div>
            );
          })}
        </div>
      </Card.Footer>
    </Card>
  );
}
