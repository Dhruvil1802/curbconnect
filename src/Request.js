import React from "react";
import "./curbconnect.css";
import Post from "./Post";
export default function Request({
  requestOpen,
  requestedfrom,
  setRequestedFrom,

  setRequestedTo,
  user,
}) {
  return (
    <div className="body-container">
      {requestOpen &&
        requestedfrom.map((post) => (
          <Post
            post={post}
            requestOpen={requestOpen}
            setRequestedFrom={setRequestedFrom}
            setRequestedTo={setRequestedTo}
            user={user}
          />
        ))}
    </div>
  );
}
