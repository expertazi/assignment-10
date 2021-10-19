import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Services = () => {
  return (
    <div className="my-5">
      <h2 className="fw-bold pb-3">All our services</h2>
      <p className="pb-4">
        Capitalize on low hanging fruit to identify a ballpark value added
        activity to beta test.
        <br /> Override the digital divide with additional clickthroughs.
      </p>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-blog-post-10.jpeg"
              />
              <Card.Body>
                <Card.Title>Pacemaker</Card.Title>
                <Card.Text>
                  A pacemaker is an electrically-charged medical device. Your
                  surgeon implants it under your skin to help manage irregular
                  heartbeats called arrhythmias. The upper chambers of the heart
                  are the atria, and the lower chambers of the heart are the
                  ventricles.
                </Card.Text>
                <Button variant="primary">See Deatils</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-07-1200x800.jpg"
              />
              <Card.Body>
                <Card.Title>Peripheral artery angioplasty</Card.Title>
                <Card.Text>
                  Angioplasty with stent placement is a minimally invasive
                  procedure used to open narrow or blocked arteries. This
                  procedure is used in different parts of your body, depending
                  on the location of the affected artery. It requires only a.
                </Card.Text>
                <Button variant="primary">See Deatils</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-blog-post-09.jpeg"
              />
              <Card.Body>
                <Card.Title>Valve prolapse / repair</Card.Title>
                <Card.Text>
                  In mitral valve prolapse (MVP), also called Barlow’s syndrome,
                  the flaps of the mitral valve do not close correctly. Instead,
                  the valve bulges into the atrium. This can lead to mitral
                  valve regurgitation, which means that blood leaks back into
                  the Hello.
                </Card.Text>
                <Button variant="primary">See Deatils</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="http://medicare.bold-themes.com/cardiology/wp-content/uploads/sites/10/2018/02/img-gallery-08-1200x800.jpg"
              />
              <Card.Body>
                <Card.Title>Valve diseases</Card.Title>
                <Card.Text>
                  Heart valve disorders can affect any of the valves in your
                  heart. Your heart valves have flaps that open and close with
                  each heartbeat, allowing blood to flow through the heart’s
                  upper and lower chambers and to the rest of your body. The
                  upper chambe.
                </Card.Text>
                <Button variant="primary">See Deatils</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
