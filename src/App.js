//Import Styles
import "./styles/app.scss";

//Import Util
import data from "./util";

//Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import { useState } from "react";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
