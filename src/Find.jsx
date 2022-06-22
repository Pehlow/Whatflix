import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";
import Mockup from "./Mockup";
function Find() {
  const [media, setMedia] = useState("");
  const [filter, setFilter] = useState("movie");
  const [results, setResults] = useState([]);

  const handleChange = (eventQuery) => {
    setMedia(eventQuery.target.value);
    fetchQuery(eventQuery.target.value);
  };

  const toggleFilter = (eventClick) => {
    console.log(eventClick.target.value);
    setFilter(eventClick.target.value);
    fetchQuery(media);
  };

  const fetchQuery = useRef(
    debounce(async (query) => {
      if (query && query.length > 1) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/${filter}?api_key=${
            import.meta.env.VITE_API_KEY
          }&query=${query}&language=en-US&page=1&include_adult=false`
        );
        const data = await response.json();
        setResults(data.results);
        console.log(data);
      }
    }, 250)
  ).current;

  return (
    <div className="flex flex-col justify-center p-3">
      <div className="fixed top-0 left-0 flex w-full flex-col bg-neutral-900 bg-opacity-70 p-3 backdrop-blur-xl">
        <input
          type="text"
          name="search"
          id="searchfield"
          className="flex-1 rounded bg-neutral-800 p-3 text-neutral-300 placeholder-neutral-400 focus-within:outline-none"
          placeholder="Search..."
          onChange={handleChange}
          value={media}
        />
        <div className="my-2 flex flex-1 rounded bg-neutral-800">
          <button
            className={
              "flex-1 rounded bg-neutral-800 p-2 text-neutral-300 transition-opacity" +
              (filter === "movie" ? " bg-neutral-700" : "")
            }
            onClick={toggleFilter}
            value="movie"
          >
            Movies
          </button>
          <button
            className={
              "flex-1 rounded bg-neutral-800 p-2 text-neutral-300 transition-opacity" +
              (filter === "tv" ? " bg-neutral-700" : "")
            }
            onClick={toggleFilter}
            value="tv"
          >
            Shows
          </button>
        </div>
      </div>
      <div className="mt-[7rem] flex flex-col">
        {results.map((result) => (
          <div
            key={result.id}
            className="flex max-h-32 flex-1 flex-grow-0 items-center rounded p-3"
          >
            <img
              src={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
                  : "https://via.placeholder.com/500x750"
              }
              alt={result.title}
              className="object-fit max-h-28 w-28 flex-1 grow-0 rounded"
            />
            <div className="flex flex-auto flex-col p-2">
              <h2 className="text-base font-bold text-neutral-50">
                {result.title || result.name}
              </h2>
              <p className="overflow-hidden text-clip text-xs text-neutral-50">
                {result.overview.substring(0, 150) + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Find;
