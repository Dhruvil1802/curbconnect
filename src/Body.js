import Createpost from "./Createpost";
import React, { useState } from "react";
import Request from "./Request";
import Find from "./Find";
import MyPost from "./Mypost";

function Body({ formOpen, requestOpen, findOpen, mypostOpen, user }) {
  // state : DisplayContent
  // add my_post of all users except self
  const [displayContent, setDisplayContent] = useState([
    {
      date: "9/11/24",
      pick_up: "sudburry",
      drop_off: "toronto",
      user: "dhruvil",
    },
    {
      date: "10/11/24",
      pick_up: "sudburry",
      drop_off: "london",
      user: "sarthak",
    },
    {
      date: "11/11/24",
      pick_up: "sudburry",
      drop_off: "brampton",
      user: "dhruvil",
    },
    {
      date: "11/11/24",
      pick_up: "sudburry",
      drop_off: "north bay",
      user: "dhruvil",
    },
    {
      date: "20/11/24",
      pick_up: "6A cabot street",
      drop_off: "A-602 Elite Smart Homes",
      user: "dhruvil",
    },
  ]);
  // state : requestedto
  //current user requested to
  const [requestedto, setRequestedTo] = useState([
    {
      date: "11/11/24",
      pick_up: "sudburry",
      drop_off: "brampton",
      user: "dhruvil",
      accepted: false,
    },
  ]);
  // state : requestedfrom
  // current user requested from
  const [requestedfrom, setRequestedFrom] = useState([
    {
      date: "8/11/24",
      pick_up: "sudburry",
      drop_off: "ottawa",
      user: "dhruvil",
      accepted: false,
    },
    {
      date: "10/11/24",
      pick_up: "sudburry",
      drop_off: "toronto",
      user: "sarthak",
      accepted: false,
    },
  ]);

  const [mypost, setMyPost] = useState([
    {
      date: "9/11/24",
      pick_up: "sudburry",
      drop_off: "toronto",
      user: "yax",
    },
    {
      date: "10/11/24",
      pick_up: "sudburry",
      drop_off: "london",
      user: "yax",
    },
    {
      date: "11/11/24",
      pick_up: "sudburry",
      drop_off: "brampton",
      user: "yax",
    },
  ]);

  console.log("requestedto", requestedto);
  console.log("requestedfrom", requestedfrom);
  return (
    <div className="body-container">
      <Createpost formOpen={formOpen} />
      <Request
        requestOpen={requestOpen}
        requestedfrom={requestedfrom}
        setRequestedFrom={setRequestedFrom}
        setRequestedTo={setRequestedTo}
        requestedto={requestedto}
      />
      <Find
        findOpen={findOpen}
        displayContent={displayContent}
        setRequestedTo={setRequestedTo}
        requestedto={requestedto}
        setRequestedFrom={setRequestedFrom}
        requestedfrom={requestedfrom}
        user={user}
      />
      <MyPost mypostOpen={mypostOpen} mypost={mypost} setMyPost={setMyPost} />
    </div>
  );
}

export default Body;
