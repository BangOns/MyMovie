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
            We are glad you're here! On MyMovie you can easily find out where to watch your favourite movies & TV series.
            MyMovie is easy and effective: Choose your favourite streaming providers and other providers.
            Filter by genre and release year to find the perfect movie to stream today. 
            Search for a specific movie or TV series to find out where to watch it legally online.
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
