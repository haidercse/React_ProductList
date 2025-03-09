import React from "react";

function child(props) {
  props.onHandleChildData("hello sent data fropm child");
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
}

export default child;
