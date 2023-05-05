import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/NavbarHeader.css";
import ImgSearch from "../../img/search.png";
import ImgProfil from "../../img/profil.png";
import ImgDoor from "../../img/door.png";
import ImgArrowUp from "../../img/arrow-up.png";
import {
  movieGenreID,
  movieGenreName,
  tvGenreID,
  tvGenreName,
} from "./GetDataGenre";
import { DropDown } from "./GetFuncDropDown";
import { useDispatch, useSelector } from "react-redux";
import { ClientInput } from "../../../Action/ThisSearch";
function Navbar() {
  const { CartFilms } = useSelector((state) => state.CartFilmsReducer);
  const [listGenreFilms, setListGenreFilms] = useState({
    name: movieGenreName,
    id: movieGenreID,
  });
  const [listGenreTV, setListGenreTV] = useState({
    name: tvGenreName,
    id: tvGenreID,
  });
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = localStorage.getItem("LoginUser");

  function ListSearch(e) {
    if (e.target.value.length !== 0) {
      setInputSearch(e.target.value);
      dispatch(ClientInput(e.target.value));
      setTimeout(() => {
        navigate("search");
      }, 100);
    } else {
      setInputSearch("");
      navigate("/");
    }
  }
  function getGenreDesktop(e) {
    setInputSearch("");
    const arrow = e.currentTarget.children[1];
    const displayGenre = arrow.parentElement.parentElement.children[1];
    if (arrow.children[0].className === "img-arrow") {
      displayGenre.style.display = `block`;
      arrow.children[0].className = "img-arrow active-arrow";
    } else if (arrow.children[0].className === "img-arrow active-arrow") {
      arrow.children[0].className = "img-arrow";
      displayGenre.style.display = `none`;
    }
  }
  function getGenreMobile(e) {
    setInputSearch("");

    let arrowRecomend = document.querySelector(".Listmovies-arrow img");
    let displayGenreRecomend = document.querySelector(
      ".Listmovies-ListDisplay"
    );
    let arrowTvShow = document.querySelector(".Listseries-arrow img");
    let displayGenreTvShow = document.querySelector(".Listseries-ListDisplay");
    let arrowPopular = document.querySelector(".Listcontact-arrow img");
    let displayGenrePopular = document.querySelector(
      ".Listcontact-ListDisplay"
    );
    if (
      e.currentTarget.parentElement.className ===
      displayGenreRecomend.parentElement.className
    ) {
      DropDown(
        displayGenreRecomend,
        displayGenreTvShow,
        displayGenrePopular,
        displayGenreRecomend.parentElement.className,
        arrowRecomend,
        arrowTvShow,
        arrowPopular
      );
    } else if (
      e.currentTarget.parentElement.className ===
      displayGenreTvShow.parentElement.className
    ) {
      DropDown(
        displayGenreTvShow,
        displayGenreRecomend,
        displayGenrePopular,
        displayGenreTvShow.parentElement.className,
        arrowTvShow,
        arrowPopular,
        arrowRecomend
      );
    } else if (
      e.currentTarget.parentElement.className ===
      displayGenrePopular.parentElement.className
    ) {
      DropDown(
        displayGenrePopular,
        displayGenreTvShow,
        displayGenreRecomend,
        displayGenrePopular.parentElement.className,
        arrowPopular,
        arrowTvShow,
        arrowRecomend
      );
    }
  }

  function getLogout() {
    setInputSearch("");
    if (document.querySelector(".Logout").style.display === "none")
      return (document.querySelector(".Logout").style.display = "flex");
    document.querySelector(".Logout").style.display = "none";
  }
  return (
    <nav className="navBar">
      <div className="ShowHub">
        <div className="textShowHub">
          <p
            className="myMovie"
            onClick={() => {
              setInputSearch("");
              navigate("/");
            }}
          >
            MyMovie
          </p>
        </div>
      </div>
      <div className="attr">
        <div className="list">
          <div className="movies">
            <div className="movies-display" onClick={getGenreDesktop}>
              <div className="movies-label">
                <p>Recommended</p>
              </div>
              <div className="movies-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="movies-listDisplay">
              <div className="movies-kotakDisplay">
                {listGenreFilms.name.map((nameFilms, index) => {
                  return (
                    <div className="label-listDisplay" key={index}>
                      <p
                        onClick={() => {
                          document.querySelector(
                            ".movies-listDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".movies-arrow img"
                          ).className = "img-arrow";
                          navigate(
                            `RecomendedFilms/${listGenreFilms.id[index]}`
                          );
                        }}
                      >
                        {nameFilms}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="series">
            <div className="series-display" onClick={getGenreDesktop}>
              <div className="series-label">
                <p>Tv Show</p>
              </div>
              <div className="series-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="series-listDisplay">
              <div className="movies-kotakDisplay">
                {listGenreTV.name.map((nameFilms, index) => {
                  return (
                    <div className="label-listDisplay" key={index}>
                      <p
                        onClick={() => {
                          document.querySelector(
                            ".series-listDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".series-arrow img"
                          ).className = "img-arrow";
                          navigate(`TvShowFilms/${listGenreTV.id[index]}`);
                        }}
                      >
                        {nameFilms}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="contact-display" onClick={getGenreDesktop}>
              <div className="contact-label">
                <p>Popular</p>
              </div>
              <div className="contact-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="contact-listDisplay">
              <div className="movies-kotakDisplay">
                {listGenreFilms.name.map((nameFilms, index) => {
                  return (
                    <div className="label-listDisplay" key={index}>
                      <p
                        onClick={() => {
                          document.querySelector(
                            ".contact-listDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".contact-arrow img"
                          ).className = "img-arrow";
                          navigate(`PopularFilms/${listGenreFilms.id[index]}`);
                        }}
                      >
                        {nameFilms}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {user && (
            <div className="AboutUs">
              <div
                className="wishlist-label"
                onClick={() => navigate(`Wishlist/${JSON.parse(user).name}`)}
              >
                <div className="wishlist-length">
                  <p>{CartFilms.length}</p>
                </div>
                <p>Wishlist</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="search">
        <div className="kotakSearch">
          <div className="input">
            <input
              type="text"
              value={inputSearch}
              placeholder="Search"
              className="inputSearch"
              onChange={ListSearch}
            />
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
            <div className="Listmovies-display" onClick={getGenreMobile}>
              <div className="Listmovies-label">
                <p>Recomended</p>
              </div>
              <div className="Listmovies-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="Listmovies-ListDisplay">
              <div className="Listmovies-kotakDisplay">
                {listGenreFilms.name.map((resFIlm, index) => {
                  return (
                    <div className="Listmovies-Listlabel" key={index}>
                      <p
                        onClick={() => {
                          document
                            .querySelector(".listBurgerNav")
                            .classList.remove("activeList");
                          document.querySelector(
                            ".Listmovies-ListDisplay"
                          ).className = "Listmovies-ListDisplay";
                          document.querySelector(
                            ".Listmovies-ListDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".Listmovies-arrow img"
                          ).className = "img-arrow";
                          navigate(
                            `RecomendedFilms/${listGenreFilms.id[index]}`
                          );
                        }}
                      >
                        {resFIlm}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Listseries">
            <div className="Listseries-display" onClick={getGenreMobile}>
              <div className="Listseries-label">
                <p>Tv Show</p>
              </div>
              <div className="Listseries-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="Listseries-ListDisplay">
              <div className="Listseries-kotakDisplay">
                {listGenreTV.name.map((resFIlm, index) => {
                  return (
                    <div className="Listseries-Listlabel" key={index}>
                      <p
                        onClick={() => {
                          document
                            .querySelector(".listBurgerNav")
                            .classList.remove("activeList");
                          document.querySelector(
                            ".Listseries-ListDisplay"
                          ).className = "Listseries-ListDisplay";
                          document.querySelector(
                            ".Listseries-ListDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".Listseries-arrow img"
                          ).className = "img-arrow";
                          navigate(`TvShowFilms/${listGenreTV.id[index]}`);
                        }}
                      >
                        {resFIlm}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Listcontact">
            <div className="Listcontact-display" onClick={getGenreMobile}>
              <div className="Listcontact-label">
                <p>Popular</p>
              </div>
              <div className="Listcontact-arrow">
                <img src={ImgArrowUp} alt="" className="img-arrow" />
              </div>
            </div>
            <div className="Listcontact-ListDisplay">
              <div className="Listcontact-kotakDisplay">
                {listGenreFilms.name.map((resFIlm, index) => {
                  return (
                    <div className="Listcontact-Listlabel" key={index}>
                      <p
                        onClick={() => {
                          document
                            .querySelector(".listBurgerNav")
                            .classList.remove("activeList");
                          document.querySelector(
                            ".Listcontact-ListDisplay"
                          ).className = "Listcontact-ListDisplay";
                          document.querySelector(
                            ".Listcontact-ListDisplay"
                          ).style.display = "none";
                          document.querySelector(
                            ".Listcontact-arrow img"
                          ).className = "img-arrow";
                          navigate(`PopularFilms/${listGenreFilms.id[index]}`);
                        }}
                      >
                        {resFIlm}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="ListAboutUs"
            onClick={() => {
              document
                .querySelector(".listBurgerNav")
                .classList.remove("activeList");
              navigate(`Wishlist/${JSON.parse(user).name}`);
            }}
          >
            <div className="wishlist-length-mobile">
              <p>{CartFilms.length}</p>
            </div>
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
