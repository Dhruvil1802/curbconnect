import React from "react";
import { useState } from "react";
import "./curbconnect.css";
import Post from "./Post";
export default function Find({
  findOpen,
  displayContent,
  setRequestedTo,
  setRequestedFrom,
  user,
}) {
  return (
    <>
      <div className="body-container">
        {findOpen && (
          <>
            <Search
              displayContent={displayContent}
              user={user}
              setRequestedFrom={setRequestedFrom}
              setRequestedTo={setRequestedTo}
              findOpen={findOpen}
            />
          </>
        )}
      </div>
    </>
  );
}
function Search({
  displayContent,
  user,
  setRequestedTo,
  setRequestedFrom,
  findOpen,
}) {
  // state : pick_up_search
  const [pick_up_search, setPickUpSearch] = useState("");
  // state : drop_off_search
  const [drop_off_search, setDropOffSearch] = useState("");
  // state : date_search
  const [date_search, setDateSearch] = useState("");
  return (
    <>
      <div className="search_div">
        Pick-up:
        <input
          type="search"
          placeholder="Search..."
          value={pick_up_search}
          onChange={(e) => setPickUpSearch(e.target.value)}
        />
        Drop-off:
        <input
          type="search"
          placeholder="Search..."
          value={drop_off_search}
          onChange={(e) => setDropOffSearch(e.target.value)}
        />
        Date:
        <input
          type="search"
          placeholder="Search..."
          value={date_search}
          onChange={(e) => setDateSearch(e.target.value)}
        />
      </div>

      <div>
        {displayContent
          .filter(
            (post) =>
              (post.pick_up.toLowerCase() || "").indexOf(
                pick_up_search != null && pick_up_search.toLowerCase()
              ) === 0
          )
          .filter(
            (post) =>
              (post.drop_off.toLowerCase() || "").indexOf(
                drop_off_search != null && drop_off_search.toLowerCase()
              ) === 0
          )
          .filter(
            (post) =>
              (post.date.toLowerCase() || "").indexOf(
                date_search != null && date_search.toLowerCase()
              ) === 0
          )
          .map((post) => (
            <Post
              post={post}
              setRequestedTo={setRequestedTo}
              setRequestedFrom={setRequestedFrom}
              user={user}
              findOpen={findOpen}
            />
          ))}
      </div>
    </>
  );
}
