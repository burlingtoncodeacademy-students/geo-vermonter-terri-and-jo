//imports for components, files, and hooks
import "./App.css";
import { useState } from "react";
import Map from "./components/Map.js";
import Buttons from "./components/Buttons.js";

//Main function of application
function App() {
  //Sets the state for the map to be viewed on the coordinates in the center of the map
  const [center, setCenter] = useState([43.88, -72.7317]);

 //returns components  
  return (
    <div id="mainContainer">
      <Map center={center} />
      <Buttons />
    </div>
  );
}

//exports the App to index.js
export default App;
