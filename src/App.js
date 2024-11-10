import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  const allUsers = ["yax", "sarthak", "dhruvil"];

  const [user, SetSelectedUser] = useState("yax");

  const [formOpen, setformOpen] = useState(false);
  const [requestOpen, setrequestOpen] = useState(false);
  const [findOpen, setfindOpen] = useState(false);
  const [mypostOpen, setmypostOpen] = useState(false);

  const Find = () => {
    setfindOpen(true);
    setformOpen(false);
    setrequestOpen(false);
    setmypostOpen(false);
  };

  const request = () => {
    setformOpen(false);
    setrequestOpen(true);
    setfindOpen(false);
    setmypostOpen(false);
  };

  const createPost = () => {
    setformOpen(true);
    setrequestOpen(false);
    setfindOpen(false);
    setmypostOpen(false);
  };

  const MyPost = () => {
    setformOpen(false);
    setrequestOpen(false);
    setfindOpen(false);
    setmypostOpen(true);
  };

  const stored_posts = JSON.parse(localStorage.getItem(`${user}_posts`))
    ? JSON.parse(localStorage.getItem(`${user}_posts`))
    : [];

  const [mypost, setMyPost] = useState(stored_posts);

  return (
    <div className="app-container">
      <Header
        createPost={createPost}
        request={request}
        Find={Find}
        MyPost={MyPost}
        SetSelectedUser={SetSelectedUser}
        allUsers={allUsers}
        mypost={mypost}
        setMyPost={setMyPost}
      />
      <Body
        formOpen={formOpen}
        requestOpen={requestOpen}
        findOpen={findOpen}
        mypostOpen={mypostOpen}
        user={user}
        mypost={mypost}
        setMyPost={setMyPost}
        funcMyPost={MyPost}
      />
    </div>
  );
}

export default App;
