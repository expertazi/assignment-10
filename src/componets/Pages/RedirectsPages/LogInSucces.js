import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogInSucces = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="not-found-col" md={4}>
            <img
              className="img-fluid"
              src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif"
              alt=""
            />
            <h3 className="fw-bold my-3">Login SuccessFul</h3>
            <Link to="/home">
              <button className="btn btn-warning mb-5">Go Back Home</button>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogInSucces;
