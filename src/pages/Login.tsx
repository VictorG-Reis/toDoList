import { FormEvent, useContext, useState } from "react"
import Context from "../context/Context"


function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { Onlogin  } = useContext(Context) 

  

  const handleChange = ({target}: FormEvent<HTMLInputElement>) => {
    target.name === 'email' ? setEmail(target.value) : setPassword(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    Onlogin(email)
    
  }

  return(
    <>
      <h1>pagina de Login</h1>

    <form action="submit">
      <p>
        <input
        type="text"
        name="email"
        id="email" 
        onChange={handleChange}/>
      </p>

      <p>
        <input 
        type="password" 
        name="password" 
        id="password"
        onChange={handleChange}
        />
      </p>
      <button onClick={handleSubmit}>Entrar</button>
    </form>
    </>
  )
}

export default Login