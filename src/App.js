import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos,settodos]=useState(initTodo);

const addtodo = (title,desc)=>{
  const myTodo = {
    title:title,
    desc:desc,
  }
  settodos([...todos,myTodo]);
  localStorage.setItem("todos",JSON.stringify(todos));
}

const ondelete =(todo)=>{
  settodos(todos.filter((e)=>{
    return e!==todo;
  }))
  
}
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos]);

  return (
    <>
    <Navbar/>
    <Todo todos={todos} ondelete={ondelete} addtodo={addtodo}/>
    </>
  );
}

export default App;
