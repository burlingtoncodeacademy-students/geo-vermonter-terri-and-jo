//imports React into application
import React from "react";
//imports hook into application
import { useState } from "react";

function MoveButtons(props) {
    //returns the buttons onto the main page of the application from component
  return (
    //id to style buttons  
    <div id="move-buttons">
        <button>North</button>
        <button>East</button>
        <button>South</button>
        <button>West</button>
    </div>
  )
}

export default MoveButtons;