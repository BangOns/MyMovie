import React from "react";
import "../../../../../css/MainSearch.scss";
import "../../../../../css/BodyAndFooter.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router";
import ListDetailsFilmPopular from "./ListDetailsFilm/ListDetailsFilmPopular";
function MainPopularDetails() {
  const { id } = useParams();
  const displayGenre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { data } = useQuery(
    ["data-name-page"],
    () => {
      return axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US`
      );
    },
    {
      select: (data) => {
        return data?.data.genres.find((gnr) => gnr.id === parseInt(id));
      },
    }
  );

  return (
    <main className="mainSearch">
      <div className="textSearch">
        <p>Film genre "{data ? data.name : "Null"}" </p>
      </div>
      <div className="isiSearch">
        <div className="ListSearchFilm">
          <Swiper
            navigation={true}
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={
              innerWidth < 690 ? 20 : innerWidth < 520 && innerWidth > 450 && 30
            }
            pagination={{ clickable: true }}
            className="mySwiper thisFilm"
          >
            {displayGenre.map((pageGenre) => {
              return (
                <SwiperSlide key={pageGenre}>
                  <ListDetailsFilmPopular ids={pageGenre} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default MainPopularDetails;
