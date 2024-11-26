import React from "react";
import "./Title.scss"
import { IoIosArrowForward } from "react-icons/io";

const Title = () => {
  return (
    <div className="header-title">
      <p>Starting 11/29, get an Apple Gift Card up to $200 when you buy an
        eligible product — online and in-store.<sup>1</sup>
        <a href="" className="header-title-a">Learn more</a><IoIosArrowForward/></p>
    </div>
  );
};

export default Title;
