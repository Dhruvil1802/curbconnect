export default function Post({
  post,
  requestOpen,
  findOpen,
  setRequestedFrom,
  setRequestedTo,
  user,
}) {
  function handleRequestApproval(accepted) {
    // get the data from the local storage of both the user
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

    // set the data in the local storage
    localStorage.setItem(
      `${post.user}_requested_to`,
      JSON.stringify(
        stored_requested_to.map((currentPost) =>
          currentPost.date === post.date &&
          currentPost.pick_up === post.pick_up &&
          currentPost.drop_off === post.drop_off &&
          currentPost.user === user
            ? { ...currentPost, accepted: accepted }
            : currentPost
        )
      )
    );
    localStorage.setItem(
      `${user}_requested_from`,
      JSON.stringify(
        stored_requested_from.map((currentPost) =>
          currentPost.date === post.date &&
          currentPost.pick_up === post.pick_up &&
          currentPost.drop_off === post.drop_off &&
          currentPost.user === post.user
            ? { ...currentPost, accepted: accepted }
            : currentPost
        )
      )
    );

    // set the same data in the state
    setRequestedTo(
      JSON.parse(localStorage.getItem(`${post.user}_requested_to`))
        ? JSON.parse(localStorage.getItem(`${post.user}_requested_to`))
        : []
    );
    setRequestedFrom(
      JSON.parse(localStorage.getItem(`${user}_requested_from`))
        ? JSON.parse(localStorage.getItem(`${user}_requested_from`))
        : []
    );
  }

  function handleRequest() {
    // get the data from the local storage of both the use
    const stored = JSON.parse(
      localStorage.getItem(`${post.user}_requested_from`)
    )
      ? JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
      : [];
    const stored_obj = JSON.parse(localStorage.getItem(`${user}_requested_to`))
      ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
      : [];

    const current_post = {
      user: user,
      date: post.date,
      pick_up: post.pick_up,
      drop_off: post.drop_off,
      accepted: false,
    };
    //store the data in the local storage
    localStorage.setItem(
      `${post.user}_requested_from`,
      JSON.stringify([...stored, current_post])
    );

    localStorage.setItem(
      `${user}_requested_to`,
      JSON.stringify([...stored_obj, { ...post, accepted: false }])
    );

    //set the data in the state
    setRequestedTo(
      JSON.parse(localStorage.getItem(`${user}_requested_to`))
        ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
        : []
    );
  }

  function handleCancelRequest() {
    // get the data from the local storage of both the use
    const stored = JSON.parse(
      localStorage.getItem(`${post.user}_requested_from`)
    )
      ? JSON.parse(localStorage.getItem(`${post.user}_requested_from`))
      : [];

    const stored_obj = JSON.parse(localStorage.getItem(`${user}_requested_to`))
      ? JSON.parse(localStorage.getItem(`${user}_requested_to`))
      : [];

    localStorage.setItem(
      `${user}_requested_to`,
      JSON.stringify(
        stored_obj.filter(
          (stored_post) =>
            !(
              stored_post.user === post.user &&
              stored_post.date === post.date &&
              stored_post.pick_up === post.pick_up &&
              stored_post.drop_off === post.drop_off
            )
        )
      )
    );
    localStorage.setItem(
      `${post.user}_requested_from`,
      JSON.stringify(
        stored.filter(
          (stored_post) =>
            !(
              stored_post.user === user &&
              stored_post.date === post.date &&
              stored_post.pick_up === post.pick_up &&
              stored_post.drop_off === post.drop_off
            )
        )
      )
    );

    // set data in the state from local storage
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
  }

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
        {/* button for request page */}
        {requestOpen && (
          <div>
            {post.accepted ? (
              <button
                className="accept_button"
                onClick={() => handleRequestApproval(false)}
              >
                Decline
              </button>
            ) : (
              <button
                className="accept_button"
                onClick={() => handleRequestApproval(true)}
              >
                Accept
              </button>
            )}
          </div>
        )}
        {/* button for sending requests and cancel request */}
        {findOpen && (
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
                <button
                  className="request_button"
                  onClick={() => handleRequest()}
                >
                  Request
                </button>
              )
            ) : (
              <button
                className="request_button"
                onClick={() => handleRequest()}
              >
                Request
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
