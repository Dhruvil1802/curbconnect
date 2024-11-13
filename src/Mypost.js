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
    <>
      <div className="post_div">
        <div className="post_user">
          <p>{post.user}</p>
        </div>
        <br />
        <br />
        <div className="post_img_div">
          <img
            className="post_img"
            src={`images/${post.image}`}
            alt={post.image}
          />
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

        {/* <div>
          <button onClick={() => handleRequest()}>Request</button>
        </div> */}
      </div>
    </>
  );
}
