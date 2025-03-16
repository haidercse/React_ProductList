import React, { useState } from 'react'
import User from './User'

const users = () => {
  const [userName, setUserName] = useState();
  const [userID, setUserId] = useState();
  return (
    <div>
      <User userName = {userName} userID = {userID} />
    </div>
  )
}

export default users
