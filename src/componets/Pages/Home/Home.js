import React from "react";
import Medicines from "../../Medicines/Medicines";
import Slider from "./Slider/Slider";
import SecondSec from "./SecondSec/SecondSec";
import LastSec from "./LastSec/LastSec";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <SecondSec></SecondSec>
      <Medicines></Medicines>
      <LastSec></LastSec>
    </div>
  );
};

export default Home;
