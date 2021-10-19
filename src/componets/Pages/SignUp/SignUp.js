import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  const { signinWithGoogle, user } = useAuth();
  const auth = getAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log("Come From", location.state?.from);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleLogin = () => {
    signinWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const toggoleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (password.length < 6) {
      setError("Password msut Be At Least 6 Charastes Long.");
      return;
    }
    if (isLogin == false) {
      proccessLogin(email, password);
      history.push(redirect_uri);
      if (user == true) {
        history.push("/login-Success");
      } else {
        history.push("/home");
      }
    } else {
      createNewUser(email, password);
      history.push(redirect_uri);
      history.push("/registration-Success");
    }
  };
  const proccessLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="my-5">
      <h2 className="mb-5 fw-bold">
        Please{" "}
        {isLogin
          ? " Register ! If you dont have account"
          : " Login  ! If you  have account"}
      </h2>

      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="login-main-form text-start" md={4}>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  onChange={toggoleLogin}
                  type="checkbox"
                  label={
                    isLogin
                      ? "If You Already Have Account? Click Here To Login"
                      : " If You dont Have Account? Click Here To Register"
                  }
                />
              </Form.Group>
              <div className="row mb-3 text-danger">{error}</div>
              <Button variant="primary" type="submit">
                {isLogin ? " Register" : " Login"}
              </Button>
            </Form>
          </Col>
          <Col md={4}></Col>

          <div className="mt-4">
            <h5 className="mb-3">-------------Other SignUp----------------</h5>
            <button onClick={handleGoogleLogin} className="btn btn-warning">
              Signup With Google
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
