import { UUID } from 'crypto';
import styles from './Login.module.css'
export function Login() {
  interface CreateNewLogin{
    id: UUID,
    username: string,
    password: string,
    created: Date
  }

  return (
    <div className={styles.main}>

      <div className={styles.cardPrincipal}>

        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Login</h1>
        </div>

        <div className={styles.body}>
          <form>

            <div className={styles.userName}>
              <label className={styles.labelUserName} htmlFor='userName'>Nome de usuário:</label>
              <input className={styles.inputUserName} type='text' id='userName' placeholder='Digite seu nome de usuário.' />
            </div>

            <div className={styles.password}>
              <label htmlFor="password" >Password</label>
              <input type="password"  id="password" placeholder="Digite uma senha."/>
            </div>

            <footer>
              <button type="submit">Fazer Login</button>
            </footer>

          </form>
        </div>

      </div>
    
    </div>
  )
  }