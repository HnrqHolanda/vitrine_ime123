import Lab_perfilC from "../../../components/lab_perfil"
import { bannerImages } from "../../../data/labs/SE_1/labIC_imgs"

export default function Lab6Page(){

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
            title='Laboratório de Segurança Cibernética' 
            resume='Laboratório destina-se aos estudos e análises na área de segurança cibernética de infraestruturas industriais críticas submetidas a ataques de malware reais. Trata-se de um ambiente de simulação em tempo real do tipo hardware-in-the-loop capaz de representar infraestruturas críticas na área de Sistemas Elétricos, incluindo não somente as camadas de negócios e gestão, de supervisão, de automação e controle, como também a camada da dinâmica operativa dos sistemas. '
            professores='Professores: Professora Rosângela Fernandes Coelho.'
            contatos = "Contato: coelho@ime.eb.br"
            list={list}/>
        </div>
    )
}