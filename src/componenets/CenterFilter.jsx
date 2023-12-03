import React from "react";
import { Card, ListGroup, Form, Button, Col, Row } from "react-bootstrap";
import Select from "react-select";
import { useMyAppContext } from "../contexts/AppContext";

export default function CenterFilter() {
  const { clearFilters, searchTerm, setSearchTerm } = useMyAppContext();

  return (
    <>
      <Row>
        <Col xs={10}>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Button
            variant="link"
            onClick={clearFilters}
            className="text-danger"
            style={{
              textDecoration: "underline",
              fontSize: "14px",
              fontWeight: "bold",
              padding: 0,
            }}
          >
            Clear all
          </Button>
        </Col>
      </Row>
    </>
  );
}
