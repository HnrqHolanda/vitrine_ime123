import styles from '../../styles/pages/parcerias.module.css'
import HeaderC from '../../components/header'
import Image from 'next/image'
import ime from '../../public/Img9.jpeg'
import FooterC from '../../components/footer'
import { useState } from 'react';
import ButtonModal from '../../components/buttonmodal'
import FormularioModal from '../../components/forms';
import ime2 from '../../public/Img8.jpg'

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
                        <h1>Seja parceiro do Instituto Militar de Engenharia</h1>
                        <h3>Estamos aqui para ajudar e colaborar! Preencha o formulário com suas informações e detalhes sobre sua atividade ou projeto, e entraremos em contato em breve para discutir como podemos contribuir juntos.</h3>
                    </div>
                    <div className={styles.Board}>
                        <Image src={ime} style={{width: '45vw', height:'24vw', border: '4px solid white'}}></Image>
                    </div>
                </div>
            </div>
            <div className={styles.invite}>
                <Image src={ime2} style={{width: '1000px', height:'400px', border: '4px solid #49A9F8'}}></Image>
                <div className={styles.invText}>
                    <h1 style={{marginBottom: "8px"}}>Trabalhe conosco!</h1>
                    <p>Lorem Impsum Dolor Sium Dolor Si</p>

                    <div className={styles.button}>
                        <ButtonModal onClick={abrirModal} />
                        {modalAberto && <div className={styles.opaco} />}
                        {modalAberto && <FormularioModal onClose={fecharModal} />}
                    </div>  
                </div>

            </div>
            <FooterC/>
        </div>
    )
}