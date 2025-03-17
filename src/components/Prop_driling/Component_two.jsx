import React from "react";
import Component_three from "./Component_three";

const Component_two = (props) => {

  return (
    <div>
      <Component_three user={props.user} />
    </div>
  );
};

export default Component_two;
