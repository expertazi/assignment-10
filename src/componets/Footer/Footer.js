import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <img
                className="text-center"
                src="https://cdn.osudpotro.com/appImage/osudpotro-footer-logo.webp?w=256"
                alt=""
              />
              <p className="text-start mt-3 text-white">
                osudpotro provides the best pharmacy solution online. We are
                focused on getting you the healthcare support & help you need so
                that you can enjoy your best health. Find your required
                medications at osudpotro.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">Categories</h5>
              <li> Prescription Medicines</li>
              <li> Kid's Products</li>
              <li> Men's Products</li>
              <li> Women's Products</li>
              <li> Online Doctor's</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">
                Our Company
              </h5>
              <li>Privacy Policy</li>
              <li> Refund Policy</li>
              <li> Disclaimer</li>
              <li> Contact</li>
              <li> Blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-white mb-4">
                Your Account
              </h5>
              <li> </li>
              <li> My Account</li>
              <li> Order History</li>
              <li> Track Order</li>
              <li> My Address</li>
            </ul>
          </Col>
          <p className="text-white">
            Copyright © 2021 osudpotro. All rights reserved.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
