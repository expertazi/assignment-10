import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="my-5">
      <h2 className="mb-5 fw-bold">
        Please Register ! If you dont have account
      </h2>

      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="login-main-form text-start" md={4}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to="/login">
                  {" "}
                  <Form.Check
                    type="checkbox"
                    label="If You Already Have Account? Click Here To Login"
                  />
                </Link>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>

          <div className="mt-4">
            <h5 className="mb-3">-------------Other SignUp----------------</h5>
            <button className="btn btn-warning">Signup With Google</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
