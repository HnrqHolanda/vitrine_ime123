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
            <div className={styles.content2}>
                <div className={styles.title}>
                    <h1>Filosofia</h1>
                </div>
                <div className={styles.Boxes}>
                    <div className={styles.box}>
                        <h1>Missão</h1>
                        <p>"Formar, especializar e aperfeiçoar pessoal em nível superior no campo científico-tecnológico e cooperar, pelo ensino e pela pesquisa, para o progresso do Exército Brasileiro e do país."</p>
                    </div>
                    <div className={styles.box}>
                        <h1>Visão</h1>
                        <p>"Ser reconhecido, nacional e internacionalmente, como um Centro de Excelência no Ensino e na Pesquisa em Ciência e Tecnologia."</p>
                    </div>
                    <div className={styles.box2}>
                        <h1>Valores</h1>
                        <div className={styles.list}>
                            <ul>
                                <li>Hierarquia e Disciplina</li>
                                <li>Humanização</li>
                                <li>Qualidade de Ensino e Pesquisa</li>
                                <li>Ética</li>
                                <li>Competência Profissional</li>
                                <li>Espírito de Liderança</li>
                                <li>Pioneirismo</li>
                                <li>Patriotismo</li>
                            </ul>
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
            <FooterC/>
        </div>
    )
}