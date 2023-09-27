import styles from './Step1.module.css'
import '../fonts.css';
import step2 from '../assets/step2-gray.svg'
import step1 from '../assets/step1-purple.svg'
import step3 from '../assets/step3gray.svg'
import arrowRight from '../assets/arrowRight.svg'
// import {useRouter} from 'next/router'
import { useRouter, withRouter } from 'next/router'

// import { useNavigation } from 'next/navigation';
import Link from 'next/link'

import Image from 'next/image'


export  function Step1() {
  /* const router = useRouter();
  const handleContinuar = () => {
    router.push('/Step2')
  } */

  /* const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('/Step2');
  };
 */
  return (
    

    <div className={styles.main1} >
      <div className={styles.cardMain1}>
        <div className={styles.header1}>
          
              <div className={styles.contatoStep}>
                
                <Image src={step1} alt="numero 1" />
              <p className={styles.textContato}>Contato</p>
              <div>
              <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />

              </div>
              </div>

              <div className={styles.empresaStep}>
                <Image src={step2} alt="numero 3" />
                <p className={styles.textEmpresa}>Empresa</p>
                <div className='iconArrow2'>
                <Image className={styles.iconArrow} src={arrowRight} alt="seta para direita" />
                </div>
              </div>

            <div className={styles.projeto}>
              <Image src={step3} alt="numero 3" />
              <p className={styles.textProjeto}>Projeto</p>
            </div>
          </div>
          <hr />
          <form>
            <div className={styles.ContainerForm}>
              <div className={styles.formName}>
                <label className={styles.labelName} htmlFor="name">Name:</label>
                <input className={styles.inputName} type="text" id="name" placeholder='Digite seu nome.' />
              </div>
              <div className={styles.formphone}>
                <label className={styles.labelphone} htmlFor="phone">Telefone:</label>
                <input className={styles.inputphone} type="tel" id="telephone"  placeholder='Digite seu telefone.'/>
              </div>
              <div className={styles.formEmail}>
                <label className={styles.labelemail} htmlFor="email">E-mail</label>
                <input className={styles.inputemail} type="email" id="email" placeholder='Digite seu e-mail.' />
              </div>
            </div>
          </form>
    <Link href='/Step2'>
        
          <div className={styles.btnSend}>
            <button className={styles.btnContinuar}>Continuar</button>
          </div>
          
          </Link>

        </div>
      </div>
      
    
  );
}
