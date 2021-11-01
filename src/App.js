//imports for components, files, and hooks
import "./App.css";
import { useState } from "react";
import Map from "./components/Map.js";
import GameButtons from "./components/GameButtons.js";
import MoveButtons from "./components/MoveButtons";

//Main function of application
function App() {
  //Sets the state for the map to be viewed on the coordinates in the center of the map
  const [center, setCenter] = useState([43.88, -72.7317]);

  //Returns components
  return (
    //mainContainer wraps around everything within the return statement
    <div id="mainContainer">
      {/* topNav wraps around the navigation */}
      <div id="topNav">
        {/* These are our navigation items */}
        <h3>About</h3>
        <h3>Info</h3>
        <h3>Score:</h3>
        <h3>High Scores</h3>
      </div>
      {/* centerContainer wraps around Info, the Map itself, and the movement (N,E,S,W) */}
      <div id="centerContainer">
        {/* Info section will contain long/lat, etc. */}
        <div id="info-section">This is the info section</div>
        {/* Center position get passed to map as a prop in Map component */}
        <Map center={center} />
        {/* These buttons allow the user to move N, S, E, W */}
        <MoveButtons />
      </div>
      {/* Calls GameButtons component which contain Guess and I Give Up buttons functionality */}
      <GameButtons />
    </div>
  );
}

//Exports the App to index.js
export default App;
