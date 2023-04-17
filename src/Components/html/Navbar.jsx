import React from "react";
import { Link } from "react-router-dom";
import "../css/NavbarHeader.css";
import ImgSearch from "../img/search.png";
import ImgProfil from "../img/profil.png";
import ImgDoor from "../img/door.png";
function Navbar() {
  return (
    <nav className="navBar">
      <div className="ShowHub">
        <div className="textShowHub">
          <p className="myMovie">MyMovie</p>
        </div>
      </div>
      <div className="attr">
        <div className="list">
          <div className="movies">
            <p>Recomended</p>
          </div>
          <div className="series">
            <p>TV Show</p>
          </div>
          <div className="contact">
            <p>Popular</p>
          </div>
          <div className="AboutUs">
            <p>Indonesia</p>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="kotakSearch">
          <div className="input">
            <input type="text" placeholder="Search" className="inputSearch" />
          </div>
          <div className="iconSearch" role="button">
            <img src={ImgSearch} alt="search" />
          </div>
        </div>
      </div>
      <div className="Auth">
        <div className="signIn">
          <p className="thisSignIn">Sign In</p>
        </div>
        <div className="signUp">
          <p className="thisSignUp">Sign Up</p>
        </div>
      </div>
      <div className="Auth Login">
        <div className="signIn myProfil">
          <img src={ImgProfil} className="fotoPP" alt="" />
          <p className="thisSignInLogin">Rizki Nur Fadhilla</p>
        </div>
        <div className="signUp Logout">
          <img src={ImgDoor} alt="" />
          <p className="thisLogout outss">Log out</p>
        </div>
      </div>
      <div className="burgerNav">
        <span className="span"></span>
        <span className="span"></span>
        <span className="span"></span>
      </div>
      <div className="listBurgerNav">
        <div className="thisList">
          <div className="Listmovies">
            <p>Recomended</p>
          </div>
          <div className="Listseries">
            <p>TV Show</p>
          </div>
          <div className="Listcontact">
            <p>Popular</p>
          </div>
          <div className="ListAboutUs">
            <p>Indonesia</p>
          </div>
          <div className="NotLogged">
            <div className="ListsignIn">
              <p className="thisSignIn">Sign In</p>
            </div>
            <div className="ListsignUp">
              <p className="thisSignUp">Sign Up</p>
            </div>
          </div>
          <div className="Logged">
            <div className="ListsignIn buttonLogin">
              <img src={ImgProfil} className="fotoPP" alt="" />
              <p className="thisSignInLogin">NULL</p>
            </div>
            <div className="ListsignUp">
              <img src={ImgDoor} alt="" />
              <p className="thisLogout">Log out</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
