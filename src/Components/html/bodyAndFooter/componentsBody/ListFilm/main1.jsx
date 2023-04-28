import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import { GetFilms } from "../../../../../Action/ListFilm1";
import ImgError from "../../../../img/Error-Tv.png";
import { useNavigate } from "react-router";
function Main1() {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ["dataFilm1"],
    async () => {
      return await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1"
      );
    }
  );

  const { GetFilm } = useSelector((state) => state.RecomendedReducer);
  const [page, setPage] = useState(4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let myFilms = data?.data.results;
  useEffect(() => {
    if (!GetFilm && !isLoading) {
      dispatch(GetFilms(myFilms));
    }
  }, [dispatch, GetFilm, isLoading]);

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
    <main className="main1">
      <div className="textTopIn2023">
        <p>Recomended</p>
      </div>
      <div className="listFilm">
        {GetFilm && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm"
          >
            {GetFilm.map((films) => {
              let vote = films.vote_average
                .toLocaleString()
                .split(".")
                .join("");

              return (
                <SwiperSlide key={films.id}>
                  <div className="Film">
                    <div
                      className="imgFilm"
                      onClick={() => navigate(`detailsFilms/${films.id}`)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${films.poster_path}`}
                        alt=""
                      />
                    </div>
                    <div className="rating">
                      <div className="Angkarating">
                        <p>{films.vote_average}</p>
                      </div>
                      <div className="panjangRating">
                        <div
                          className="thisSize"
                          style={{ width: `${vote}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="nameFilm">
                      <p>{films.original_title}</p>
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

export default Main1;
