//imports for components, files, and hooks
import "./App.css";
import { useState } from "react";
import Map from "./components/Map.js";
import Buttons from "./components/Buttons.js";

//Main function of application
function App() {
  //Sets the state for the map to be viewed on the coordinates in the center of the map
  const [center, setCenter] = useState([43.88, -72.7317]);
  //Sets the state to handle random position of marker
  const [marker, setMarker] = useState([{lat: 43.88, long: -72.7317}]);

  //Function to sets a random location
  function randomLocation(min, max) {
    //Setting the range to be the difference between min and max plus 1 because the difference is one less than actual possibilities
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;

    // let longRandom = longMax - longMin + 1;
    // return Math.floor(Math.random() * longRandom) + longMin;

    //use the setMarker method to set the state of our marker state with this random position
  }
  function randomLat() {
    return randomLocation(42.730315, 45.005419);
  }

  function randomLong() {
    return randomLocation(-73.35218, -71.510255);
  }

  if(marker) {
    let lat = randomLat();
    let long = randomLong();
    
    setMarker({lat: lat, long: long});

    //set initial state to these random functions either wrap in guard clause or initial state be set to these values 
  }

  //returns components
  return (
    <div id="mainContainer">
      {/* pass marker position to map as a prop */}
      <Map center={center} marker={marker} />
      <Buttons />
    </div>
  );
}

//exports the App to index.js
export default App;
