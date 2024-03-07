import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState({
    title: "Hello"
  });

  setInterval(() => {
    setTodos({
      title : "Hit the gym everyday " + (10 * Math.random()),
    })
  }, 1000);

  return (
    <SingleTodo todoForToday={todos}></SingleTodo>
  )
}

function SingleTodo(props){
  return <div>
    {props.todoForToday.title}
  </div>
}

export default App
