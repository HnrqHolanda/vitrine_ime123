import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Régua de Bitola
        </li>
        <li style={{marginLeft: "20px"}}>
        GPS de Precisão
        </li>
        <li style={{marginLeft: "20px"}}>
        Voidmeter
        </li>
        <li style={{marginLeft: "20px"}}>
        Versine
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Ensino e Pesquisa em Engenharia Ferroviaria' 
            resume='O laboratório dispõe de todos os equipamentos necessários à realização dos ensaios de caracterização completa, compactação, CBR, adensamento, permeabilidade, cisalhamento direto, compressão triaxial estático e compressão triaxial com carga repetida. Os alunos do PPGT da área de INFRA desenvolvem pesquisas, por exemplo, do comportamento resiliente de solos tropicais em pavimentação rodoviária, agregados artificiais de argila calcinada, comportamento de misturas asfálticas e lastros ferroviários.'
            professores='Professores: Luiz Antônio Silveira Lopes'
            contatos = "Contato:  LASLOPES@IME.EB.BR"
            list={list}/>
        </div>
    )
}