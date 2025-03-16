import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const displayName = props.userName ?? "hello world"; // Fallback for null or undefined
  const displayID = props.userID ?? 1222;              // Fallback for null or undefined

  return (
    <div>
      <h2>{displayName}</h2>
      <h2>{displayID}</h2>
    </div>
  );
};

User.propTypes = {
  userName: PropTypes.number.isRequired,
  userID: PropTypes.number.isRequired,
};

// User.defaultProps = {
//   userName: "hello world",
//   userID: 1222,
// };

export default User;