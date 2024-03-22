import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([{
    title: "Gym",
    description: "Go to gym 5-7"
  },
  {
    title: "Friend",
    description: "Go to friend house 5-7"
  }
]);

  return (
    <SingleTodo todoForToday={todos}></SingleTodo>
  )
}

function SingleTodo(props){
  return <div>
    {props.todoForToday.map((todo) => {
      return <div>
          {todo.title}   {todo.description}
          <br />
        </div>
    })}
  </div>
}

export default App
