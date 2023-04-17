import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Main2() {
  return (
    <main className="main2">
      <div className="textTopIn2023 Tv">
        <p>Tv Show</p>
      </div>
      <div className="listFilm">
        <Swiper
          navigation={true}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper thisFilm TvShow"
        >
          <SwiperSlide>
            <div className="Film2">
              <div className="imgFilm2">
                <img src="" alt="" />
              </div>
              <div className="rating">
                <div className="Angkarating">
                  <p>8.9</p>
                </div>
                <div className="panjangRating">
                  <div className="thisSize"></div>
                </div>
              </div>
              <div className="nameFilm2">
                <p></p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Main2;
