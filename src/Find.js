import React from "react";
import "./curbconnect.css";

function Find({ findOpen }) {
  return (
    <div className="body-container">
      {findOpen && (
        <div className="form-container">
          <form>
            <div>
              <label>Pick Up:</label>
              <input type="text" placeholder="Enter pick up location" />
            </div>
            <div>
              <label>Drop Off:</label>
              <input type="text" placeholder="Enter drop off location" />
            </div>
            <div>
              <label>Date:</label>
              <input type="date" />
            </div>
            <div>
              <button type="submit">Search Ride</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Find;
