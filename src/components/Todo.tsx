import React from "react";
import ITypeTodo from "../interfaces/ITypeTodo";

interface props {
  todo:ITypeTodo,
  deleteTodo(todoDelete:String):void;
}

const Todo:React.FC<props> = ({todo, deleteTodo}:props) => {
   return(
     <div className="text">
       <div className="content">
       <span>{todo.text}</span>
       <span>{todo.details}</span>
       </div>
       <button onClick={() => deleteTodo(todo.text)}>X</button>
     </div>
   );
}

export default Todo;