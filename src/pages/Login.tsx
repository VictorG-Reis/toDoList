import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Context from "../context/Context"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin  } = useContext(Context) 


  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    target.name === 'email' ? setEmail(target.value) : setPassword(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onLogin(email)
    
  }

  return(
    <>
      <h1>pagina de Login</h1>

    <form onSubmit={handleSubmit}>
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
      <button >Entrar</button>
    </form>
    </>
  )
}

export default Login