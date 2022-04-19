import React, { ChangeEvent, useState } from 'react';
import './style.css';
import ITypeTodo from './interfaces/ITypeTodo';
import Todo from './components/Todo';

function App() {

  const [text,setText] = useState<string>("");
  const [details,setDetails] = useState<string>("");
  const [todo,setTodo] = useState<ITypeTodo[]>([]);


  const handlerChange = (event:ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "text"){
      setText(event.target.value)
    }else {
      setDetails(event.target.value);
    }
  }


  const addTodo = (): void =>{
   const newTodo = {text, details};
   setTodo([...todo, newTodo]);
   setText("");
   setDetails("");

   console.log(todo);
  }

  const deleteTodo = (todoDelete:string): void =>{
     setTodo(todo.filter((todo) =>{
       return todo.text  != todoDelete;
     }))
  }
  
  return (
  <div className='main'>
    <div className='header'>
      <input value={text} type="text" name='text'  placeholder='Type sonthing for to do' onChange={handlerChange} />
      <input value={details} type="text" name='details' placeholder='Details' onChange={handlerChange} />
      <button onClick={addTodo}>add todo</button>
    </div>
    <div className='list'>
      <div className='todo'>
        {todo.map((todo:ITypeTodo, key:number) =>{
          return <Todo deleteTodo={deleteTodo} key={key} todo={todo}/>
        })}
      </div>
    </div>
   </div>
  );
}

export default App;
