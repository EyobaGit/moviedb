import React, { useEffect, useState } from "react";
import netflixLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import { movieInstance } from "../../Utility/MovieInstance";
import styles from "./Banner.module.css";
import requests from "./../../Utility/requestUrl";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  console.log(bannerImage); // for test

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* netflix logo */}
        <img className={styles.logoImg} src={netflixLogo} alt="netflix logo" />
        {/* tittle  */}
        <h1 className={styles.title}>{bannerImage.original_name}</h1>
        {/* description  */}
        <h3 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h3>
        <div className={styles.buttonContainer}>
          {/* buttons  */}
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading  */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
