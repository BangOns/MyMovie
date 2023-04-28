import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/NavbarHeader.css";
import ImgSearch from "../../img/search.png";
import ImgProfil from "../../img/profil.png";
import ImgDoor from "../../img/door.png";
function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("LoginUser");
  function getLogout() {
    if (document.querySelector(".Logout").style.display === "none")
      return (document.querySelector(".Logout").style.display = "flex");
    document.querySelector(".Logout").style.display = "none";
  }
  return (
    <nav className="navBar">
      <div className="ShowHub">
        <div className="textShowHub">
          <p className="myMovie" onClick={() => navigate("/")}>
            MyMovie
          </p>
        </div>
      </div>
      <div className="attr">
        <div className="list">
          <div className="movies">
            <p onClick={() => navigate("/RecomendedFilms")}>Recomended</p>
          </div>
          <div className="series">
            <p>TV Show</p>
          </div>
          <div className="contact">
            <p>Popular</p>
          </div>
          <div className="AboutUs">
            <p>Wishlist</p>
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
      {!user ? (
        <div className="Auth">
          <div className="signIn">
            <p className="thisSignIn" onClick={() => navigate("/Login")}>
              Sign In
            </p>
          </div>
          <div className="signUp">
            <p className="thisSignUp" onClick={() => navigate("/Register")}>
              Sign Up
            </p>
          </div>
        </div>
      ) : (
        <div className="Auth Login">
          <div className="signIn myProfil" onClick={getLogout}>
            <img src={ImgProfil} className="fotoPP" alt="" />
            <p className="thisSignInLogin">
              {user ? JSON.parse(user).name : "Null"}
            </p>
          </div>
          <div
            className="signUp Logout"
            onClick={() => {
              localStorage.removeItem("LoginUser");
              window.location.reload();
            }}
          >
            <img src={ImgDoor} alt="" />
            <p className="thisLogout outss">Log out</p>
          </div>
        </div>
      )}

      <div
        className="burgerNav"
        onClick={() =>
          document
            .querySelector(".listBurgerNav")
            .classList.toggle("activeList")
        }
      >
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
            <p>Wishlist</p>
          </div>
          {!user ? (
            <div className="NotLogged">
              <div className="ListsignIn">
                <p
                  className="thisSignIn"
                  onClick={() => {
                    document
                      .querySelector(".listBurgerNav")
                      .classList.remove("activeList");
                    navigate("/Login");
                  }}
                >
                  Sign In
                </p>
              </div>
              <div className="ListsignUp">
                <p
                  className="thisSignUp"
                  onClick={() => {
                    document
                      .querySelector(".listBurgerNav")
                      .classList.remove("activeList");
                    navigate("/Register");
                  }}
                >
                  Sign Up
                </p>
              </div>
            </div>
          ) : (
            <div className="Logged">
              <div className="ListsignIn buttonLogin">
                <img src={ImgProfil} className="fotoPP" alt="" />
                <p className="thisSignInLogin">
                  {" "}
                  {user ? JSON.parse(user).name : "Null"}
                </p>
              </div>
              <div
                className="ListsignUp"
                onClick={() => {
                  localStorage.removeItem("LoginUser");
                  window.location.reload();
                }}
              >
                <img src={ImgDoor} alt="" />
                <p className="thisLogout">Log out</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
