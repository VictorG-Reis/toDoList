import { useContext, useEffect } from "react"
import Context from "../context/Context"
import { Todo } from "../services/toDoApi"
import { useNavigate } from "react-router-dom"



function ToDoList() {
  const {user, loading, todos, getTodos, editCheckToDo, deleteTodos} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if(!todos.length)
    getTodos()
  },[todos, getTodos])

  const handleChecked = (todoCheck: Todo) =>{
    editCheckToDo({...todoCheck, checked: !todoCheck.checked})
  }

  const handleDelete = (item: Todo) => {
    deleteTodos(item)
  }


  return (
    <>
    <h1>Welcome, {user} </h1>

    <button onClick={() => navigate("/addtodo")}>adicionar tarefa</button>
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
            <button onClick={() => handleDelete(todo)}>deletar</button>
          </li>
        })
    }
    </>
  )
}

export default ToDoList