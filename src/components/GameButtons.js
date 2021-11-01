//imports React into application
import React from "react";
//imports hook into application
import { useState } from "react";

//Function for start, guess, and quit buttons
function Buttons(props) {
  //UseState returns 2 values: the state itself (disable) & function to set state value (setDisable)
  //Sets the useState to true for disabling the buttons
  const [disable, setDisable] = useState(true);

  //Returns the buttons onto the main page of the application from component
  return (
    //id to style buttons  
    <div id="game-buttons">
        {/* Start button code: sets the value of disabled of start to NOT disabled because of bang operator (reverses definition) */}
      <button disabled={!disable} onClick={() => setDisable(false)}>
        Start a Game
      </button>
      {/* Guess button code: sets the value for disabled of guess to disabled */}
      <button disabled={disable}>Guess the Spot</button>
      {/* Quit button code: sets the value for disabled of guess to disabled, and onclick enables the start button, disabling guess and quit buttons */}
      <button disabled={disable} onClick={() => setDisable(true)}>
        I Give Up!
      </button>
    </div>
  );
}

//Exports to App.js
export default Buttons;
