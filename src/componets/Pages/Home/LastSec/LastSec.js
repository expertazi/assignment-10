import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LastSec.css";

const LastSec = () => {
  return (
    <div className="my-5">
      <h2 className="pb-4 fw-bold">OTC Medicines</h2>
      <Container>
        <Row>
          <Col md={3}>
            <div className="global-cart last-sec">
              <img
                src="https://cdn.osudpotro.com/thumb/diseases/147129070-man-with-a-diarrhea-waiting-at-the-toilet-door-vector-isolated-guy-with-pain-in-stomach-belly-diseas-1620248543385.webp?w=256"
                alt=""
              />
              <h3 className="text-start">Diarrhea</h3>
            </div>
          </Col>
          <Col md={3}>
            <div className="global-cart last-sec">
              <img
                src="https://cdn.osudpotro.com/thumb/diseases/3931015-1620238002533.webp?w=256"
                alt=""
              />
              <h3 className="text-start">Covid 19</h3>
            </div>
          </Col>
          <Col md={3}>
            <div className="global-cart last-sec">
              <img
                src="https://cdn.osudpotro.com/thumb/diseases/gynecological-1620248322235.webp?w=256"
                alt=""
              />
              <h3 className="text-start">Pregnancy</h3>
            </div>
          </Col>
          <Col md={3}>
            <div className="global-cart last-sec">
              <img
                src="https://cdn.osudpotro.com/thumb/diseases/nasalpng-1620247948014.webp?w=256"
                alt=""
              />
              <h3 className="text-start">Nasal</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastSec;
