import React from "react";
import "./curbconnect.css";

export default function MyPost({ mypostOpen, mypost }) {
  return (
    <div className="body-container">
      {mypostOpen && mypost.map((post) => <Post post={post} />)}
    </div>
  );
}

function Post({ post }) {
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
      </div>
    </div>
  );
}
