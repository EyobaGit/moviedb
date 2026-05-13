import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE="http://image.tmdb.org/t/p/w500"

import styles from './MovieCard.module.css'
function MovieCard({movie}) {
  let genres = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.cardWrapper}>
      {/* poster image    */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />
      {/* hover card  */}
      <div className={styles.hoverCard}>
        {/* img  */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="poster image"
        />
        {/* badge  */}
        <div className={styles.badge}>Recently Added</div>
        {/* button row  */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
        {/* Meta data  */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>UA 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>
        {/* genere  */}
        <div className={styles.genres}>
          {genres?.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
