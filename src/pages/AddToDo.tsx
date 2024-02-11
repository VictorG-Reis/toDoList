import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Context from "../context/Context"
import image from '../img/addTodoImage.svg'
import styles from './AddToDo.module.css'

function AddToDo() {

  const { addTodos} = useContext(Context)
  
  const [task, setTask] = useState('')

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setTask(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addTodos(task)
  }


  return(
    <div className={styles.addToDoConteiner}>
      <h1>Adicione aqui sua nova tarefa</h1>

      <div>
        <img src={image} alt="image" />
      </div>

      <form onSubmit={handleSubmit}>
        <p>O que você deseja fazer mais tarde..</p>
        <input type="text" placeholder="Adicione a tarefa" name="task" id="task" onChange={handleChange} />
        <button>adicionar na lista</button>
      </form>

    </div>
  )
}

export default AddToDo