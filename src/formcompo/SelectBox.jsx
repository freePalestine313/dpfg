import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Select from "react-select";

export default function SelectBox({
  options,
  filter,
  handler,
  controlId,
  placeholder,
}) {
  return (
    <>
      <Form.Group controlId={controlId}>
        <Select
          isMulti
          value={options.filter((option) => filter.includes(option.value))}
          options={options}
          onChange={handler}
          className="mb-3"
          placeholder={placeholder}
        />
      </Form.Group>
    </>
  );
}
