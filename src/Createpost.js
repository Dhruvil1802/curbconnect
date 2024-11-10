import React, { useState } from "react";
import "./curbconnect.css";

function Createpost({ formOpen, user, mypost, setMyPost, funcMyPost }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const current_post = { date: date, pickup: pickup, drop: drop, user: user };

    localStorage.setItem(
      `${user}_posts`,
      JSON.stringify([...mypost, current_post])
    );

    setMyPost(JSON.parse(localStorage.getItem(`${user}_posts`)));

    //function which gets back to MyPosts
    funcMyPost();
  };

  return (
    <div className="body-container">
      {formOpen && (
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Pick Up:</label>
              <input
                type="text"
                placeholder="Enter pick up location"
                onChange={(e) => setPickup(e.target.value)}
                value={pickup}
              />
            </div>
            <div>
              <label>Drop Off:</label>
              <input
                type="text"
                placeholder="Enter drop off location"
                onChange={(e) => setDrop(e.target.value)}
                value={drop}
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <div>
              <button type="submit">Request</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Createpost;
