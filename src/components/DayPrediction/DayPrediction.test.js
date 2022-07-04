import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import DayPrediction from ".";

describe("<DayPrediction>", () => {
  let component;

  test("renders content of DayPrediction", () => {
    component = render(
      <DayPrediction
        dayName="Lunes"
        dayNumber={5}
        icon="01d"
        tempMin={5}
        tempMax={30}
      />
    );
    expect(component.container).toHaveTextContent("Lunes 5");
    expect(component.container).toHaveTextContent("30 | 5");
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/wn/01d@2x.png"
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "prediction");
  });
});
