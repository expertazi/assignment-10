import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SecondSec.css";

const SecondSec = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={4}>
            <div className="global-cart cart-num-1">
              <h2>Upload Your Prescription</h2>
              <button className="btn-global-cart btn btn-dark">
                Order Now
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div className="global-cart cart-num-2">
              <h2>Online Doctors</h2>
              <button className="btn-global-cart btn btn-dark">Book Now</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="global-cart cart-num-3">
              <h2>24/7 Help line</h2>
              <button className="btn-global-cart btn btn-dark">Call Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondSec;
