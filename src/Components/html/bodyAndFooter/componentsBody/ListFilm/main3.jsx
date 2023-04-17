import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Main3() {
  return (
    <main className="main3">
      <div className="textTopIn2023">
        <p>Popular</p>
      </div>
      <div className="listFilm">
        <Swiper
          navigation={true}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper thisFilm Popular"
        >
          <SwiperSlide>
            <div className="Film3">
              <div className="imgFilm3">
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
              <div className="nameFilm3">
                <p></p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Main3;
