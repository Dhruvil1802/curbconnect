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
  // state : DisplayContent
  // add my_post of all users except self
  // const [displayContent, setDisplayContent] = useState([
  //   {
  //     date: "9/11/24",
  //     pick_up: "sudburry",
  //     drop_off: "toronto",
  //     user: "dhruvil",
  //   },
  //   {
  //     date: "10/11/24",
  //     pick_up: "sudburry",
  //     drop_off: "london",
  //     user: "sarthak",
  //   },
  //   {
  //     date: "11/11/24",
  //     pick_up: "sudburry",
  //     drop_off: "brampton",
  //     user: "dhruvil",
  //   },
  //   {
  //     date: "11/11/24",
  //     pick_up: "sudburry",
  //     drop_off: "north bay",
  //     user: "dhruvil",
  //   },
  //   {
  //     date: "20/11/24",
  //     pick_up: "6A cabot street",
  //     drop_off: "A-602 Elite Smart Homes",
  //     user: "dhruvil",
  //   },
  // ]);
  // state : requestedto
  //current user requested to
  // state : requestedfrom
  // current user requested from

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
