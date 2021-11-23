import React from "react";

import {myNickName} from "../lib/datatPath";

function CommonPage () {
  return (
    <>
      <div>ABOUT ME</div>
      <div>{myNickName}</div>
    </>
  );
}

export default CommonPage;
