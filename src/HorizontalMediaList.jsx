import React from "react";

function HorizontalMediaList(props) {
  return (
    <>
      <h1 className="text-lg font-medium text-neutral-50 ">{props.title}</h1>
      <div className="h-64 snap-x overflow-y-hidden overflow-x-scroll whitespace-nowrap ">
        {props.list.map((media) => (
          <div
            key={media.id}
            className="inline-block h-full snap-start -scroll-m-3 rounded p-3 first:scroll-m-0 first:pl-0"
          >
            <img
              src={
                media.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
                  : "https://via.placeholder.com/500x750"
              }
              alt={media.title}
              className="max-h-full rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default HorizontalMediaList;
