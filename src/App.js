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
  return (
    <div className="app-container">
      <Header
        createPost={createPost}
        request={request}
        Find={Find}
        MyPost={MyPost}
        SetSelectedUser={SetSelectedUser}
        allUsers={allUsers}
      />
      <Body
        formOpen={formOpen}
        requestOpen={requestOpen}
        findOpen={findOpen}
        mypostOpen={mypostOpen}
        user={user}
      />
    </div>
  );
}

export default App;
