import "./header.css";

export default function Header({
  createPost,
  request,
  Find,
  allUsers,
  user,
  SetSelectedUser,
}) {
  function handleSetSelectedUser(event) {
    const newUser = event.target.value;

    SetSelectedUser(newUser);
  }
  return (
    <div>
      <header>
        <ul>
          <li className="Create" onClick={createPost}>
            Create Post
          </li>
          <li className="Request" onClick={request}>
            Requests
          </li>
          <li className="Request" onClick={Find}>
            Find
          </li>
          <li className="MyPost">My post</li>

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
