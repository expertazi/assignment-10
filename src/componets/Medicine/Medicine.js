import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Medicine.css";
import { Link } from "react-router-dom";

const Medicine = (props) => {
  const { name, price, category, generic, img, manufacturer, description, id } =
    props.medicine;
  return (
    <Col>
      <Card style={{ width: "100%", height: "450px" }}>
        <Card.Img variant="top" className="img-fluid h-50" src={img} />
        <Card.Body>
          <h5 className="text-start">Price: {price} Taka</h5>
          <Card.Title className="text-start fw-bold">{name}</Card.Title>
          <p className="text-start buttom-margin-p">{generic}</p>
          <p className="text-start">By: {manufacturer}</p>
          <Link to={`/medicineData/${id}`}>
            <button className=" text-start btn btn-primary">See Details</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Medicine;
