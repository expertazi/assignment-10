import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Medicine from "../Medicine/Medicine";

const AllMedicine = () => {
  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);
  return (
    <div className="container mb-5">
      <div id="Medicine">
        <h2 className="py-5 fw-bold">Buy Which Medicines You Need</h2>

        <Row xs={1} md={4} className="g-4">
          {medicine.map((medicine) => (
            <Medicine medicine={medicine} key={medicine.id}></Medicine>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllMedicine;
