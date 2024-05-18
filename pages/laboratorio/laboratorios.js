import HeaderC from "../../components/header"
import styles from "../../styles/pages/laboratorios.module.css"
import CardC from "../../components/card_se"
import image1 from '../../public/imersão1.jpg'
import lab_array from "../../data/labs/SE_1/labs_array"
import FooterC from "../../components/footer"

export default function LabPage(){
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <div className={styles.tittle}>
                    <h1>Laboratórios</h1>
                </div>
                <div className={styles.board}>
                    <CardC dataarray={lab_array} title='SE1 - Ensino Basico'/>
                    <CardC dataarray={lab_array} title='SE2 - Engenharia de Fortificação e Construção'/>
                    <CardC dataarray={lab_array} title='SE3 - Ensino Basico'/>
                    <CardC dataarray={lab_array} title='SE4 - Engenharia Mecânica'/>
                    <CardC dataarray={lab_array} title='SE5 - Engenharia Química'/>
                    <CardC dataarray={lab_array} title='SE6 - Engenharia Cartográfica'/>
                    <CardC dataarray={lab_array} title='SE7 - Engenharia Nuclear'/>
                    <CardC dataarray={lab_array} title='SE8 - Engenharia de Materiais'/>
                    <CardC dataarray={lab_array} title='SE9 - Engenharia da Computação'/>
                </div>
            </div>
            <FooterC/>
        </div>
    )
}