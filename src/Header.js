import "./header.css";

export default function Header({
  createPost,
  request,
  Find,
  MyPost,
  allUsers,
  user,
  SetSelectedUser,
  mypost,
  setMyPost,
  formOpen,
  requestOpen,
  findOpen,
  mypostOpen,
}) {
  function handleSetSelectedUser(event) {
    const newUser = event.target.value;

    SetSelectedUser(newUser);

    const stored_posts = JSON.parse(localStorage.getItem(`${newUser}_posts`))
      ? JSON.parse(localStorage.getItem(`${newUser}_posts`))
      : [];

    setMyPost(stored_posts);
  }
  return (
    <div>
      <header>
        <ul>
          <li>
            <button
              className={`Request header_button ${
                formOpen ? "active_header_button" : ""
              }`}
              onClick={createPost}
            >
              Create Post
            </button>
          </li>
          <li>
            <button
              className={`Request header_button ${
                requestOpen ? "active_header_button" : ""
              }`}
              onClick={request}
            >
              Requests
            </button>
          </li>
          <li>
            <button
              className={`Request header_button ${
                findOpen ? "active_header_button" : ""
              }`}
              onClick={Find}
            >
              Find
            </button>
          </li>
          <li>
            <button
              className={`Request header_button ${
                mypostOpen ? "active_header_button" : ""
              }`}
              onClick={MyPost}
            >
              My post
            </button>
          </li>

          <li className="Users">
            <SelectUser
              allUsers={allUsers}
              user={user}
              handleSetSelectedUser={handleSetSelectedUser}
            />
          </li>
        </ul>
      </header>
    </div>
  );
}

function SelectUser({ allUsers, handleSetSelectedUser, user }) {
  return (
    <div className="user">
      <select
        className="user_dropdown"
        value={user}
        onChange={handleSetSelectedUser}
      >
        {allUsers.map((current_user) => (
          <option
            key={current_user}
            value={current_user}
            className="options_color"
          >
            {current_user}
          </option>
        ))}
      </select>
    </div>
  );
}
