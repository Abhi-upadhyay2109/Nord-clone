import React, { useState } from "react";
import Megha from "../../Meghamenu/Megha";
import Modals from "../../Navbar/Modals";
import Descpage from "../descrip/Descpage";
import { Example } from "../Dialoguebox/Popup";
import {
  WomenJeans,
  ManJeans,
  NewFlash,
  Slippers,
  Spring,
  Springaccess,
  BestSelling,
  Slideshow,
  Secondslide,
  Looks,
} from "../Slider/Slider";

const Main = () => {
  const [men, setMen] = useState(false);
  return (
    <>
      <Megha />
      <Modals />
      <div className="maincontainer" style={{ margin: "10px" }}>
        <div className="mothercard" style={{ marginTop: "60px" }}>
          <img
            src="https://n.nordstrommedia.com/it/2f1e56d5-0b28-46d2-ba0b-b5743aee8c35.png?h=200&w=1608"
            alt=""
          ></img>
        </div>
        <Slideshow></Slideshow>
        <Slippers></Slippers>
        <Spring></Spring>
        <Secondslide></Secondslide>
        <NewFlash></NewFlash>
        <div className="navjean">
          <div
            className="jean"
            onClick={() => {
              setMen(false);
            }}
          >
            Women
          </div>
          <div
            className="jean"
            onClick={() => {
              setMen(true);
            }}
          >
            Men
          </div>
        </div>
        {men ? <ManJeans></ManJeans> : <WomenJeans></WomenJeans>}

        <Springaccess></Springaccess>
        <BestSelling></BestSelling>
        <Looks></Looks>
        <Example style={{ border: "1px solid red" }}></Example>
      </div>
    </>
  );
};

export default Main;
