import { useContext, useEffect } from "react"
import Context from "../context/Context"

function ToDoList() {
  const {user, loading, todos, getTodos} = useContext(Context)

  useEffect(() => {
    getTodos()
  },[])


  return (
    <>
    <h1>Welcome, {user} </h1>

    {loading ? 'carregando dados' : 
        todos.map((todo) => { 
          return <li> 
            <input type="checkbox" 
              id="checkbox"
              value={todo.value} 
              checked={todo.checked} 
              key={todo.id} />
            {todo.value}
          </li>
        })
    }
    </>
  )
}

export default ToDoList