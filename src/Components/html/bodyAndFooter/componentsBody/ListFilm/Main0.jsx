import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
import axios from "axios";
import ImgError from "../../../../img/Error-Tv.png";
import { useNavigate } from "react-router";

function Main0() {
  const { data, isLoading, isError } = useQuery(["dataFilm0"], async () => {
    return await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=df3bdd5a174cac305c5d71d51733fff7&sort_by=popularity.desc&page=1&language=id-ID&region=ID"
    );
  });
  const navigate = useNavigate();
  const [page, setPage] = useState(4);
  let myRelease = data?.data.results;

  useEffect(() => {
    if (innerWidth < 850 && innerWidth > 600) {
      setPage(3);
    } else if (innerWidth < 600 && innerWidth > 430) {
      setPage(2);
    } else if (innerWidth < 430) {
      setPage(1);
    }
  });
  return (
    <main className="main0">
      <div className="textTopIn2023">
        <p>Now Playing</p>
      </div>
      <div className="listFilm">
        {myRelease && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm Popular"
          >
            {myRelease.map((myFilmRelease) => {
              let vote = myFilmRelease.vote_average
                .toLocaleString()
                .split(".")
                .join("")
                .slice(0, 2);

              return (
                <SwiperSlide key={myFilmRelease.id}>
                  <div className="Film0">
                    <div
                      className="imgFilm0"
                      onClick={() =>
                        navigate(`detailsFilmsRelease/${myFilmRelease.id}`)
                      }
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          myFilmRelease.poster_path
                            ? myFilmRelease.poster_path
                            : myFilmRelease.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="rating">
                      <div className="Angkarating">
                        <p>
                          {myFilmRelease.vote_average.toLocaleString().length >
                          2
                            ? myFilmRelease.vote_average
                            : `0.${myFilmRelease.vote_average}`}
                        </p>
                      </div>
                      <div className="panjangRating">
                        <div
                          className="thisSize"
                          style={{ width: `${vote}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="nameFilm0">
                      <p>{myFilmRelease.original_title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : isLoading && !isError ? (
          <div className="containerLoaders">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          isError && (
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
          )
        )}
      </div>
    </main>
  );
}

export default Main0;
