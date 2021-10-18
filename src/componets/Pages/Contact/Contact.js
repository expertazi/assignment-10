import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="my-5">
      <div>
        <Container>
          <Row>
            <Col md={6}>
              {" "}
              <img
                src="https://cdn.osudpotro.com/project_assets/contact_us.png?w=640"
                alt=""
              />
            </Col>
            <Col md={6}>
              <Form className="text-start form-contact mt-4">
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
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
