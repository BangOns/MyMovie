import React from "react";
import ThumbLikeColor from "../../../../../img/like-21-color.png";
import ThumbLike from "../../../../../img/like-21.png";
import "../../../../../css/Details.scss";
import "../../../../../css/Preloaders.css";
import { useParams } from "react-router";
import ImgError from "../../../../../img/Error-Tv.png";
import { responseTv } from "./getData";
function MainDetailsTv() {
  const { id } = useParams();
  const { data: data1, isLoading, isError } = responseTv(id);

  return (
    <div>
      {data1 && !isLoading && !isError ? (
        <div className="RealContainerDisplayDetails">
          <div className="containerDisplayDetails">
            <div className="DetailsFilms">
              <div className="imgFilms">
                <div className="thisImgFilms">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${
                      data1.data.poster_path
                        ? data1.data.poster_path
                        : data1.data.backdrop_path
                    }`}
                    alt="thisimage"
                  />
                </div>
              </div>
              <div className="ListDetails">
                <div className="JudulFilms">
                  <h3>
                    {data1.data.name ? data1.data.name : <span>N/A</span>}
                  </h3>
                </div>
                <div className="storyLine">
                  <div className="textStoryLine">
                    <p>Storyline</p>
                  </div>
                  <div className="deskripsiDetails">
                    <p>
                      {data1.data.overview ? (
                        data1.data.overview
                      ) : (
                        <span>N/A</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="ListDeskripsi">
                  <div className="Director">
                    <div className="LabelDirector">
                      <p>Director</p>
                    </div>
                    <div className="nameDirector">
                      <p>
                        :{" "}
                        {data1.data.created_by[0] ? (
                          data1.data.created_by[0].name
                        ) : (
                          <span> N/A</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="Reales">
                    <div className="labelReales">
                      <p>Reales</p>
                    </div>
                    <div className="dateReales">
                      <p>
                        :{" "}
                        {data1.data.first_air_date ? (
                          data1.data.first_air_date
                        ) : (
                          <span>N/A</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="Writer">
                    <div className="labelWriter">
                      <p>Writer</p>
                    </div>
                    <div className="nameWriter">
                      <p>
                        :{" "}
                        {data1.data.created_by[0] ? (
                          data1.data.created_by[0].name
                        ) : (
                          <span> N/A</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="Genre">
                    <div className="labelGenre">Genre</div>
                    <div className="nameGenre">
                      <p>
                        :{" "}
                        {data1?.data.genres[0] ? (
                          data1?.data.genres[0].name
                        ) : (
                          <span>N/A</span>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="Production">
                    <div className="labelProduction">
                      <p>Production companies</p>
                    </div>
                    <div className="nameProduction">
                      <p>
                        :{" "}
                        {data1.data.production_companies[0] ? (
                          data1.data.production_companies[0].name
                        ) : (
                          <span>N/A</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="Duration">
                    <div className="labelDuration">
                      <p>Episode</p>
                    </div>
                    <div className="nameDuration">
                      <p>
                        :{" "}
                        {data1.data.number_of_episodes ? (
                          data1.data.number_of_episodes
                        ) : (
                          <span>N/A</span>
                        )}{" "}
                        eps
                      </p>
                    </div>
                  </div>
                  <div className="Rate">
                    <div className="labelRate">
                      <p>Rate</p>
                    </div>
                    <div className="nameRate">
                      <p>
                        :{" "}
                        {data1.data.vote_average
                          ? data1.data.vote_average
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ButtonLikeAndDislike">
                  <div className="buttonLike">
                    <button type="button" className="like">
                      <div className="thumbLike">
                        <img src={ThumbLikeColor} alt="" className="unLike" />
                        <img src={ThumbLike} alt="" className="doneLike" />
                      </div>
                      <div className="textLike">Like</div>
                    </button>
                  </div>
                  <div className="buttonDislike">
                    <button type="button" className="dislike">
                      <div className="thumbDislike">
                        <img
                          src={ThumbLikeColor}
                          alt="dislike"
                          className="unDislike"
                        />
                        <img
                          src={ThumbLike}
                          alt="dislike"
                          className="doneDislike"
                        />
                      </div>
                      <div className="textDislike">Dislike</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isLoading && !isError ? (
        <div className="thisContaner">
          <div className="containerLoaders">
            <div className="lds-dual-ring"></div>
          </div>
        </div>
      ) : (
        !isLoading &&
        isError(
          <div className="thisContainerError">
            <div className="containerError">
              <div className="imgError">
                <img src={ImgError} alt="" />
              </div>
              <div className="textError">
                <p>data tidak ada</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MainDetailsTv;
