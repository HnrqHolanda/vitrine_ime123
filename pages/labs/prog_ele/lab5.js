import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab5Page(){

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
            title='Laboratório de Comunicações Digitais' 
            resume='Destina-se ao apoio ao ensino nas áreas de modelagem, identificação e análise de sistemas dinâmicos, projeto de sistemas de controle, bem como aos projetos de pesquisa relacionados às áreas de sistemas de controle ótimo e moderno. Principais recursos disponíveis: bancada experimental Quanser 2 DOF Helicopter e bancada experimental Quanser Engineering Trainer (QET) DC Motor Control. '
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}