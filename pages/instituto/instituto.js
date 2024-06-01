import styles from '../../styles/pages/instituto.module.css'
import HeaderC from '../../components/header'
import Image from 'next/image'
import ime from '../../public/constru1.jpeg'
import FooterC from '../../components/footer'
import { useState } from 'react';
import ButtonModal from '../../components/buttonmodal'
import FormularioModal from '../../components/forms';
import ime2 from '../../public/labquim2.jpeg'

export default function parceriaPage(){
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    return(
        

        <div className={styles.Container}>
            <HeaderC/>
            <div className={styles.main}>
                    <div className={styles.Content}>
                        <div className={styles.Text}>
                            <h1>O instituto</h1>
                            <h3>O IME é um estabelecimento de ensino do Departamento de Ciência e Tecnologia (DCT) responsável, no âmbito do Exército Brasileiro, pelo ensino superior de Engenharia e pela pesquisa básica.</h3>
                        </div>
                        <div className={styles.Board}>
                            <Image src={ime} style={{width: '45vw', height:'28vw', border: '4px solid white'}}></Image>
                        </div>
                    </div>
            </div>
            <div className={styles.Content2} >
                <div className={styles.invContent}>
                    <Image src={ime2} style={{width: '1200px', height:'400px', border: '4px solid #49A9F8'}}></Image>
                    <div className={styles.invText}>
                        <div className={styles.invText2}>
                            <h1 style={{marginBottom: "8px"}}>História</h1>
                            <p>Estamos aqui para ajudar e colaborar! Preencha o formulário com suas informações e detalhes sobre sua atividade ou projeto, e entraremos em contato em breve para discutir como podemos contribuir juntos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                    <div className={styles.Content}>
                        <div className={styles.Text}>
                            <h1>O instituto</h1>
                            <h3>O IME é um estabelecimento de ensino do Departamento de Ciência e Tecnologia (DCT) responsável, no âmbito do Exército Brasileiro, pelo ensino superior de Engenharia e pela pesquisa básica.</h3>
                        </div>
                        <div className={styles.Board}>
                            <Image src={ime} style={{width: '45vw', height:'28vw', border: '4px solid white'}}></Image>
                        </div>
                    </div>
            </div>
            <div className={styles.Content2}>
                <div className={styles.invContent}>
                    <Image src={ime2} style={{width: '1200px', height:'400px', border: '4px solid #49A9F8'}}></Image>
                    <div className={styles.invText}>
                        <div className={styles.invText2}>
                            <h1 style={{marginBottom: "8px"}}>História</h1>
                            <p>Estamos aqui para ajudar e colaborar! Preencha o formulário com suas informações e detalhes sobre sua atividade ou projeto, e entraremos em contato em breve para discutir como podemos contribuir juntos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterC/>
        </div>
    )
}