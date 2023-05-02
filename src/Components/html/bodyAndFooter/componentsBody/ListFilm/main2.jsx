import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgError from "../../../../img/Error-Tv.png";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router";

function Main2() {
  const {
    data: data2,
    isLoading,
    isError,
  } = useQuery(["dataFilm2"], async () => {
    return await axios.get(
      "https:api.themoviedb.org/3/discover/tv?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1"
    );
  });
  const navigate = useNavigate();
  const [page, setPage] = useState(4);
  let myTv = data2?.data.results;

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
    <main className="main2">
      <div className="textTopIn2023 Tv">
        <p>Tv Show</p>
      </div>
      <div className="listFilm">
        {myTv && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm TvShow"
          >
            {myTv.map((myTv) => {
              let vote = myTv.vote_average.toLocaleString().split(".").join("");

              return (
                <SwiperSlide key={myTv.id}>
                  <div className="Film2">
                    <div
                      className="imgFilm2"
                      onClick={() => navigate(`detailsFilmsTv/${myTv.id}`)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          myTv.poster_path
                            ? myTv.poster_path
                            : myTv.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="rating">
                      <div className="Angkarating">
                        <p>{myTv.vote_average}</p>
                      </div>
                      <div className="panjangRating">
                        <div
                          className="thisSize"
                          style={{ width: `${vote}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="nameFilm2">
                      <p>{myTv.name}</p>
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

export default Main2;
