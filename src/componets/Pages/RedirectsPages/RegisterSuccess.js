import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="not-found-col" md={4}>
            <img
              className="img-fluid"
              src="https://cdn.dribbble.com/users/1785141/screenshots/8998392/media/b9c223e8d6e8b7342eb48193703a79a3.gif"
              alt=""
            />
            <h3 className="fw-bold my-3">Registion SuccessFul</h3>
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

export default RegisterSuccess;
