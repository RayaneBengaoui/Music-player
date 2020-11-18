import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={`${isPlaying ? "flip-animation" : "flip-back"}`}
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
