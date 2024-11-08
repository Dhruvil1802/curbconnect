import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

function App() {
  const allUsers = ["yax", "sarthak", "dhruvil"];

  const [user, SetSelectedUser] = useState("yax");

  const [formOpen, setformOpen] = useState(false);
  const [requestOpen, setrequestOpen] = useState(false);
  const [findOpen, setfindOpen] = useState(false);

  const Find = () => {
    setfindOpen(true);
    setformOpen(false);
    setrequestOpen(false);
  };

  const request = () => {
    setformOpen(false);
    setrequestOpen(true);
    setfindOpen(false);
  };

  const createPost = () => {
    setformOpen(true);
    setrequestOpen(false);
    setfindOpen(false);
  };

  return (
    <div className="app-container">
      <Header
        createPost={createPost}
        request={request}
        Find={Find}
        SetSelectedUser={SetSelectedUser}
        allUsers={allUsers}
      />
      <Body
        formOpen={formOpen}
        requestOpen={requestOpen}
        findOpen={findOpen}
        user={user}
      />
    </div>
  );
}

export default App;
