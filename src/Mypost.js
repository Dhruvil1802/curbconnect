import React from "react";
import "./curbconnect.css";
import Post from "./Post";
export default function MyPost({ mypostOpen, mypost }) {
  return (
    <div className="body-container">
      {mypostOpen && mypost.map((post) => <Post post={post} />)}
    </div>
  );
}
