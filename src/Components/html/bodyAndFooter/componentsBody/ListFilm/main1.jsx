import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";
import axios from "axios";
import ImgError from "../../../../img/Error-Tv.png";
import { useNavigate } from "react-router";
function Main1() {
  const { data, isLoading, isError } = useQuery(["dataFilm1"], async () => {
    // Disini saya menganalisis film yang direkomedasikan untuk ditonton yaitu dengan menggunakan top rated karena jika memang video itu baik dan bagus ditonton otomatis rating nya tinggi dan pada sistem API ini menggunakan algoritma collaborative filtering
    // dan kami disini mengambil data nya untk memunculkan film dan data yang bisa diambil
    return await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=df3bdd5a174cac305c5d71d51733fff7&language=en-US&page=1"
    );
  });
  const [page, setPage] = useState(4);
  const navigate = useNavigate();
  // disini kita mengecek data itu ada atau tidak
  let myFilms = data?.data.results;

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
        <p>Recommended</p>
      </div>
      <div className="listFilm">
        {/* Dan dibagian ini kami memunculkan dan menampilkan data yang telah tersedia */}
        {myFilms && !isLoading ? (
          <Swiper
            navigation={true}
            slidesPerView={page}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper thisFilm"
          >
            {myFilms.map((films) => {
              // dan disni kita membuat validasi untuk merapihkan vote avarage pada film
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
          // dan disni kamu membuat validasi jika ada loading
          <div className="containerLoaders">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          isError && (
            // dan disni kamu membuat validasi jika ada loading

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
