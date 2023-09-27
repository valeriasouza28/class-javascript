import styles from './Step1.module.css'
import '../fonts.css';
import step2 from '../assets/step2-gray.svg'
import step1 from '../assets/step1-purple.svg'
import step3 from '../assets/step3gray.svg'
import arrowRight from '../assets/arrowRight.svg'
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';



export  function Step1() {
  const [name, setName] = useState(['']);

  const [newNameText, setNewNameText] = useState('');

  function handleCrateNewName(event: FormEvent) {
    event.preventDefault()

    setName([...name, newNameText]);
    setNewNameText('');
  }

  function handleNewNameChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewNameText(event.target.value);
  }

  function handleNewNameInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewNameEmpty = newNameText.length === 0;

  const [phone, setPhone] = useState(['']);

  const [newPhoneText, setNewPhoneText] = useState('');

  function handleCreateNewPhone(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setPhone([...phone, newPhoneText]);
    setNewPhoneText('');
  }

  function handleNewPhoneChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewPhoneText(event.target.value);
  }

  function handleNewPhoneInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewPhoneEmpty = newPhoneText.length === 0

  const [email, setEmail] = useState(['']);
const [newEmailText, setNewEmailText] = useState('');

function handleCreateNewEmail(event: ChangeEvent<HTMLInputElement>) {
  event.preventDefault();

  setEmail([...email, newEmailText]);
  setNewEmailText('');
}

function handleNewEmailChange(event: ChangeEvent<HTMLInputElement>) {
  event.target.setCustomValidity('');
  setNewEmailText(event.target.value);
}

function handleNewEmailInvalid(event: ChangeEvent<HTMLInputElement>) {
  event.target.setCustomValidity('Esse campo é obrigatório!');
}

const isNewEmailEmpty = newEmailText.length === 0;

let IsInputsEmpty = false;
const arrayWithAllIsInputsEmpty = [isNewNameEmpty, isNewPhoneEmpty, isNewEmailEmpty];

const isEmpty = () => {
  arrayWithAllIsInputsEmpty.forEach((element) => {
    if (element === true) {
      IsInputsEmpty = true;
    }
  });
  return IsInputsEmpty 
}
  
  return (
    

    <div className={styles.main1} >
      <div className={styles.cardMain1}>
        <div className={styles.header1}>
          
              <div className={styles.contatoStep}>
                
                <img src={step1} alt="numero 1" />
              <p className={styles.textContato}>Contato</p>
              <div>
              <img className={styles.iconArrow} src={arrowRight} alt="seta para direita" />

              </div>
              </div>

              <div className={styles.empresaStep}>
                <img src={step2} alt="numero 3" />
                <p className={styles.textEmpresa}>Empresa</p>
                <div className='iconArrow2'>
                <img className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
                </div>
              </div>

            <div className={styles.projeto}>
              <img src={step3} alt="numero 3" />
              <p className={styles.textProjeto}>Projeto</p>
            </div>
          </div>
          <hr />
          <form>
            <div className={styles.ContainerForm}>
              <div className={styles.formName}>
                <label className={styles.labelName} htmlFor="name">Name:</label>
                <input
                  className={styles.inputName}
                  type="text"
                  id="name"
                  placeholder="Digite seu nome."
                  value={newNameText}
                onChange={handleNewNameChange}
                onInvalid={handleNewNameInvalid}
                required
                />

              </div>
              <div className={styles.formphone}>
                <label className={styles.labelphone} htmlFor="phone">Telefone:</label>
                <input
                  className={styles.inputphone}
                  type="number"
                  id="telephone"
                  placeholder="Digite seu telefone."
                  value={newPhoneText}
                  onChange={handleNewPhoneChange}
                  onInvalid={handleNewPhoneInvalid}
                  required
               />
              </div>
              <div className={styles.formEmail}>
                <label className={styles.labelemail} htmlFor="email">E-mail</label>
                  <input
                    className={styles.inputemail}
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail."
                    onChange={handleNewEmailChange}
                    onInvalid={handleNewEmailInvalid}
                    required
                  />
              </div>
            </div>
          </form>
        
          <Link to="/step2">
          <div className={styles.btnSend}>
            <button className={styles.btnContinuar} disabled={isEmpty()}>Continuar</button>
          </div>
          </Link>

        </div>
      </div>
      
    
  );
}
