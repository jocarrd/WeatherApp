import React from "react";

import Form from "react-bootstrap/Form";
import { useSearch } from "../../hooks/useSearch";

export default function SearchForm() {
  const { setLocation } = useSearch();

  const handleOnChange = (data) => {
    setLocation(data.target.value);
  };
  return (
    <Form.Select onChange={handleOnChange}>
      <option value="Logroño">Logroño</option>
      <option>Madrid</option>
    </Form.Select>
  );
}
