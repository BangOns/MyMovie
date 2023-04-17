import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function Main4() {
  return (
    <main className="main4">
      <div className="textTopIn2023">
        <p>Indonesia</p>
      </div>
      <div className="listFilm">
        <Swiper
          navigation={true}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper thisFilm Indonesia"
        >
          <SwiperSlide>
            <div className="Film4">
              <div className="imgFilm4">
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
              <div className="nameFilm4">
                <p></p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Main4;
