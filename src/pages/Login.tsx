import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Context from "../context/Context"
import styles from './Login.module.css'
import img from '../img/image.svg'


function Login() {
  const [email, setEmail] = useState('')
  const { onLogin  } = useContext(Context) 


  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onLogin(email)
  }

  return(
    <>
    <div className={styles.LoginContainer}> 
      <div className={styles.title}>
        <h1>Seja bem vindo</h1>
      </div> 

      <div>
        <img src={img} alt="homen"  />
      </div>

      <div>
      <form onSubmit={handleSubmit}>
        <p className={styles.input}>
          <input
          type="text"
          name="email"
          id="email" 
          placeholder="Insira seu nome"
          onChange={handleChange}
          />
        </p>
        <button className={styles.button} >Entrar</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login