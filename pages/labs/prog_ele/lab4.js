import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab4Page(){

    const list = <ul>Equipamentos:
        <li style={{marginLeft: "20px"}}>
        Analisador de Espectros Ópticos
        </li>
        <li style={{marginLeft: "20px"}}>
        Medidores de Potência Óptica
        </li>
        <li style={{marginLeft: "20px"}}>
        Máquina de Emendas por fusão  
        </li>
        <li style={{marginLeft: "20px"}}>
        Geradores de função, osciloscópios e multímetros digitais diversos (HP, Tektroniks, etc).
        </li>
        <li style={{marginLeft: "20px"}}>
        Software: VPI Transmission and Component Maker
        </li>
        <li style={{marginLeft: "20px"}}>
        Software: Optisystem
        </li>
        </ul>

    return(
        <div>
            <Lab_perfilC 
            BannerImages={bannerImages} 
            title='Laboratório de Fotônica' 
            resume='O Laboratório de Fotônica pertence à Seção de Engenharia Elétrica (SE/3) do Instituto Militar de Engenharia.

            Neste laboratório são exercidas atividades ao nível de graduação e pós-graduação, realizadas pesquisas e desenvolvidos projetos nas áreas relacionadas as Comunicações Ópticas.'
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}