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
    <div>
      <div className="post_div">
        <div className="post_user">
          <p>{post.user}</p>
        </div>
        <br />
        <div className="post_img_div">
          <img className="post_img" src="images/image1.png" alt="image1.png" />
        </div>
        <br />

        <br />
        <br />
        <div>
          travel: <br />
          <p>
            {post.pick_up} to {post.drop_off}
          </p>
        </div>
        <br />
        <br />
        <div>
          date :<br /> <p>{post.date}</p>
        </div>
        <br />
        <br />
        <div>
          {post.accepted ? (
            <button
              className="accept_button"
              onClick={() => handleRequest(false)}
            >
              Decline
            </button>
          ) : (
            <button
              className="accept_button"
              onClick={() => handleRequest(true)}
            >
              Accept
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
