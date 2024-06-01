import HeaderC from "../../components/header"
import styles from "../../styles/pages/laboratorios.module.css"
import CardC from "../../components/card_grupo"
import image1 from '../../public/imersão1.jpg'
import lab_array from "../../data/labs/SE_1/labs_array"
import FooterC from "../../components/footer"
import lab_array4 from '../../data/labs/prog_mat/labs_array'
import lab_array2 from "../../data/labs/prog_cart/labs_array"
import lab_array1 from "../../data/labs/prog_ele/labs_array"
import lab_array3 from "../../data/labs/prog_mec/labs_array"
import lab_array5 from "../../data/labs/prog_quim/labs_array"
import lab_array6 from "../../data/labs/prog_trans/labs_array"

export default function LabPage(){
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <div className={styles.tittle}>
                    <h1>Laboratórios</h1>   
                </div>
                <div className={styles.board}>
                    <CardC dataarray={lab_array1} title='Progama de Pós Graduação em Engenharia Elétrica'/>
                    <CardC dataarray={lab_array2} title='Programa de Pós Graduação em Engenharia Cartográfica'/>
                    <CardC dataarray={lab_array3} title='Programa de Pós Graduação em Engenharia Mecânica'/>
                    <CardC dataarray={lab_array4} title='Programa de Pós Graduação em Ciência dos Materiais'/>
                    <CardC dataarray={lab_array5} title='Programa de Pós Graduação em Engenharia Química'/>
                    <CardC dataarray={lab_array6} title='Programa de Pós Graduação em Engenharia de Transportes'/>
                </div>
            </div>
            <FooterC/>
        </div>
    )
}