import Createpost from "./Createpost";
// import React, { useState } from "react";
import Request from "./Request";
import Find from "./Find";

function Body({ formOpen, requestOpen, findOpen }) {
  return (
    <div className="body-container">
      <Createpost formOpen={formOpen} />
      <Request requestOpen={requestOpen} />
      <Find findOpen={findOpen} />
    </div>
  );
}

export default Body;
