import React, { useEffect, useState } from "react";
import axios from 'axios'
import MovieCard from "./MovieCard";
function Movies() {
  const [movies, setMovies] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState([]);

  const handlePrev = () => {
    if (pageNo == 1) return;
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const addtoWatchList = (movieObj) => {
    setWatchList([...watchList, movieObj]);
  }

  const removeFromWatchList = (movieObj) => {
    const updatedWatchList = watchList.filter((movie) => movie.id!=movieObj.id);
    setWatchList([...updatedWatchList]);
    console.log(watchList);
  }
  useEffect(() => {
    const getMovies = async function () {
      console.log("calling getMovies");
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: {language: 'en-US', page: `${pageNo}`},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ZWU4NjkyN2M4NjJlNmFjNDAzNjBlM2ViOGMwZCIsIm5iZiI6MTcyNjUwMjc0OC41OTIzNTQsInN1YiI6IjYyZDA0ZTRmMzk0YTg3MDRhZTVjNWEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pk_1cunUa_P2SaLNSAeyo038EoUDSFceq2BROr3TRXI'
        }
      };
      const response = await axios.request(options);
      const movieData = response.data?.results;
      setMovies(movieData);
    };
    getMovies();
  }, [pageNo]);

  return (
    <>
      {movies == null ? (
        <div>
          <h1>Loading ....</h1>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-2xl font-bold">Trending Movies</h1>
          </div>
          <div className="flex justify-evenly flex-wrap gap-8">
            {movies.map((movieObj) => {
              return (
                <MovieCard 
                key={movieObj.id} 
                movieObj={movieObj}
                watchList={watchList}
                addtoWatchList={addtoWatchList}
                removeFromWatchList={removeFromWatchList}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className="bg-gray-400 h-[50px] w-full mt-6 p-4 flex justify-center gap-2 text-2xl">
        <div className="px-8" onClick={handlePrev}>
          <i class="fa-solid fa-caret-left"></i>
        </div>
        <div>{pageNo}</div>
        <div className="px-8" onClick={handleNext}>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
    </>
  );
}

export default Movies;
