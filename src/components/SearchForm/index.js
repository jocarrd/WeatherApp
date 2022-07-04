import React from "react";
import Form from "react-bootstrap/Form";
import { useSearch } from "../../hooks/useSearch";
import { options } from "../../utilities/options";

export default function SearchForm() {
  const { location, setLocation } = useSearch();

  const handleOnChange = (data) => {
    setLocation(data.target.value);
  };
  return (
    <Form.Select defaultValue={location} onChange={handleOnChange}>
      {options.map((element, key) => {
        return (
          <option key={key} value={element.nm}>
            {element.nm}
          </option>
        );
      })}
    </Form.Select>
  );
}
