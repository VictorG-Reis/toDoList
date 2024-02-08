import { useContext } from "react"
import Context from "../context/Context"

function ToDoList() {
  const {user} = useContext(Context)
  return (
    <>
    <h1>Welcome, {user}</h1>
    </>
  )
}

export default ToDoList