import React, { useEffect, useState } from "react";
import HorizontalMediaList from "./HorizontalMediaList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
    fetch("http://localhost:3002/shows")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  const removeMedia = async (media) => {
    const key = media.hasOwnProperty("first_air_date") ? "shows" : "movies";
    const res = await fetch(`http://localhost:3002/${key}/${media.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(media),
    });
    if (res.ok) {
      if (key === "movies") {
        setMovies(movies.filter((item) => item.id !== media.id));
      } else if (key === "shows") {
        setShows(shows.filter((item) => item.id !== media.id));
      }
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
