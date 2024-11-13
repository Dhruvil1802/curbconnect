import React from "react";
import "./curbconnect.css";

export default function Request({
  requestOpen,
  requestedfrom,
  setRequestedFrom,
  requestedto,
  setRequestedTo,
  user,
}) {
  return (
    <div className="body-container">
      {requestOpen &&
        requestedfrom.map((post) => (
          <Post
            post={post}
            setRequestedFrom={setRequestedFrom}
            setRequestedTo={setRequestedTo}
            user={user}
            requestedfrom={requestedfrom}
            requestedto={requestedto}
          />
        ))}
    </div>
  );
}

function Post({
  post,
  setRequestedFrom,
  setRequestedTo,
  user,
  requestedto,
  requestedfrom,
}) {
  function handleRequest(accepted) {
    const stored_requested_to = JSON.parse(
      localStorage.getItem(`${post.user}_requested_to`)
    )
      ? JSON.parse(localStorage.getItem(`${post.user}_requested_to`))
      : [];
    const stored_requested_from = JSON.parse(
      localStorage.getItem(`${user}_requested_from`)
    )
      ? JSON.parse(localStorage.getItem(`${user}_requested_from`))
      : [];

    const newRequestedTo = stored_requested_to.map((currentPost) =>
      currentPost.date === post.date &&
      currentPost.pick_up === post.pick_up &&
      currentPost.drop_off === post.drop_off &&
      currentPost.user === user
        ? { ...currentPost, accepted: accepted }
        : currentPost
    );

    const newRequestedFrom = stored_requested_from.map((currentPost) =>
      currentPost.date === post.date &&
      currentPost.pick_up === post.pick_up &&
      currentPost.drop_off === post.drop_off &&
      currentPost.user === post.user
        ? { ...currentPost, accepted: accepted }
        : currentPost
    );

    localStorage.setItem(
      `${post.user}_requested_to`,
      JSON.stringify(newRequestedTo)
    );
    localStorage.setItem(
      `${user}_requested_from`,
      JSON.stringify(newRequestedFrom)
    );

    setRequestedTo(newRequestedTo);
    setRequestedFrom(newRequestedFrom);
  }

  return (
    <div>
      <div className="post_div">
        <div className="post_user">
          <p>{post.user}</p>
        </div>
        <br />
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
