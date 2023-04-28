import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { GetPopular } from "../../../../../Action/ListPopular";
import axios from "axios";
import ImgError from "../../../../img/Error-Tv.png";
import { useNavigate } from "react-router";

function Main3() {
  const {
    data: data3,
    isLoading,
    isError,
  } = useQuery(["dataFilm3"], async () => {
    return await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=df3bdd5a174cac305c5d71d51733fff7&page=1"
    );
  });
  const navigate = useNavigate();
  const { GetPops } = useSelector((state) => state.PopularReducer);
  const [page, setPage] = useState(4);
  const dispatch = useDispatch();
  let myPop = data3?.data.results;
  useEffect(() => {
    if (!GetPops && !isLoading) {
      dispatch(GetPopular(myPop));
    }
  }, [dispatch, GetPops, isLoading]);

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
    <main className="main3">
      <div className="textTopIn2023">
        <p>Popular</p>
      </div>
      <div className="listFilm">
        {GetPops && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm Popular"
          >
            {GetPops.map((myFilmPop) => {
              let vote = myFilmPop.vote_average
                .toLocaleString()
                .split(".")
                .join("")
                .slice(0, 2);

              return (
                <SwiperSlide key={myFilmPop.id}>
                  <div className="Film3">
                    <div
                      className="imgFilm3"
                      onClick={() => navigate(`detailsFilms/${myFilmPop.id}`)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${
                          myFilmPop.poster_path
                            ? myFilmPop.poster_path
                            : myFilmPop.backdrop_path
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="rating">
                      <div className="Angkarating">
                        <p>{String(myFilmPop.vote_average).slice(0, 3)}</p>
                      </div>
                      <div className="panjangRating">
                        <div
                          className="thisSize"
                          style={{ width: `${vote}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="nameFilm3">
                      <p>{myFilmPop.original_title}</p>
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

export default Main3;
