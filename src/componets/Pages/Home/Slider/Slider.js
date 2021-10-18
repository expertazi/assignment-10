import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.osudpotro.com/carousal/1-lakh-web-01-1632383544129.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.osudpotro.com/carousal/artboard-1-1632984251262.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.osudpotro.com/carousal/whatsapp-image-2021-09-02-at-73039-pm-1-1630589516018.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
