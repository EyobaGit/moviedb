import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movies } from "../../Data/Data";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrl";
function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow tittle="Netflix Trending" movies={movies.trending} />
      <SlideShow tittle="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow tittle="Top Rated" movies={movies.topRated} />
      <SlideShow tittle="Netflix Action" movies={movies.action} />
      <SlideShow tittle="Netflix Comedy" movies={movies.comedy} />
      <SlideShow tittle="Netflix Horror" movies={movies.horror} />
      <SlideShow tittle="Netflix Romance" movies={movies.romance} />
      <SlideShow tittle="Netflix Documentary" movies={movies.documentaries} />
    </div>
  );
}

export default DisplayRow;
