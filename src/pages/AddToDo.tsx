import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Context from "../context/Context"

function AddToDo() {

  const {user, addTodos} = useContext(Context)
  
  const [task, setTask] = useState('')

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setTask(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addTodos(task)
  }


  return(
    <>
    <h1>welcome, {user}</h1>

    <form onSubmit={handleSubmit}>
      <p>adicione uma tarefa</p>
      <input type="text" name="task" id="task" onChange={handleChange} />

      <button>adicionar na lista</button>

    </form>
    </>
  )
}

export default AddToDo