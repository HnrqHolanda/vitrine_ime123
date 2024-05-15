import HeaderC from "../../components/header"
import styles from "../../styles/pages/laboratorios.module.css"
import CardC from "../../components/card_grupo"
import image1 from '../../public/imersão1.jpg'
import grupos_array from "../../data/grupesq/grupos_array"

export default function LabPage(){
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <div className={styles.tittle}>
                    <h1>Grupos de Pesquisa</h1>
                </div>
                <div className={styles.board}>
                    <CardC dataarray={grupos_array} title='Engenharia de Defesa'/>
                    <CardC dataarray={grupos_array} title='Propriedades Físicas e Comportamento Mecânico dos Materiais - Ciência dos Materiais
'/>
                </div>
            </div>
        </div>
    )
}