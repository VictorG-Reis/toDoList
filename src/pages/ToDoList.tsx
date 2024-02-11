import { useContext, useEffect } from "react"
import Context from "../context/Context"
import { Todo } from "../services/toDoApi"
import { useNavigate } from "react-router-dom"
import image from '../img/todolistImage.svg'

import styles from './ToDoList.module.css'



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
    <div className={styles.toDoContainer}>
      <h1>Welcome, {user} </h1>

      <div>
        <img src={image} alt="image da pagina de todo"  />
      </div>

      <button className={styles.addTaskButton} onClick={() => navigate("/addtodo")}>Adicionar tarefa</button>

      <div className={styles.tasks}>

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
                <button className={styles.trashButton} onClick={() => handleDelete(todo)}><i className="las la-trash"></i></button>
              </li>
            })
        }
      </div>
    </div>
  )
}

export default ToDoList