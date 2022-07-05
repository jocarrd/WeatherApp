import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import WeatherCard from ".";

const defaultDailyPrediction = [
  { temp: { max: 30, min: 2 }, weather: [{ icon: "01d" }], dt: 1232123 },
  { temp: { max: 25, min: 12 }, weather: [{ icon: "01d" }], dt: 1232123 },
];
const defaultCurrent = {
  dt: 1233232,
  temperature: 25,
  description: "clear",
  icon: "01d",
  windSpeed: 2,
  humidity: 24,
};

const renderComponent = ({
  dailyPrediction = defaultDailyPrediction,
  current = defaultCurrent,
} = {}) =>
  render(
    <WeatherCard
      dailyPrediction={dailyPrediction}
      current={current}
      location="Logroño"
    />
  );

describe("<WeatherCard>", () => {
  test("renders content of WeatherCard", () => {
    renderComponent();
    screen.debug();
    expect(screen.getByText("Logroño")).toBeInTheDocument();
  });
});
