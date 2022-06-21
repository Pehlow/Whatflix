import React, { useState } from "react";

function Home() {
  const [mediaList, setMediaList] = useState([]);
  const [media, setMedia] = useState("");

  const updateValue = () => {
    if (media) {
      setMediaList([...mediaList, media]);
      setMedia("");
    }
  };
  const handleChange = (ev) => {
    setMedia(ev.target.value);
    /* reset timer to fetch */
  };
  const deleteMedia = (index) => {
    const newMediaList = [...mediaList];
    newMediaList.splice(index, 1);
    setMediaList(newMediaList);
  };
  return (
    <div className="flex h-full flex-col justify-center bg-slate-900 p-3 align-middle font-sans font-medium text-slate-50">
      <h1 className="my-8 flex-1 text-center font-sans font-extrabold">
        Find your media
      </h1>
      <div className="flex justify-between border-2 border-solid border-black">
        <input
          className="flex-grow p-5 text-slate-900 focus-visible:outline-none"
          type="text"
          placeholder="New Movie..."
          id="newmovie"
          value={media}
          onChange={handleChange}
          onKeyUp={(ev) => {
            ev.key === "Enter" && updateValue();
          }}
        />
        <input
          type="button"
          value="Add"
          onClick={updateValue}
          className="border-1 flex-initial rounded border-solid p-3"
        />
      </div>
      <h2 className="my-8 flex-1 text-center font-sans">List of medias</h2>
      <div className="flex h-min flex-col overflow-auto">
        {mediaList.map((item, index) => (
          <div key={index} className="my-3" onClick={() => deleteMedia(index)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
