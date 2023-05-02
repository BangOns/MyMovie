import React from "react";
import ThumbLikeColor from "../../../../../img/like-21-color.png";
import ThumbLike from "../../../../../img/like-21.png";
import "../../../../../css/Details.scss";
import { useParams } from "react-router";
import { response1, response2 } from "./getData";
import ImgError from "../../../../../img/Error-tv.png";

function MainDetailsNewRelease() {
  const { id } = useParams();
  const { data: data1 } = response1(id);
  const { data: data2, isLoading, isError } = response2(data1);
  let getMinutess = data1?.data.runtime;
  let hours = Math.round(getMinutess / 60);
  let minutes = hours % 60;
  let NamaBioskop = [
    "Cinepolis, Pejaten Village",
    "CGV, AEON MALL JGC",
    "Cinema XXI, MALL CIJANTUNG",
    "Cinepolis, Tamini Square",
    "CGV, Buaran Plaza",
    "Cinema XXI, Kuningan City",
    "Cinepolis, Kalibata City Square",
    "Cinema XXI, Cityplaza Klender",
    "CGV Central Park",
  ];
  let RandomBioskop = ~~(Math.random() * NamaBioskop.length);
  return (
    <div>
      {data2 && !isLoading && !isError ? (
        <div className="RealContainerDisplayDetails">
          <div className="containerDisplayDetails">
            <div className="DetailsFilms">
              <div className="imgFilms">
                <div className="thisImgFilms">
                  <img
                    src={
                      data2.data.Poster
                        ? data2.data.Poster
                        : `https://image.tmdb.org/t/p/original/${data1?.data.backdrop_path}`
                    }
                    alt="thisimage"
                  />
                </div>
              </div>
              <div className="ListDetails">
                <div className="JudulFilms">
                  <h3>
                    {data2.data.Title ? data2.data.Title : <span>N/A</span>}
                  </h3>
                </div>
                <div className="storyLine">
                  <div className="textStoryLine">
                    <p>Storyline</p>
                  </div>
                  <div className="deskripsiDetails">
                    <p>
                      {data2.data.Plot ? data2.data.Plot : <span>N/A</span>}
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
                        {data2.data.Actors ? (
                          data2.data.Actors
                        ) : (
                          <span>N/A</span>
                        )}{" "}
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
                        {data2.data.Released ? (
                          data2.data.Released
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
                        {data2.data.Writer ? (
                          data2.data.Writer
                        ) : (
                          <span>N/A</span>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="Genre">
                    <div className="labelGenre">Genre</div>
                    <div className="nameGenre">
                      <p>
                        :{" "}
                        {data2.data.Genre ? data2.data.Genre : <span>N/A</span>}{" "}
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
                        {data1?.data.production_companies[0] ? (
                          data1?.data.production_companies[0].name
                        ) : (
                          <span>N/A</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="Duration">
                    <div className="labelDuration">
                      <p>Duration</p>
                    </div>
                    <div className="nameDuration">
                      <p>
                        :{" "}
                        {data1?.data.runtime ? (
                          `${hours}H ${minutes}m`
                        ) : (
                          <span>N/A</span>
                        )}
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
                        {data2.data.Ratings[0]
                          ? data2.data.Ratings[0].Value
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="Tempat">
                    <div className="labelTempat">
                      <p>On Air</p>
                    </div>
                    <div className="nameTempat">
                      <p>
                        :{" "}
                        {NamaBioskop[RandomBioskop] &&
                          NamaBioskop[RandomBioskop]}
                      </p>
                    </div>
                  </div>
                  <div className="LinkPage">
                    <div className="labelLinkPage">
                      <p>Link Page</p>
                    </div>
                    <div className="nameLinkPage">
                      <p>
                        :{" "}
                        {data1.data.homepage ? (
                          <a href={data1.data.homepage}>
                            {data1.data.homepage}
                          </a>
                        ) : (
                          "N/A"
                        )}
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
        isError && (
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

export default MainDetailsNewRelease;