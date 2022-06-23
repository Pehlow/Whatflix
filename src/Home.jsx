import React, { useEffect, useState } from "react";
import HorizontalMediaList from "./HorizontalMediaList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("movies");
    setMovies(JSON.parse(data));
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("shows");
    setShows(JSON.parse(data));
  }, []);

  const removeMedia = (media) => {
    const key = media.hasOwnProperty("first_air_date") ? "shows" : "movies";
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      const newData = data.filter((item) => item.id !== media.id);
      localStorage.setItem(key, JSON.stringify(newData));
    }
  };

  return (
    <>
      <div className="bg-neutral-800 pt-20">
        <h1 className="p-3 text-3xl font-medium text-neutral-50">
          What to watch next ?
        </h1>
      </div>
      <div className="flex flex-col justify-around p-3">
        <HorizontalMediaList
          removeMedia={removeMedia}
          list={movies}
          title="Movies"
        />
        <HorizontalMediaList
          removeMedia={removeMedia}
          list={shows}
          title="TV Shows"
        />
      </div>
    </>
  );
}

export default Home;
