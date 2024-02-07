import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ToDoList from './pages/ToDoList'
import AddToDo from './pages/AddToDo'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/todolist' element={<ToDoList/>}/>
      <Route path='/addtodo' element={<AddToDo/>}/>
    </Routes>
    </>
  )
}

export default App
