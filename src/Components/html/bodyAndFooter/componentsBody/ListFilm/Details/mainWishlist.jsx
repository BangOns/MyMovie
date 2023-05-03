import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ImgError from "../../../../../img/Error-Tv.png";
import "../../../../../css/Preloaders.css";

function MainWishlist() {
  const { CartFilms } = useSelector((state) => state.CartFilmsReducer);

  const navigate = useNavigate();
  function switchToDetails(dataFilm) {
    if (dataFilm.hasOwnProperty("number_of_episodes")) {
      navigate(`/detailsFilmsTv/${dataFilm.id}`);
    } else {
      navigate(`/detailsFilms/${dataFilm.id}`);
    }
  }
  return (
    <main className="mainWishlist">
      <div className="textWishlist">
        <p>Film Favorit </p>
      </div>
      <div className="isiWishlist">
        <div className="ListWishlistFilm">
          {CartFilms.length !== 0
            ? CartFilms.map((film, index) => {
                let vote =
                  film.vote_average.toLocaleString().length > 3
                    ? film.vote_average
                        .toLocaleString()
                        .slice(0, 3)
                        .split(".")
                        .join("")
                    : film.vote_average.toLocaleString().split(".").join("");
                return (
                  <Fragment key={index}>
                    <div className="FilmWishlist">
                      <div
                        className="imgFilmWishlist"
                        onClick={switchToDetails.bind(this, film)}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original/${
                            film.poster_path
                              ? film.poster_path
                              : film.backdrop_path
                          }`}
                          alt=""
                        />
                      </div>
                      <div className="ratingWishlist">
                        <div className="AngkaratingWishlist">
                          <p>
                            {film.vote_average.toLocaleString().length > 3
                              ? film.vote_average.toLocaleString().slice(0, 3)
                              : `0.${film.vote_average}`}
                          </p>
                        </div>
                        <div className="panjangRating">
                          <div
                            className="thisSize"
                            style={{ width: `${vote}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="nameFilmWishlist">
                        <p>{film.title ? film.title : "Null"}</p>
                      </div>
                    </div>
                  </Fragment>
                );
              })
            : CartFilms.length === 0 && (
                <>
                  <div className="containerError">
                    <div className="imgError">
                      <img src={ImgError} alt="" />
                    </div>
                    <div className="textError">
                      <p>data tidak ada</p>
                    </div>
                  </div>
                </>
              )}
        </div>
      </div>
    </main>
  );
}

export default MainWishlist;
