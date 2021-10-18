import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MedicineDeta = () => {
  const { medicineData } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((allData) => allData.id == medicineData);
  console.log(medicineData);
  console.log(ExactIteam);
  return (
    <div>
      <h1>This is service Detail Page </h1>
      <img src={ExactIteam[0]?.img} alt="" />
      <h3>Name : {ExactIteam[0]?.name}</h3>
      <h3>generic : {ExactIteam[0]?.generic}</h3>
      <h3>manufacturer : {ExactIteam[0]?.manufacturer}</h3>
      <h3>price : {ExactIteam[0]?.price}</h3>
      <h3>description : {ExactIteam[0]?.description}</h3>
      <Link to="/home">
        <button className="btn btn-warning">Go Back Home</button>
      </Link>
      <button>Add To Cart</button>
    </div>
  );
};

export default MedicineDeta;
