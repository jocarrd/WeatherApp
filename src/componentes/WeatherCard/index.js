import React from "react";
import "../WeatherCard/WeatherCard.css";
import Card from "react-bootstrap/Card";

export default function WeatherCard({ location, current }) {
  return (
    <Card className="text-center">
      <Card.Header>{location}</Card.Header>
      <Card.Body>
        <Card.Title>Actualmente</Card.Title>
        <div className="row">
          <div className="col">
            <img
              src={`http://openweathermap.org/img/wn/${current.icon}@2x.png`}
            ></img>
          </div>
          <div className="col">
            <h4 className="temperature">{current?.temp} º</h4>
          </div>
        </div>

        <Card.Text>{current?.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Proximos días</Card.Text>
      </Card.Footer>
    </Card>
  );
}
