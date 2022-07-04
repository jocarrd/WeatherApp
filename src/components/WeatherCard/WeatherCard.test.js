import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import WeatherCard from ".";
import {
  getDate,
  getDayName,
  localeTimeString,
  getMonthName,
} from "../../utilities/date";

describe("<WeatherCard>", () => {
  let component;
  const current = {
    dt: 1233232,
    temperature: 25,
    description: "clear",
    icon: "01d",
  };
  const dailyPrediction = [
    { temp: { max: 30, min: 2 }, weather: [{ icon: "01d" }], dt: 1232123 },
    { temp: { max: 25, min: 12 }, weather: [{ icon: "01d" }], dt: 1232123 },
  ];

  test("renders content of WeatherCard", () => {
    component = render(
      <WeatherCard
        dailyPrediction={dailyPrediction}
        current={current}
        location="Logroño"
      />
    );
    expect(component.container).toHaveTextContent("Logroño");
    expect(component.container).toHaveTextContent("clear");
    expect(component.container).toHaveTextContent("30 | 2");
    expect(component.container).toHaveTextContent("25 | 12");
    expect(component.container).toHaveTextContent(getDate(current.dt));
    expect(component.container).toHaveTextContent(
      getDayName(current.dt).toUpperCase()
    );
    expect(component.container).toHaveTextContent(localeTimeString(current.dt));
    expect(component.container).toHaveTextContent(getMonthName(current.dt));
  });
});
