//imports React into component
import React from "react";

//Function creating a modal with VT counties
function Modal(props) {
  //Returns list of VT counties and buttons to guess and cancel county selection
  return (
    //modalBackground wraps around the body of the container so other divs can be organized within
    <div className="modalBackground">
      {/* Title for the modal */}
      <h1>What County Are We In?</h1>
      {/* Div containing list of counties in VT */}
      <div className="body">
        <p>
          Addison County, VT <br />
          Bennington County, VT <br />
          Caledonia County, VT <br />
          Chittenden County, VT <br />
          Essex County, VT <br />
          Franklin County, VT <br />
          Grand Isle County,VT <br />
          Lamoille County, VT <br />
          Orange County, VT <br />
          Orleans County, VT <br />
          Rutland County, VT <br />
          Washington County, <br />
          Windham County, VT <br />
          Windsor County, VT <br />
        </p>
      </div>
      {/* Footer holds Guess and Cancel buttons */}
      <div className="footer">
        {/* Guess button to guess the county */}
        <button>Guess</button>
        {/* Cancel button to get out of the modal */}
        <button>Cancel</button>
      </div>
    </div>
  );
}

//Exports Modal component
export default Modal;
