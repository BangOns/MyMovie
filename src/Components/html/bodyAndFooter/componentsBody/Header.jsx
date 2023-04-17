import React from "react";
import "../../../css/NavbarHeader.css";
import ImgHeader from "../../../img/humanMovie.png";
function Header() {
  return (
    <div className="header">
      <div className="backgroundheader">
        <div className="TextHeader">
          <div className="text1">
            <h1>MyMovie</h1>
          </div>
          <div className="text2">
            <h2>enjoy watching</h2>
          </div>
          <div className="article">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enimad minim veniam, quis nostrud exerci
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </p>
          </div>
          <div className="buttonheader">
            <button type="button" className="ButtonStart">
              <p>Start Now</p>
            </button>
          </div>
        </div>
        <div className="ImageHeader">
          <div className="thisImage">
            <img src={ImgHeader} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
