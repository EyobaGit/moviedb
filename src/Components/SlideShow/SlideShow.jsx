import React from "react";

import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function SlideShow({ tittle, movies }) {
  return (
    <div>
      <h1 className={styles.title}>{tittle}</h1>
      <div className={styles.row}>
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={5.8}
        >
  {movies?.map((movie) => (
    <SwiperSlide key={movie.id}>
        <MovieCard movie={movie} />
    </SwiperSlide>
          
        ))}
        </Swiper>
      
      </div>
    </div>
  );
}

export default SlideShow;
