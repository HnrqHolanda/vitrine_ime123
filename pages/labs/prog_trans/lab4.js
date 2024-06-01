import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab1Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Equipamento triaxial dinâmico.
        </li>
        <li style={{marginLeft: "20px"}}>
        Moderno sistema de aquisição de dados, com oito canais de entrada para células de carga, transdutores de pressão e sensores de deformação,
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Solos' 
            resume='O laboratório dispõe de todos os equipamentos necessários à realização dos ensaios de caracterização completa, compactação, CBR, adensamento, permeabilidade, cisalhamento direto, compressão triaxial estático e compressão triaxial com carga repetida. Os alunos do PPGT da área de INFRA desenvolvem pesquisas, por exemplo, do comportamento resiliente de solos tropicais em pavimentação rodoviária, agregados artificiais de argila calcinada, comportamento de misturas asfálticas e lastros ferroviários.'
            professores='Professores: Maj. Filipe'
            contatos = "Contato:  filipe.nascimento@ime.eb.br  "
            list={list}/>
        </div>
    )
}