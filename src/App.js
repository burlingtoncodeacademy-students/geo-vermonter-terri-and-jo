//imports for components, files, and hooks
import "./App.css";
import { useState } from "react";
import Map from "./components/Map.js";
import Buttons from "./components/Buttons.js";

//Main function of application
function App() {
  //Sets the state for the map to be viewed on the coordinates in the center of the map
  const [center, setCenter] = useState([43.88, -72.7317]);
  //Sets the state to handle random position of marker on the map
  const [marker, setMarker] = useState([{ lat: 43.88, long: -72.7317 }]);

  //Function to set a random location on map
  function randomLocation(min, max) {
    //Sets the range to difference between min and max plus 1 - the difference is one less than actual possibilities so you add the +1
    let range = max - min + 1;
    //Returns the floor of random number in the range set above
    return Math.floor(Math.random() * range) + min;

    // let longRandom = longMax - longMin + 1;
    // return Math.floor(Math.random() * longRandom) + longMin;
  }
  //Function to set a random latitude
  function randomLat() {
    //Returns a random location within the min and max latitudes of VT
    return randomLocation(42.730315, 45.005419);
  }

  //Function to set a random longitude
  function randomLong() {
    //Returns a random location within the min and max longitudes of VT
    return randomLocation(-73.35218, -71.510255);
  }

  //A guard clause to prevent infinite loop when calling the randomLong() and randomLat()
  if (marker) {
    //Intermediate variables setting above functions to lat and long respectively
    let lat = randomLat();
    let long = randomLong();

    //The setMarker method sets the state of our marker state with random lat and long position
    setMarker({ lat: lat, long: long });
  }

  //Returns components
  return (
    <div id="mainContainer">
      <Map center={center} marker={marker} />
      {/* Center position and Marker position get passed to map as a props in Map component */}
      <Buttons />
    </div>
  );
}

//Exports the App to index.js
export default App;
