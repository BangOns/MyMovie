import axios from "axios";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import "../../../../../../css/Preloaders.css";
function ListDetailsTv({ ids }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    ["data-page", id, ids],
    () => {
      return axios.get(
        `
        https:api.themoviedb.org/3/discover/tv?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&with_genres=${id}&page=${ids}`
      );
    },
    {
      select: (data) => {
        return data?.data.results.slice(0, 10);
      },
    }
  );
  return (
    <div>
      {!isLoading ? (
        data.map((genre, index) => {
          let vote = genre.vote_average.toLocaleString().split(".").join("");

          return (
            <Fragment key={index}>
              <div className="FilmSearch">
                <div
                  className="imgFilmSearch"
                  onClick={() => navigate(`/detailsFilmsTv/${genre.id}`)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${
                      genre.poster_path
                        ? genre.poster_path
                        : genre.backdrop_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="ratingSearch">
                  <div className="AngkaratingSearch">
                    <p>
                      {genre.vote_average.toLocaleString().length > 2
                        ? genre.vote_average
                        : `0.${genre.vote_average}`}
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
                  <p>{genre.original_name ? genre.original_name : "Null"}</p>
                </div>
              </div>
            </Fragment>
          );
        })
      ) : (
        <div className="containerLoaders">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </div>
  );
}

export default ListDetailsTv;
