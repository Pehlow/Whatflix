import React from "react";
import HorizontalMediaList from "./HorizontalMediaList";
import Mockup from "./Mockup";

function Home() {
  const movies = Mockup.movies;
  const shows = Mockup.shows;
  return (
    <div className="grid justify-around p-3">
      <HorizontalMediaList list={movies} title="Movies" />
      <HorizontalMediaList list={shows} title="TV Shows" />
    </div>
  );
}

export default Home;
