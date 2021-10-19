import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./MedicineDeta.css";

const MedicineDeta = () => {
  const { medicineData } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((oneData) => oneData.id == medicineData);
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col className="my-5 medicine-data" md={4}>
            <h3>Medicine Name : {ExactIteam[0]?.name}</h3>
            <img className="img-fluid" src={ExactIteam[0]?.img} alt="" />
            <h3>Medicine Price : {ExactIteam[0]?.price}</h3>
            <h5>generic : {ExactIteam[0]?.generic}</h5>
            <p>manufacturer : {ExactIteam[0]?.manufacturer}</p>
            <p>description : {ExactIteam[0]?.description}</p>
            <Link to="/home">
              <button className="btn btn-warning">Go Back Home</button>
            </Link>
            <button className="btn btn-warning ms-4">Add To Cart</button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default MedicineDeta;
