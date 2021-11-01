//imports for files and hooks
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import borderData from "../data/border";
import L from "leaflet";
import leafletPip from "leaflet-pip";
import { useState, useEffect } from "react";

//Function Map holds the functionality for generating the map and random points
function Map(props) {
  //Sets state for disabling the start button
  const [disable, setDisable] = useState(true);
  //Sets the state to handle random position of marker on the map
  const [marker, setMarker] = useState([{ lat: 43.88, long: -72.7317 }]);

  //Variable defining the border of VT
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  //Function to generate random longitude and latitude coordinates on the map
  function randomPoints() {
    //Variables to define map shape,longitude max and min and latitude max and min
    let mapShape = L.geoJSON(borderData);
    let longMin = -73.42613118833583;
    let longMax = -71.51022535353107;
    let latMin = 42.730315121762715;
    let latMax = 45.00541896831666;

    //Setting long and lat variables to random longitude and latitude
    let long = longMin + Math.random() * (longMax - longMin);
    let lat = latMin + Math.random() * (latMax - latMin);

    //Variable using pointInLayer method in Leaflet library to get array of points of long & lat within the boundaries defined by mapShape
    //When the results in array are 0, you're in VT
    let resultsArray = leafletPip.pointInLayer([long, lat], mapShape);

    //Returns longitude, latitude, and resultsArray
    return { long, lat, resultsArray };
  }

  //Setting randomPoint variable to the function randomPoints()
  let randomPoint = randomPoints();
  //Function to reset a point within bounds of VT if function originally points the bounds
  function setPoint() {
    //While randomPoint.resultsArray.length is NOT 0, generate new random points within VT
    while (!randomPoint.resultsArray.length === 0) {
      randomPoint = randomPoints();
    }
  }
  //Calls setPoint function
  setPoint();

  //Returns the map
  return (
    //Div to wrap components
    <div>
      {/* MapContainer sets visual controls within the map and contains the map itself */}
      <MapContainer
        center={props.center}
        zoom={8}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        touchZoom={false}
        style={{ height: "600px", width: "600px" }}
      >
        {/* Tilelayer url pulls map data from Leaflet attribution gives attribution to the source*/}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />
        {/* Marker positions a marker within the center of the map */}
        <Marker position={props.center} />
        {/* Polygon draws the boundary of VT as an orange line*/}
        <Polygon
          positions={vtOutline}
          pathOptions={{ color: "orange", fillOpacity: 0 }}
        />
      </MapContainer>
    </div>
  );
}

//Exports Map component
export default Map;
