import React from "react";
import { useState } from "react";
import "./curbconnect.css";

export default function Find({
  findOpen,
  displayContent,
  setRequestedTo,
  setRequestedFrom,
  user,
}) {
  // state : pick_up_search
  const [pick_up_search, setPickUpSearch] = useState("");
  // state : drop_off_search
  const [drop_off_search, setDropOffSearch] = useState("");
  // state : date_search
  const [date_search, setDateSearch] = useState("");

  return (
    <>
      <div className="body-container">
        {findOpen && (
          <>
            <Search
              pick_up_search={pick_up_search}
              setPickUpSearch={setPickUpSearch}
              drop_off_search={drop_off_search}
              setDropOffSearch={setDropOffSearch}
              date_search={date_search}
              setDateSearch={setDateSearch}
              displayContent={displayContent}
              user={user}
              setRequestedFrom={setRequestedFrom}
              setRequestedTo={setRequestedTo}
            />
          </>
        )}
      </div>
    </>
  );
}

function Post({ post, setRequestedTo, setRequestedFrom, user }) {
  function handleRequest() {
    // store this object into localstorage of current user
    setRequestedTo((RequestedTo) => [
      ...RequestedTo,
      { ...post, accepted: false, user: post.user },
    ]);
    //store this object into localstorage

    // get data from post.user's local storage and pass it to setRequestedFrom,
    //store this object into localstorage of post.user
    setRequestedFrom((RequestedFrom) => [
      ...RequestedFrom,
      { ...post, accepted: false, user: user },
    ]);
    //store this object into localstorage
  }
  return (
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
        <button onClick={() => handleRequest()}>Request</button>
      </div>
    </div>
  );
}

function Search({
  pick_up_search,
  setPickUpSearch,
  drop_off_search,
  setDropOffSearch,
  date_search,
  setDateSearch,
  displayContent,
  user,
  setRequestedTo,
  setRequestedFrom,
}) {
  return (
    <div>
      <div>
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

      <div className="form-container">
        {displayContent
          .filter(
            (post) =>
              (post.pick_up.toLowerCase() || null).indexOf(
                pick_up_search != null && pick_up_search.toLowerCase()
              ) === 0
          )
          .filter(
            (post) =>
              (post.drop_off.toLowerCase() || null).indexOf(
                drop_off_search != null && drop_off_search.toLowerCase()
              ) === 0
          )
          .filter(
            (post) =>
              (post.date.toLowerCase() || null).indexOf(
                date_search != null && date_search.toLowerCase()
              ) === 0
          )
          .map((post) => (
            <Post
              post={post}
              setRequestedTo={setRequestedTo}
              setRequestedFrom={setRequestedFrom}
              user={user}
            />
          ))}
        {/* {displayContent
      .filter(
        (post) =>
          (post.pick_up.toLowerCase() || null).indexOf(
            pick_up_search != null && pick_up_search.toLowerCase()
          ) > 0
      )
      .filter(
        (post) =>
          (post.drop_off.toLowerCase() || null).indexOf(
            drop_off_search != null && drop_off_search.toLowerCase()
          ) > 0
      )
      .filter(
        (post) =>
          (post.date.toLowerCase() || null).indexOf(
            date_search != null && date_search.toLowerCase()
          ) > 0
      )
      .map((post) => (
        <Post post={post} />
      ))} */}
      </div>
    </div>
  );
}
