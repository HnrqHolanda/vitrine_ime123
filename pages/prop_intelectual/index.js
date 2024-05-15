import Image from 'next/image';
import HeaderC from '../../components/header';
import styles from '../../styles/pages/prop_intelectual.module.css'
import patentes from '../../public/patentes.png'
import computer_programs from '../../public/computer_programs.png'
import { _patentes, _registros } from './model';
export default function PropIntelectual() {
    return (

        <div className={styles.Container}>
            <HeaderC />
            <div style={{ display: "flex" }}>
                <div style={{ width: "90%", margin:"20px" }}>
                    <div className={styles.main}>
                        <div className={styles.Text}>
                            <h1>Patentes</h1>
                        </div>
                    </div>
                    <div>
                        {_patentes.depositadas[2020].map((item)=><h2>{item}</h2>)}
                    </div>
                </div>
                <div style={{ width: "90%", margin:"20px" }}>
                    <div className={styles.main}>
                        <div className={styles.Text}>
                            <h1>Registro de Programas de Computador</h1>
                        </div>
                    </div>
                    <h1>teste</h1>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.Text}>
                    <h1>Propriedade Intelectual</h1>
                </div>
            </div>
            <div className={styles.Images}>
                <div className={styles.Content}>
                    <Image src={patentes} style={{ width: '40vw', height: '24vw' }}></Image>
                    <h1 style={{ color: "#134f5c" }}>Patentes</h1>
                </div>
                <div className={styles.Content}>
                    <Image src={computer_programs} style={{ width: '40vw', height: '24vw' }}></Image>
                    <h1 style={{ color: "#134f5c" }}>Programas de Computador</h1>
                </div>
            </div>
        </div>
    );
}