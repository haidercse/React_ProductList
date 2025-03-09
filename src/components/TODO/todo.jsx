import React from 'react'

function todo({todo,index}) {
  return (
    <div>
        <p key={index}>{todo}</p>
    </div>
  )
}

export default todo
