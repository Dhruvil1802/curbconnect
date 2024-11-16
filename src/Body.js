import Createpost from "./Createpost";
import React, { useState } from "react";
import Request from "./Request";
import Find from "./Find";
import MyPost from "./Mypost";

function Body({
  formOpen,
  requestOpen,
  findOpen,
  mypostOpen,
  user,
  mypost,
  setMyPost,
  funcMyPost,
  requestedto,
  setRequestedTo,
  requestedfrom,
  setRequestedFrom,
  displayContent,
}) {
  return (
    <div className="body-container">
      <Createpost
        formOpen={formOpen}
        user={user}
        mypost={mypost}
        setMyPost={setMyPost}
        funcMyPost={funcMyPost}
      />
      <Request
        requestOpen={requestOpen}
        requestedfrom={requestedfrom}
        setRequestedFrom={setRequestedFrom}
        setRequestedTo={setRequestedTo}
        requestedto={requestedto}
        user={user}
      />
      <Find
        findOpen={findOpen}
        displayContent={displayContent}
        setRequestedTo={setRequestedTo}
        requestedto={requestedto}
        setRequestedFrom={setRequestedFrom}
        user={user}
      />
      <MyPost mypostOpen={mypostOpen} mypost={mypost} setMyPost={setMyPost} />
    </div>
  );
}

export default Body;
