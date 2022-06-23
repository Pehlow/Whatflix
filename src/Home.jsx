import React from "react";
import HorizontalMediaList from "./HorizontalMediaList";
import Mockup from "./Mockup";

function Home() {
  const movies = Mockup.movies;
  const shows = Mockup.shows;
  return (
    <>
      <div className="bg-neutral-800 pt-20">
        <h1 className="p-3 text-3xl font-medium text-neutral-50">
          What to watch next ?
        </h1>
      </div>
      <div className="flex flex-col justify-around p-3">
        <HorizontalMediaList list={movies} title="Movies" />
        <HorizontalMediaList list={shows} title="TV Shows" />
      </div>
    </>
  );
}

export default Home;
