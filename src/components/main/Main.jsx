import React from "react";
import "./Main.scss";
import MainItem from "./main_item/MainItem";
import airpods from "../../assets/airpods.jpg";
import watch from "../../assets/watch.jpg";
import laptop from "../../assets/laptop.jpg";
import emojiGirl from "../../assets/emojiGirl.png";
import simCards from "../../assets/simCards.jpg";
import phoneNew from "../../assets/phoneNew.jpg";

const Main = () => {
  return (
    <div className="container">
      <div className="main-div">
        <MainItem
          url={airpods}
          title={"AirPods4"}
          desc1="Iconic. Now supersonic."
          desc2="Available with Active Noise Cancellation."
          buttons={["Learn more", "Buy"]}
          top="false"
          cl="#fff"

        />
        <MainItem
          url={watch}
          title={`WATCH`}
          desc1="SERIES 10"
          desc2=" Thinstant classic"
          buttons={["Learn more", "Buy"]}
          top="true"
          cl="#000"
        />
        <MainItem
          url={laptop}
          title={"MacBook Air"}
          desc1="Lean. Mean. M3 machine"
          desc2=""
          buttons={["Learn more", "Buy"]}
          top="true"
          cl="#000"
        />
        <MainItem
          url={emojiGirl}
          title={"Apple for Small Business"}
          desc1="Hardware, software, and expert"
          desc2="help - all in one place"
          buttons={["Learn more"]}
          top="true"
          cl="#000"
        />
        <MainItem
          url={simCards}
          title={"Carrier deals at Apple"}
          desc1="Get up to $1000 in credit on a new iPhone"
          desc2="Trade-in may be required."
          buttons={["Find your deal"]}
          top="false"
          cl="#000"
        />
        <MainItem
          url={phoneNew}
          title={`Trade In`}
          desc1="Get $180 - $650 in credit when you"
          desc2="trade in iPhone 12 or higher."
          buttons={["Get your estemate"]}
          top="true"
          cl="#000"
          btn_bg="blue"
        />
      </div>
    </div>
  );
};

export default Main;
