import React from "react";

import Form from "react-bootstrap/Form";
import OpenWeatherServices from "../../services/OpenWeatherServices";

export default function SearchForm() {
  const handleOnChange = (data) => {
    OpenWeatherServices.geoCoding(
      `${data.target.value},ES
    `,
      2
    ).then((data) =>
      OpenWeatherServices.currentWeather(data[0].lat, data[0].lon).then(
        console.log
      )
    );
  };
  return (
    <Form.Select onChange={handleOnChange}>
      <option value="Logroño">Logroño</option>
      <option>Madrid</option>
    </Form.Select>
  );
}
