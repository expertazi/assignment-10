import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../contexts/useAuth";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { signinWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log("Come From", location.state?.from);

  const handleGoogleLogin = () => {
    signinWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="my-5">
      <h2 className="mb-5 fw-bold">Please Login</h2>

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
                <Link to="/signup">
                  {" "}
                  <Form.Check
                    type="checkbox"
                    label="If You Dont Have Account? Click Here"
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
            <h5 className="mb-3">-------------Other Login----------------</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">
              Login With Google
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
