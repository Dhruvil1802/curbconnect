import React from "react";
import "./curbconnect.css";

function Request({ requestOpen }) {
  return (
    <div className="body-container">
      {requestOpen && (
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
              <button type="submit">Accept</button>{" "}
              <button type="submit">Decline</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Request;
