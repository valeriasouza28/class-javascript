import styles from './Step3.module.css'
import '../fonts.css';
// import step2 from '../assets/step2.svg'
// import step1 from '../assets/step1.svg'
import step3 from '../assets/step3purple.svg'
import arrowRight from '../assets/arrowRight.svg'
import stepCompleted from '../assets/stepCompleted.svg'
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export function Step3() {

  const [projectObjectives, setProjectObjectives] = useState(['']);

  const [newProjectObjectivesText, setNewProjectObjectivesText] = useState('');

  function handleCrateNewProjectObjectives(event: FormEvent) {
    event.preventDefault()

  setProjectObjectives([...projectObjectives, newProjectObjectivesText]);
    setNewProjectObjectivesText('');
  }

  function handleNewProjectObjectivesChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewProjectObjectivesText(event.target.value);
  }

  function handleNewProjectObjectivesInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewProjectObjectivesEmpty = newProjectObjectivesText.length === 0;

  let IsInputsEmpty = false;
const arrayWithAllIsInputsEmpty = [isNewProjectObjectivesEmpty];

const isEmpty = () => {
  arrayWithAllIsInputsEmpty.forEach((element) => {
    if (element === true) {
      IsInputsEmpty = true;
    }
  });
  return IsInputsEmpty 
}


  return (
    <div className={styles.main3} >
      <div className={styles.cardMain3}>
        <div className={styles.header3}>
          
              <div className={styles.contatoStep3}>
                
                <img src={stepCompleted} alt="completed" />
                <p className={styles.textContato3}>Contato</p>
                <img className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

              <div className={styles.empresaStep3}>
                <img src={stepCompleted} alt="numero 3" />

              <p className={styles.textEmpresa3}>Empresa</p>
              <img className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

            <div className={styles.projeto3}>
              <img src={step3} alt="numero 3" />
              <p className={styles.textProjeto3}>Projeto</p>
            </div>
          </div>
          <hr />
          <form>
            <div className={styles.ContainerForm}>
              <div className={styles.formProjectObjectives}>
                <label className={styles.labelProjectObjectives} htmlFor="projectObjectivesObjectives">Objetivos do projeto</label>
                <textarea className={styles.inputProjectObjectives} name=""
                id='projectObjectives'
                placeholder='Digite aqui os objetivos do Projeto.'
                value={newProjectObjectivesText}
                onChange={handleNewProjectObjectivesChange}
                onInvalid={handleNewProjectObjectivesInvalid}
                required
                 />
              </div>
          
              </div>
          </form>

        <div className={styles.btnDownContainer}>

          <div className={styles.backBtnContainer}>
          <Link to="/step2">
            <button className={styles.btnBack} >Voltar</button>
            </Link>
          </div>
      
          <div className={styles.NextBtnContainer}>
            <button className={styles.btnNext} disabled={isEmpty()}>ENVIAR RESPOSTA</button>
            </div>
      

        </div>

        </div>
      </div>
    
  );
}
