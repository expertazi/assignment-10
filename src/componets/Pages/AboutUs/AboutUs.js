import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeart,
  faHistory,
  faPrayingHands,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCheckCircle} />;
const elementFaheart = <FontAwesomeIcon icon={faHeart} />;
const elementfaPrayingHands = <FontAwesomeIcon icon={faPrayingHands} />;
const elementfaUser = <FontAwesomeIcon icon={faUser} />;
const elementfaHistory = <FontAwesomeIcon icon={faHistory} />;

const AboutUs = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={6}>
            <img
              className="mb-5"
              src="https://klbtheme.com/medibazar/wp-content/plugins/medibazar-core/elementor/images/single-image.png"
              alt=""
            />
          </Col>
          <Col className="d-flex text-start align-items-center" md={6}>
            <div>
              <h1 className="fw-bold">What Our Client’s Say</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>
              <div className="mt-5">
                <h4>
                  {" "}
                  <span className="icon-about-us">{element}</span> Our Mission &
                  Vision
                </h4>
                <p>
                  Quis autem vel eum iure reprehenderit quin voluptate velit
                  esse quam nihil molestiae consequatur vel illum qui dolorem
                  eum
                </p>
              </div>
              <div>
                <h4>
                  {" "}
                  <span className="icon-about-us">{element}</span> Treatment For
                  Covid -19
                </h4>
                <p>
                  But I must explain to you how all this mistaken idea
                  denouncing pleasure and praising pain was born and complete
                  account
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* This is Second Section  */}

      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <Card className="about-us-cart-second">
              <p className="about-us-icon-second">{elementFaheart}</p>
              <h2>2560</h2>
              <h5 className="mt-3">SATICFIED CLIENTS</h5>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="about-us-cart-second">
              <p className="about-us-icon-second">{elementfaPrayingHands}</p>
              <h2>9862</h2>
              <h5 className="mt-3">FINISHED WORKS</h5>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="about-us-cart-second">
              <p className="about-us-icon-second">{elementfaUser}</p>
              <h2>7563</h2>
              <h5 className="mt-3">COVID -19 SPECIALIST</h5>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="about-us-cart-second">
              <p className="about-us-icon-second">{elementfaHistory}</p>
              <h2>6534</h2>
              <h5 className="mt-3">GLOBAL BRANDS</h5>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* This is Third Section  */}
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="fw-bold my-3">Our Main Goals</h1>
            <p className="mb-5">
              Sed ut perspiciatis unde omnis iste natus error
            </p>
            <Row xs={1} md={4} className="g-4">
              <Col>
                <Card className="about-us-cart">
                  <h2 className="h2-about-us">Medical Accessories</h2>
                  <img
                    className="my-4 img-about-us"
                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/f-01.png"
                    alt=""
                  />
                  <p>
                    Sed ut perspiciatis unde omnis wste natsit volupta explic
                  </p>
                </Card>
              </Col>
              <Col>
                <Card className="about-us-cart">
                  <h2 className="h2-about-us">Covid - 19 Treatment Center</h2>
                  <img
                    className="my-4 img-about-us"
                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/f-02.png"
                    alt=""
                  />
                  <p>
                    Sed ut perspiciatis unde omnis wste natsit volupta explic
                  </p>
                </Card>
              </Col>
              <Col>
                <Card className="about-us-cart">
                  <h2 className="h2-about-us">24/7 Hours Emergency Care</h2>
                  <img
                    className="my-4 img-about-us"
                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/f-03.png"
                    alt=""
                  />
                  <p>
                    Sed ut perspiciatis unde omnis wste natsit volupta explic
                  </p>
                </Card>
              </Col>
              <Col>
                <Card className="about-us-cart">
                  <h2 className="h2-about-us">Online Free Consultations</h2>
                  <img
                    className="my-4 img-about-us"
                    src="https://klbtheme.com/medibazar/wp-content/uploads/2020/10/f-04.png"
                    alt=""
                  />
                  <p>
                    Sed ut perspiciatis unde omnis wste natsit volupta explic
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
