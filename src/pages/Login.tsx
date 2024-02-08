import { useState } from "react"

function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 


  const handleChange = ({target}) => {
    target.name === 'email' ? setEmail(target.value) : setPassword(target.value) 
    console.log(email,password);
    
    
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
      <button>Entrar</button>
    </form>
    </>
  )
}

export default Login