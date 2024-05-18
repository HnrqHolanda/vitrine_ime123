import Image from 'next/image';
import HeaderC from '../../components/header';
import styles from '../../styles/pages/prop_intelectual.module.css'
import patentes from '../../public/patentes.png'
import computer_programs from '../../public/computer_programs.png'
import { _patentes, _registros } from './model';
import FooterC from '../../components/footer';

export default function PropIntelectual() {
    return (

        <div className={styles.Container}>
            <HeaderC />
            <div className={styles.main}>
                <div className={styles.Text}>
                    <h1>Propriedade Intelectual</h1>
                </div>
            </div>  
            <div className={styles.content1}>
                <div className={styles.Text2}>
                    <h2>Patentes:</h2>
                </div>
                <div className={styles.types}>
                    <h3>Concedidas</h3>
                    <h4>2023</h4>
                    <ul>
                        {_patentes.concedidas[2023].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                    </ul>
                </div>
                <div className={styles.types}>
                    <h3>Depositadas</h3>
                    <h4>2021</h4>
                        <ul>
                            {_patentes.depositadas[2021].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                        </ul>
                    <h4>2020</h4>
                    <div>
                        <ul>
                        {_patentes.depositadas[2020].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.content1}>
                <div className={styles.Text2}>
                    <h2>Registros de Programa:</h2>
                </div>
                <div className={styles.types}>
                    <h4>2024</h4>
                        <ul>
                            {_registros[2024].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                        </ul>
                    <h4>2023</h4>
                    <div>
                        <ul>
                        {_registros[2024].map((item)=><li className={styles.element}><h2>{item}</h2></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>
    );
}