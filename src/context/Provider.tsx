import { useState } from "react";
import Context from './Context'
import { useNavigate } from "react-router-dom";


type ProviderProps = {
  children: React.ReactNode
}

function Provider({children}: ProviderProps) {
  const [user, setUser] = useState('')
  const [toDos, setToDos] = useState('')
  const navigate = useNavigate()

  const Onlogin = (email: string) => {
    setUser(email)
    navigate('/todolist')
  }

  const values = {
    Onlogin,
    toDos,
    user
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider