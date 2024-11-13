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

    const stored = JSON.parse(
      localStorage.getItem(`${post.user}_requested_from`)
    )
      ? JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
      : [];

    const current_post = {
      user: user,
      date: post.date,
      pick_up: post.pick_up,
      drop_off: post.drop_off,
      accepted: false,
    };

    localStorage.setItem(
      `${post.user}_requested_from`,
      JSON.stringify([...stored, current_post])
    );

    //store this object into localstorage

    const stored_obj = JSON.parse(localStorage.getItem(`${user}_requested_to`))
      ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
      : [];

    localStorage.setItem(
      `${user}_requested_to`,
      JSON.stringify([...stored_obj, { ...post, accepted: false }])
    );

    setRequestedTo(
      JSON.parse(localStorage.getItem(`${user}_requested_to`))
        ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
        : []
    );
    //store this object into localstorage
  }

  function handleCancelRequest() {
    // store this object into localstorage of current user

    const stored = JSON.parse(
      localStorage.getItem(`${post.user}_requested_from`)
    )
      ? JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
      : [];

    //  requested_from
    const current_post = {
      user: user,
      date: post.date,
      pick_up: post.pick_up,
      drop_off: post.drop_off,
      accepted: false,
    };
    const new_request_from = stored.filter(
      (stored_post) =>
        !(
          stored_post.user === current_post.user &&
          stored_post.date === current_post.date &&
          stored_post.pick_up === current_post.pick_up &&
          stored_post.drop_off === current_post.drop_off
        )
    );
    localStorage.setItem(
      `${post.user}_requested_from`,
      JSON.stringify(new_request_from)
    );

    //store this object into localstorage

    const stored_obj = JSON.parse(localStorage.getItem(`${user}_requested_to`))
      ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
      : [];
    const new_request_to = stored_obj.filter(
      (stored_post) =>
        !(
          stored_post.user === post.user &&
          stored_post.date === current_post.date &&
          stored_post.pick_up === current_post.pick_up &&
          stored_post.drop_off === current_post.drop_off
        )
    );
    localStorage.setItem(
      `${user}_requested_to`,
      JSON.stringify(new_request_to)
    );

    setRequestedTo(
      JSON.parse(localStorage.getItem(`${user}_requested_to`))
        ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
        : []
    );
    setRequestedFrom(
      JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
        ? JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
        : []
    );
    //store this object into localstorage
  }
  return (
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
        {JSON.parse(localStorage.getItem(`${user}_requested_to`)) ? (
          JSON.parse(localStorage.getItem(`${user}_requested_to`)).find(
            (stored_post) => {
              return (
                stored_post.user === post.user &&
                stored_post.pick_up === post.pick_up &&
                stored_post.drop_off === post.drop_off &&
                stored_post.date === post.date
              );
            }
          ) ? (
            <button
              className="request_button"
              onClick={() => handleCancelRequest()}
            >
              Cancel Request
            </button>
          ) : (
            <button className="request_button" onClick={() => handleRequest()}>
              Request
            </button>
          )
        ) : (
          <button className="request_button" onClick={() => handleRequest()}>
            Request
          </button>
        )}
      </div>
    </div>
  );
}

function Search({ displayContent, user, setRequestedTo, setRequestedFrom }) {
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
    </>
  );
}
