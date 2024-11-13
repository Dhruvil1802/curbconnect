import React, { useState } from "react";
import "./curbconnect.css";

function Createpost({ formOpen, user, mypost, setMyPost, funcMyPost }) {
  const [pick_up, setPickup] = useState("");
  const [drop_off, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const current_post = {
      date: date,
      pick_up: pick_up,
      drop_off: drop_off,
      user: user,
      image: image,
    };

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
            <br />
            <div>
              <label>Pick Up:</label>
              <br />
              <input
                type="text"
                placeholder="Enter pick up location"
                onChange={(e) => setPickup(e.target.value)}
                value={pick_up}
              />
            </div>
            <br />
            <br />
            <div>
              <label>Drop Off:</label>
              <br />
              <input
                type="text"
                placeholder="Enter drop off location"
                onChange={(e) => setDrop(e.target.value)}
                value={drop_off}
              />
            </div>
            <br />
            <br />
            <div>
              <label>Date:</label>
              <br />
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </div>
            <br />
            <br />
            <div className="App">
              <h2>Add Image:</h2>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0].name)}
              />
            </div>
            <br />
            <br />
            <div>
              <button className="form_button" type="submit">
                Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Createpost;
