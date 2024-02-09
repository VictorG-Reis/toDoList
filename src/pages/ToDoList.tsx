import { useContext, useEffect } from "react"
import Context from "../context/Context"
import { Todo } from "../services/toDoApi"

function ToDoList() {
  const {user, loading, todos, getTodos, editCheckToDo} = useContext(Context)

  useEffect(() => {
    if(!todos.length)
    getTodos()
  },[])

  const handleChecked = (todoCheck: Todo) =>{
    editCheckToDo({...todoCheck, checked: !todoCheck.checked})
  }


  return (
    <>
    <h1>Welcome, {user} </h1>

    {loading ? <p>'carregando dados'</p> : 
        todos.map((todo) => { 
          return <li key={todo.id} > 
            <input type="checkbox" 
              id="checkbox"
              onChange={() => handleChecked(todo)}
              value={todo.value} 
              checked={todo.checked} 
              />
            {todo.value}
          </li>
        })
    }
    </>
  )
}

export default ToDoList