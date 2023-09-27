import styles from './Step3.module.css'
import '../fonts.css';
import step2 from '../assets/step2.svg'
import step1 from '../assets/step1.svg'
import step3 from '../assets/step3purple.svg'
import arrowRight from '../assets/arrowRight.svg'
import stepCompleted from '../assets/stepCompleted.svg'
import Image from 'next/image'
// import Link from 'next/link'

interface objectivesOfProject{
  objectivsOfProject: string

}
export function Step3() {

  function handleCreateNewFormProject (){
    
    
  }
  return (
    <div className={styles.main3} >
      <div className={styles.cardMain3}>
        <div className={styles.header3}>
          
              <div className={styles.contatoStep3}>
                
                <Image src={stepCompleted} alt="completed" />
                <p className={styles.textContato3}>Contato</p>
                <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

              <div className={styles.empresaStep3}>
                <Image src={stepCompleted} alt="numero 3" />

              <p className={styles.textEmpresa3}>Empresa</p>
              <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

            <div className={styles.projeto3}>
              <Image src={step3} alt="numero 3" />
              <p className={styles.textProjeto3}>Projeto</p>
            </div>
          </div>
          <hr />
          <form>
            <div className={styles.ContainerForm}>
              <div className={styles.formProjectObjectives}>
                <label className={styles.labelProjectObjectives} htmlFor="objectives">Objetivos do projeto</label>
                <textarea className={styles.inputProjectObjectives} name="objctives" placeholder='Digite aqui os objetivos do Projeto.' />
              </div>
          
              </div>
          </form>

        <div className={styles.btnDownContainer}>

          <div className={styles.backBtnContainer}>
            <button className={styles.btnBack}>Voltar</button>
          </div>

      
        <a>
          <div className={styles.NextBtnContainer}>
            <button className={styles.btnNext}>ENVIAR RESPOSTA</button>
            </div>
        </a>
      

        </div>

        </div>
      </div>
    
  );
}
