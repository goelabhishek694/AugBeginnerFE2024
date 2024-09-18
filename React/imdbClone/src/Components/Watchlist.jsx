import React, { useEffect, useState } from "react";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      let updatedWatchList = JSON.parse(localStorage.getItem("watchlist"));
      console.log(updatedWatchList);
      setWatchlist(updatedWatchList);
    }
  }, []);
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-4">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              <div>
                <div className="flex">Ratings</div>
              </div>
            </th>
            <th>
              <div>
                <div className="flex">Popularity</div>
              </div>
            </th>
            <th>
              <div>
                <div className="flex">Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide gray-100 border-t border-gray-100">
          {watchlist.map((movieObj) => {
            <tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w=[10rem] object-fit"
                  src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                  alt=""
                />
                <div className="font-medium text-gray-700 text-sm">
                  {movieObj.title}
                </div>
              </td>
              <td className='className="pl-6 py-4"'>{movieObj.vote_average}</td>
              <td className="pl-6 py-4">{movieObj.popularity}</td>
              <td className="pl-6 py-4">Action</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
