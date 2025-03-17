import React, { useContext } from 'react'
import { userContex } from './UserContex'

const Componnet_four = () => {
    const user = useContext(userContex);
    console.log(user);
    
  return (
    <div>
        <p>{user.user.id}</p>
        <p>{user.user.name}</p>
        <p>{user.text}</p>
    </div>
  )
}

export default Componnet_four
