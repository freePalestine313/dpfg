import React, { useEffect,useState } from "react";
import { useMyAppContext } from "../contexts/AppContext";
import { Card, ListGroup, Col, Row } from "react-bootstrap";

export default function ProductListing() {
  const { filteredProducts, openPopUp } = useMyAppContext();
  const bgColor = ["#1ec891", "#ff725e", "#ffd05b"];
  const [color, setColor] = useState("#1ec891");

  useEffect(() => {
    const item = bgColor[Math.floor(Math.random() * bgColor.length)];
    setColor(item);
  }, [filteredProducts]);

  return (
    <>
      <Row className="mt-3" style={{ overflow: "scroll", height: "500rem" }}>
        {filteredProducts.map((product) => (
          <Col key={product.name} md={4} className="mb-4">
            <Card
              onClick={() => openPopUp(product)}
              style={{ cursor: "pointer", borderLeft: `5px solid ${color} ` }}
            >
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.category}
                </Card.Subtitle>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Reason: {product.reason}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
