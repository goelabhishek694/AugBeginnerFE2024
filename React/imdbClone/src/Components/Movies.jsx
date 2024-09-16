import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) return;
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    const getMovies = async function () {
      console.log("calling getMovies");
      const resp = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
      );
      const { results } = await resp.json();
      console.log(results);
      setMovies(results);
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
                <div
                  className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
                  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`}}
                >
                  <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl">
                    {movieObj.title}
                  </div>
                </div>
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
