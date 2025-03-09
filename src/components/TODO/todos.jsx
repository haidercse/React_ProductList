import React from "react";
import Todo from './todo'
function todos(props) {
  
  return (
    <div>
        {props.todos.map((todo, index)=>
          < Todo key= {index} todo={todo} />
        )}
    </div>
  );
}

export default todos;
