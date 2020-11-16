//Import Styles
import "./styles/app.scss";

//Import Util
import data from "./util";

//Adding components
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
