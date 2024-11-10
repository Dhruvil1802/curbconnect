import React from "react";
import "./curbconnect.css";

export default function Request({
  requestOpen,
  requestedfrom,
  setRequestedFrom,
  requestedto,
  setRequestedTo,
}) {
  return (
    <div className="body-container">
      {requestOpen &&
        requestedfrom.map((post) => (
          <Post
            post={post}
            setRequestedFrom={setRequestedFrom}
            setRequestedTo={setRequestedTo}
          />
        ))}
    </div>
  );
}

function Post({ post, setRequestedFrom, setRequestedTo }) {
  function handleRequest(accepted) {
    // get object from post.user from localstorage and pass it in the setRequestedTo
    setRequestedTo((RequestedTo) => [
      // data from post.user's local storage
      RequestedTo.map((currentPost) =>
        currentPost === post
          ? { ...currentPost, accepted: accepted }
          : currentPost
      ),
    ]);

    //get object of current user from local storage and pass it into setReqestedForm
    setRequestedFrom((RequestedFrom) =>
      RequestedFrom.map((currentPost) =>
        currentPost === post
          ? { ...currentPost, accepted: accepted }
          : currentPost
      )
    );
    //store this object into localstorage of current user
  }

  return (
    <div className="form-container">
      <div className="post_div">
        <div>
          <p>{post.user}</p>
        </div>
        <br />
        <br />
        <div>
          pick up : <br />
          <p>{post.pick_up}</p>
        </div>
        <br />
        <br />
        <div>
          drop off :<br /> <p>{post.drop_off}</p>
        </div>
        <br />
        <br />
        <div>
          date :<br /> <p>{post.date}</p>
        </div>
        <br />
        <br />
        <div>
          <button onClick={() => handleRequest(true)}>accept</button>
          <button onClick={() => handleRequest(false)}>decline</button>
        </div>
      </div>
    </div>
  );
}
