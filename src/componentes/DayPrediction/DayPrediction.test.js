import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import DayPrediction from ".";

test("renders content", () => {
  const component = render(
    <DayPrediction
      dayName="Lunes"
      dayNumber={5}
      icon="01d"
      tempMin={5}
      tempMax={30}
    />
  );

  component.getByText("Lunes 5");
  component.getByText("30");
  component.getByText("5");
});
