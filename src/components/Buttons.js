//imports React into application
import React from "react";
//imports hook into application
import { useState } from "react";

//function for start, guess, and quit buttons
function Buttons(props) {
  //useState returns 2 values: the state itself (disable) & function to set state value (setDisable)
  //sets the useState to true for disabling the buttons
  const [disable, setDisable] = useState(true);

  //returns the buttons onto the main page of the application from component
  return (
    //id to style buttons  
    <div id="buttons">
        {/*start button code: sets the value of disabled of start to NOT disabled because of bang operator (reverses definition)*/}
      <button disabled={!disable} onClick={() => setDisable(false)}>
        Start
      </button>
      {/* guess button code: sets the value for disabled of guess to disabled */}
      <button disabled={disable}>Guess</button>
      {/* quit button code: sets the value for disabled of guess to disabled, and onclick enables the start button, disabling guess and quit buttons */}
      <button disabled={disable} onClick={() => setDisable(true)}>
        Quit
      </button>
    </div>
  );
}

//exports to App.js
export default Buttons;
