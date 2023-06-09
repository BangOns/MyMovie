import axios from "axios";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ImgError from "../../../../img/Error-Tv.png";
import "../../../../css/Preloaders.css";

function MainSearch() {
  const navigate = useNavigate();
  const { searchInput } = useSelector((state) => state.MySearchReducer);
  const { data, isLoading } = useQuery(["data-search", searchInput], () => {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=df3bdd5a174cac305c5d71d51733fff7&page=1&sort_by=popularity.desc&query=${searchInput}`
    );
  });

  return (
    <main className="mainSearch">
      <div className="textSearch">
        <p>Film Results "{searchInput}" </p>
      </div>
      <div className="isiSearch">
        <div className="ListSearchFilm">
          {data?.data.results.length !== 0 && !isLoading
            ? data?.data.results.map((film, index) => {
                let vote =
                  film.vote_average.toLocaleString().length > 2
                    ? film.vote_average
                        .toLocaleString()
                        .slice(0, 3)
                        .split(".")
                        .join("")
                    : film.vote_average.toLocaleString().split(".").join("");
                return (
                  <Fragment key={index}>
                    <div className="FilmSearch">
                      <div
                        className="imgFilmSearch"
                        onClick={() => navigate(`/detailsFilms/${film.id}`)}
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
                      <div className="ratingSearch">
                        <div className="AngkaratingSearch">
                          <p>
                            {film.vote_average.toLocaleString().length > 2
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
                      <div className="nameFilmSearch">
                        <p>{film.title ? film.title : "Null"}</p>
                      </div>
                    </div>
                  </Fragment>
                );
              })
            : data?.data.results.length === 0 &&
              !isLoading && (
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

export default MainSearch;
