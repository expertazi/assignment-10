import React from "react";
import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Medicine from "../Medicine/Medicine";

const Medicines = () => {
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);

  return (
    <div className="container mb-5">
      <h2 className="py-5 fw-bold">Buy Which Medicines You Need</h2>

      <Row xs={1} md={4} className="g-4">
        {medicine.map((medicine) => (
          <Medicine medicine={medicine} key={medicine.id}></Medicine>
        ))}
      </Row>
    </div>
  );
};

export default Medicines;
