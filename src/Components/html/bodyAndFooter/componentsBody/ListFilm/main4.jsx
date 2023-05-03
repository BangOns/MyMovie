import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
import ImgError from "../../../../img/Error-Tv.png";
import axios from "axios";
import { useNavigate } from "react-router";

function Main4() {
  const {
    data: data4,
    isLoading,
    isError,
  } = useQuery(
    ["dataFilm4"],
    async () => {
      return await axios.get(
        "https://api.themoviedb.org/3/keyword/7348-indonesia/movies?api_key=df3bdd5a174cac305c5d71d51733fff7&language=id-ID&page=3"
      );
    },
    {
      select: (data) => {
        let response = data?.data.results.filter((v) => {
          return v.original_language === "id";
        });
        return response;
      },
    }
  );
  const navigate = useNavigate();
  const [page, setPage] = useState(4);
  let myIndo = data4;
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
    <main className="main4">
      <div className="textTopIn2023">
        <p>Indonesia</p>
      </div>
      <div className="listFilm">
        {myIndo && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm Indonesia"
          >
            {myIndo.map((myFilmIndo) => {
              let vote = myFilmIndo.vote_average
                .toLocaleString()
                .split(".")
                .join("")
                .slice(0, 2);
              return (
                <SwiperSlide key={myFilmIndo.id}>
                  <div className="Film4">
                    <div
                      className="imgFilm4"
                      onClick={() => navigate(`detailsFilms/${myFilmIndo.id}`)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          myFilmIndo.poster_path
                            ? myFilmIndo.poster_path
                            : myFilmIndo.backdrop_path
                        }`}
                        alt={`Image ${myFilmIndo.original_title}`}
                      />
                    </div>
                    <div className="rating">
                      <div className="Angkarating">
                        <p>{String(myFilmIndo.vote_average).slice(0, 3)}</p>
                      </div>
                      <div className="panjangRating">
                        <div
                          className="thisSize"
                          style={{ width: `${vote}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="nameFilm4">
                      <p>{myFilmIndo.original_title}</p>
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

export default Main4;
