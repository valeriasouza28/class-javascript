import styles from './Step2.module.css'
import '../fonts.css';
import step2 from '../assets/step2-purple.svg'
import step1 from '../assets/stepCompleted.svg'
import step3 from '../assets/step3gray.svg'
import arrowRight from '../assets/arrowRight.svg'
import stepCompleted from '../assets/stepCompleted.svg'
// import { useNavigation } from 'next/navigation';
import Image from 'next/image'
// import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import { request } from 'http';

const router = request('router')


export function Step2() {
  const router = useRouter();

  const navigateHome = () => router.push('/S')

  return (
    <div className={styles.main2} >
      <div className={styles.cardMain2}>
        <div className={styles.header2}>
          
              <div className={styles.contatoStep2}>
                
                <Image src={stepCompleted} alt="completed" />
                <p className={styles.textContato2}>Contato</p>
                <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

              <div className={styles.empresaStep2}>
                <Image src={step2} alt="numero 2" />

              <p className={styles.textEmpresa2}>Empresa</p>
              <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
              </div>

            <div className={styles.projeto2}>
              <Image src={step3} alt="numero 3" />
              <p className={styles.textProjeto2}>Projeto</p>
            </div>
          </div>
          <hr />
          <form>
            <div className={styles.ContainerForm}>
              <div className={styles.formName}>
                <label className={styles.labelName} htmlFor="name">Name:</label>
                <input className={styles.inputName} type="text" id="name" />
              </div>
              <div className={styles.formphone}>
                <label className={styles.labelphone} htmlFor="phone">Telefone:</label>
                <input className={styles.inputphone} type="tel" id="telephone" />
              </div>
              <div className={styles.formEmail}>
                <label className={styles.labelemail} htmlFor="email">E-mail</label>
                <input className={styles.inputemail} type="email" id="email" />
              </div>
            </div>
          </form>

        <div className={styles.btnDownContainer}>

      
        <a >
          <div className={styles.backBtnContainer}>
            <button className={styles.btnBack} onClick={navigateHome}>Voltar</button>
          </div>
        </a>
      

          <div className={styles.NextBtnContainer}>
            <button className={styles.btnNext}>Continuar</button>
            </div>
        </div>

        </div>
      </div>
    
  );
}

 