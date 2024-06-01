import HeaderC from "../../components/header"
import CardC from "../../components/card_grupo"
import image1 from '../../public/imersão1.jpg'
import grupos_array from "../../data/grupesq/grupos_array"
import styles from '../../styles/pages/grupesq.module.css'
import grupos_array1 from "../../data/grupesq/gp1/linhas_array"
import grupos_array2 from "../../data/grupesq/gp2/linhas_array"
import grupos_array3 from "../../data/grupesq/gp3/linhas_arrays"
import grupos_array4 from "../../data/grupesq/gp4/linhas_array"
import grupos_array5 from "../../data/grupesq/gp5/linhas_array"
import grupos_array6 from "../../data/grupesq/gp6/linhas_array"
import grupos_array7 from "../../data/grupesq/gp7/linhas_array"
import grupos_array8 from "../../data/grupesq/gp8/linhas_array"
import grupos_array9 from "../../data/grupesq/gp9/linhas_array"
import grupos_array10 from "../../data/grupesq/gp10/linhas_array"
import grupos_array11 from "../../data/grupesq/gp11/linhas_array"

export default function LabPage(){
    return(
        <div className={styles.container}>
            <HeaderC/>
            <div className={styles.main}>
                <div className={styles.tittle}>
                    <h1>Grupos de Pesquisa</h1>
                </div>
                <div className={styles.board}>
                    <CardC dataarray={grupos_array1} title='Tecnologia de Informação Geográfica' />
                    <CardC dataarray={grupos_array2} title='Propriedades Físicas e Comportamento Mecânico dos Materiais - Ciência dos Materiais'/>
                    <CardC dataarray={grupos_array3} title='Veículos Militares'/>
                    <CardC dataarray={grupos_array4} title='Armamento'/>
                    <CardC dataarray={grupos_array5} title='Planejamento e Operação de Transportes (PO)'/>
                    <CardC dataarray={grupos_array6} title='Infraestrutura de Transportes (INFRA)'/>
                    <CardC dataarray={grupos_array7} title='Ciência da computação'/>
                    <CardC dataarray={grupos_array8} title='Sistemas Eletrônicos de Defesa e Comunicações.'/>
                    <CardC dataarray={grupos_array9} title='Engenharia Nuclear'/>
                    <CardC dataarray={grupos_array10} title='Engenharia Química'/>
                    <CardC dataarray={grupos_array11} title='Engenharia de Defesa'/>
                </div>
            </div>
        </div>
    )
}