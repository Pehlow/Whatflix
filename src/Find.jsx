import React, { useRef, useState } from "react";
import debounce from "lodash.debounce";

function Find() {
  const [media, setMedia] = useState("");
  const [filter, setFilter] = useState("movie");
  /* const [results, setResults] = useState([]); */

  const handleChange = (eventQuery) => {
    setMedia(eventQuery.target.value);
    /* fetchQuery(eventQuery.target.value); */
  };

  const toggleFilter = (eventClick) => {
    setFilter(eventClick.target.value);
    /* fetchQuery(media); */
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
  );
}

export default Find;
